import axios from 'axios';
import Articles from '../config/mongo'

// SETUP VARIABLES
// ==========================================================

// This variable will be pre-programmed with our authentication key (the one we received when we registered)
const authKey = 'a4fb740b06894f10b8cbfc71d3e5829a';
let queryURL = 'http://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key='+ authKey +'&q='

// These variables will hold the results we get from the user's inputs via HTML

var helper = {
 performApiCall: function(term, startYear, endYear, cb){
     queryURL = queryURL + term + '&begin_date='+ startYear+'&end_date='+ endYear;
     axios.get(queryURL).then(function(res){
       let query = res.data.response.docs;

       console.log(query.length);
       console.log(query[0].headline.main);
       console.log(query[0].pub_date);
       console.log(query[0].web_url);

       return cb(query);
     });
 },
 saveData: function(data){
   //this will save user selected articles to mongo db
   console.log(data);
   axios.get('/api/get').then(function(res){
     console.log('this is api/get in axios');
     console.log(res);
   })
 },
 getData: function(data){
   //this will retrieve all user selected articles from mongo db
 },
 deleteData: function(data){
   //this will delete a user selected article to mongo db
 }
}
module.exports = helper;