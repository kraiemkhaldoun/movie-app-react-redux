import React from 'react';
import { connect } from 'react-redux';


const Form = (props) => {
    return (<div>


        <div className="add">
            <button className="addbutton" onClick={() => props.add()}>+</button>
        </div>

        <div className='inputs'style={{ display: !props.b ? "none" : "flex" }}>
            <input className="input"type="text" placeholder="Movie Name" onChange={(e) => props.inputName(e.target.value)}></input>
            <input className="input"type="text" placeholder="Movie Year" onChange={(e) => props.inputYear(e.target.value)}></input>
            <input className="input"type="text" placeholder="Rating" onChange={(e) => props.inputRate(e.target.value)}></input>
            <input className="input"type="text" placeholder="Image Link" onChange={(e) => props.inputImage(e.target.value)}></input>
            <input className="input"type='text' placeholder="Movie Description" onChange={(e) => props.inputDescription(e.target.value)}></input>
            <button onClick={() => props.addMovieCard({ tab1: props.minratetab1, tab2: props.minratetab2, rate: props.inputrate, name: props.inputname, image: props.inputimage, year: props.inputyear, description:props.inputdescription }) && props.add()} className="addbutton2">ADD</button>
        </div>
    </div>

    )



}


const mapDispatchToProps = dispatch => {
    return {

        add: () => dispatch({ type: 'ADD' }),
        inputName: (inputname) => dispatch({ type: 'INPUT_NAME', payload: inputname }),
        inputYear: (inputyear) => dispatch({ type: "INPUT_YEAR", payload: inputyear }),
        inputRate: (inputrate) => dispatch({ type: 'INPUT_RATE', payload: inputrate }),
        inputImage: (inputimage) => dispatch({ type: "INPUT_IMAGE", payload: inputimage }),
        inputDescription: (inputdescription) => dispatch({ type: "INPUT_DESCRIPTION", payload: inputdescription }),
        addMovieCard: (moviecard) => dispatch({ type: 'ADD_MOVIE_CARD', payload: moviecard }),



    }
}
const mapStateToProps = (state) => {
    return {
        minratetab: state.minratetab,
        minratetab1: state.minratetab1,
        minratetab2: state.minratetab2,
        b: state.b,
        inputrate: state.inputrate,
        inputname: state.inputname,
        inputyear: state.inputyear,
        inputimage: state.inputimage,
        inputdescription: state.inputdescription,
        card: state.card,
        number: state.number,
        name: state.name
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);