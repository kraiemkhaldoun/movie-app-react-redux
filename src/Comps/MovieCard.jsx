import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(props) {
    console.log(this.props.card)
    return (this.props.card.filter(el => el.name.toLowerCase().includes(this.props.name.toLowerCase().trim()) && el.rate >= this.props.number + 1).map(el => <div className="movie-card">
      <img src={el.image} alt="" className="movie-image" />
      <h1>{el.name}</h1>
      <h3>{el.year}</h3>
      <div className="stars-rate">
        {el.tab.map(el => <i className={el.class} key={Math.random()} />)}
      </div>
      <button className="description-btn"><Link to={'/MovieDescription/' + el.key}className="link">Movie Description</Link></button>

      <div className="buttons">
        <button className="edit-btn" onClick={() => this.props.edit(el.key)}>Edit</button>
        <button className="remove-btn" onClick={() => this.props.remove(el.key)}>Remove</button>
      </div>
    </div>));
  }
}
const mapDispatchToProps = dispatch => {
  return {
    edit: (key) => dispatch({ type: 'EDIT', payload: key }),
    remove: (key) => dispatch({ type: 'REMOVE', payload: key })
  }
}
const mapStateToProps = (state) => {
  return {
    card: state.card,
    rate: state.rate,
    name: state.name,
    number: state.number
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);