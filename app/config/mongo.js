var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExampleSchema = new nytReact({
  title: {
    type: String,
    trim: true,
    required: true
  }, 
   date: {
    type: String,
    trim: true,
    required: true
  }, 
 url: {
    type: String,
    trim: true,
    required: true
  }, 

});

var Example = mongoose.model('Schema', ExampleSchema);
module.exports = schema;