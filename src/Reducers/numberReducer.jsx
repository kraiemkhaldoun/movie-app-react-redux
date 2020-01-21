const NumberReducer =(state=0,action)=>
{ 
    if (action.type==='NUMBER'){return state=action.payload}
    else return state
}
export default NumberReducer