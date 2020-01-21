const MinRateReducer=(state=[{class:"far fa-star",i:0},{class:"far fa-star",i:1},{class:"far fa-star",i:2},{class:"far fa-star",i:3},{class:"far fa-star",i:4}],action)=> {
    if(action.type==='MIN_RATE') {
        return state=action.payload.tab2.slice(0,action.payload.min+1).concat(action.payload.tab1.slice(action.payload.min+1))

    }else return state
}

export default MinRateReducer