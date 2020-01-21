const InputImageReducer =(state="",action)=>
{
    if (action.type==='INPUT_IMAGE'){return state=action.payload}
    else return state
}
export default InputImageReducer