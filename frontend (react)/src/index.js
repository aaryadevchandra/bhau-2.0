//ON OFF button example - states, event handlers, event handlers binding, setState

// import reportWebVitals from './reportWebVitals';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// class Click extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       toggle : true
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(){
//     this.state.toggle ? this.setState({toggle : false}) : this.setState({toggle: true});
//   }

//   render(){
//     return (
//       <button onClick={this.handleClick}>{this.state.toggle ? 'ON' : 'OFF'}</button>
//     )
//   }
// }



//example setState, function binding, parameter passed to bound function
// ReactDOM.render(<Click/>, document.getElementById('root'));
// reportWebVitals();


// import reportWebVitals from './reportWebVitals';

// import React from 'react';
// import ReactDOM from 'react-dom';

// class Click extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       count: 0
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(number){
//     this.setState({count: number});
//   }

//   render(){
//     return (
//       <button onClick={() => this.handleClick(69420)}>{this.state.count}</button>
//     )
//   }

// } 


// ReactDOM.render(<Click />, document.getElementById('root'));

// reportWebVitals();


import reportWebVitals from './reportWebVitals';
import App from './App.js';
import ReactDOM from 'react-dom';

ReactDOM.render(<App/>, document.getElementById('root'));

reportWebVitals();
