import React, { Component }  from 'react';
import { connect } from 'react-redux';

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        return ( <div>
            {this.props.card.filter(el=>el.key===Number(this.props.match.params.id)).map(el=><p key={Math.random()}>{el.description}</p>)}
            </div>
         );
    }
}
const mapStateToProps = (state) => {
    return {
     card:state.card
    }
  }
 
export default connect(mapStateToProps)(Description);
