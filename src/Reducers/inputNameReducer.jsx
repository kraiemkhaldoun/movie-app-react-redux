const InputNameReducer =(state="",action)=>
{
    if (action.type==='INPUT_NAME'){return state=action.payload}
    else return state
}
export default InputNameReducer