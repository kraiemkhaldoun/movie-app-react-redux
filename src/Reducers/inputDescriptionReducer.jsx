  
const InputDescriptionReducer =(state="",action)=>
{
    if (action.type==='INPUT_DESCRIPTION'){return state=action.payload}
    else return state
}
export default InputDescriptionReducer