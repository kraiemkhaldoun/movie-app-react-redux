  
const AddReducer =(state=false,action)=>
{
    if (action.type==='ADD'){return !state}
    else return state
}
export default AddReducer