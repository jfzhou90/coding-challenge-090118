import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPeople } from '../Reducers/actions'

class NewContact extends Component {
  constructor(props){
    super(props)

    this.state={
      first_name:"",
      last_name:"",
      home:""
    }
  }

  handleSubmit = () => {
    this.props.addPeople(this.state);
    this.setState({ first_name: "" });
    this.setState({ last_name: "" });
    this.setState({ home: "" });
  }

  render(){
    return(
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-4 text-center">
            <span>First Name: </span>
            <input type="text" onChange={(e) => this.setState({ first_name: e.target.value })} value={this.state.first_name}/>
          </div>
          
          <div className="col-md-4 text-center">
            <span>Last Name: </span>
            <input type="text" onChange={(e) => this.setState({ last_name: e.target.value })} value={this.state.last_name}/>
          </div>

          <div className="col-md-3 text-center">
            <span>Home: </span>
            <input type="text" onChange={(e) => this.setState({ home: e.target.value })} value={this.state.home}/>
          </div>

          <div className="col-md-1 text-center">
            <button onClick={this.handleSubmit}>Add</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ addPeople }, dispatch)
}

export default connect(null, mapDispatchToProps)(NewContact)