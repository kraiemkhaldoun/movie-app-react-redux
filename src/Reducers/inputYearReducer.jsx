const InputYearReducer =(state=1990,action)=>
{
    if (action.type==='INPUT_YEAR'){return state=action.payload}
    else return state
}
export default InputYearReducer