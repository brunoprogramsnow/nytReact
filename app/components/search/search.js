import React from 'react';
import ReactDOM from 'react-dom';
import Results from './results/results.js';
import helper from '../../utils/helper.js';

class Search extends React.Component {
  //the constructor will taake in props whos state will need to change
  constructor(props){
    super(props);

    this.state = {
      article_data: []
    //insert state attributes here
    };


  }

  componentWillMount() {

    this.callHelper.bind(this);

  }


  callHelper(){
    let formValues = {
      search: document.getElementById('search').value,
      start: document.getElementById('start').value,
      end: document.getElementById('end').value
    }

    let apiArr = []

    helper.performApiCall(formValues.search, formValues.start, formValues.end, (function cb(res){

          console.log(res);

          for(var i = 0; i < res.length; i++){
            let apiObj = {
              id: res[i]._id,
              pub_date: res[i].pub_date,
              url: res[i].web_url,
              abs: res[i].headline.main
            }
            apiArr.push(apiObj)
            console.log(apiArr);
          }

          this.setState({
            article_data: apiArr
          });
    }).bind(this));

  }

  render(){
    let { formValues } = this.props;
    let { article_data } = this.state;
    return (
      <div className="col-md-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">
              <strong>
                <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                <span>Query</span>
              </strong>
            </h1>
          </div>
          <div className="panel-body">
            <form>
              <div className="form-group">

                <h4 className="">Topic</h4>
                <input type="text" className="form-control" id="search"  required />
                <h4 className="" >Start Year</h4>
                <input type="number" className="form-control" id="start"  required />
                <h4 className="" >End Year</h4>
                <input type="number" className="form-control" id="end" required />
              </div>

              <div className="pull-right">
                <button type="button" className="btn btn-danger btn-sm" onClick={this.callHelper.bind(this)}>
                  <h4>Submit</h4>
                </button>
              </div>
            </form>
          </div>
        </div>
        <Results data={ article_data } />
      </div> // end of component container
    )
  }//end of render
}
//props

module.exports = Search;