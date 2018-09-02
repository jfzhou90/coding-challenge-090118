const router = require('express').Router();
const FetchData = require('./fetchData');
const FakeData = require('./fakeData');
const AddData = require('./addData');

// data routes
router.get('/fetch', FetchData);
router.get('/fake-data', FakeData);
router.post('/add', AddData)

module.exports = router;