const InputRateReducer =(state=3,action)=>
{
    if (action.type==='INPUT_RATE'){return state=action.payload}
    else return state
}
export default InputRateReducer