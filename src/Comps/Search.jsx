import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link } from "react-router-dom";



class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render(props) {
    
    return (<div className="search">
      <div >
        <input type="text" placeholder="Type movie name to search" onChange={(e) => this.props.search(e.target.value)}></input>
        <button className="button">Search</button>
      </div>
      <div className="rate">
      
        <p>Minimum rating</p>

        <div className="stars">
          {this.props.minratetab.map(el => <i className={el.class} key={Math.random()} onClick={() => this.props.minratestars({ min: el.i, tab1: this.props.minratetab1, tab2: this.props.minratetab2 }) && this.props.minratenumber(el.i)} />)}
        </div>
      </div>



    </div>)
  }
  
}
const mapDispatchToProps = dispatch => {
  return {
    minratestars: (minratestars) => dispatch({ type: 'MIN_RATE', payload: minratestars }),
    minratenumber: (number) => dispatch({ type: 'NUMBER', payload: number }),
    search:(name)=>dispatch({type:'SEARCH',payload:name})
  }
}
const mapStateToProps = (state) => {
  return {
    minratetab: state.minratetab,
    minratetab1: state.minratetab1,
    minratetab2: state.minratetab2,
    number: state.number,
    card:state.card
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);