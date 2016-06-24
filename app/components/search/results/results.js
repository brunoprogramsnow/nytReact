import React from 'react';
import ReactDOM from 'react-dom';
import DisplayResults from './display_results.js';
// import helper from '../../../utils/helper.js';

class Results extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        data : this.props.data
      }
  }

  componentWillMount(){

    this.setState({
      data: this.props.data
    });
  }
  //TODO create a render results fucntion to catch all the results from the api call, then pass it into the render function. map it over the state.data

//make render function as small as possible

  render(){
      let {data} = this.props
      let articles_container = []

      for (var i = 0; i < data.length; i++) {
        console.log(data[i])
        articles_container.push(
          <DisplayResults
            key={data[i].id}
            abs={data[i].abs}
            pub_date={data[i].pub_date}
            url={data[i].url}/>)
      }

      return (
          <div className="list-group-item col-md-12">
            {articles_container}
          </div>
      )
  }
}
//props
module.exports = Results;