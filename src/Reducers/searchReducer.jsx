const SearchReducer=(state="",action)=> {
    if(action.type==='SEARCH') {
        return state=action.payload

    }else return state
}

export default SearchReducer