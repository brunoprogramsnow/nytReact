import React from 'react';
import ReactDOM from 'react-dom';
// import helper from '../../../utils/helper.js';

class DisplayResults extends React.Component{
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
//make render function as small as possible

  render(){
      return (
          <div className="list-group-item col-md-12">
            <div className="col-md-12">
              <h5 className="col-md-12">{this.props.abs}</h5>
            <h6 className="col-md-8">{this.props.pub_date}</h6>
                <div className='btn-group col-md-4'>
                  <div className='pull-right'>
                    <a>
                      <button className="btn btn-default">Save</button>
                    </a>
                    <a href={this.props.url}>
                      <button className="btn btn-default">View Article</button>
                    </a>
                  </div>
                </div>
            </div>
          </div>
      )
  }
}
//props
module.exports = DisplayResults;