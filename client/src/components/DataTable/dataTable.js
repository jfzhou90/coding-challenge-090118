import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactTable from 'react-table';
import { fetchPeople } from '../Reducers/actions'

import loader from './loading-gif.gif';

class DataTable extends Component {
  componentWillMount() {
    this.props.fetchPeople()
  }

  renderTable = () => {
    const columns = [
      {
        Header: 'First Name',
        accessor: 'first_name'
      }, {
        Header: 'Last Name',
        accessor: 'last_name'
      }, {
        Header: 'Home',
        accessor: 'home'
      }
    ]

    return <ReactTable data={this.props.people} columns={columns} defaultPageSize={10}/>
  }

  render() {
    if (this.props.people.length === 0) {
      return (
        <div className="justify-content-center text-center">
          <h1 className="text-center mt-5">Loading... Please Wait...</h1>
          <img src={loader} alt='loading' />
        </div>
      )
    } else {
      return (
        <div className="mx-4 mt-2">
          {this.renderTable()}
        </div>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPeople }, dispatch)
}
const mapStateToProps = ({ people }) => {
  return { people }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTable)