import {createStore, combineReducers} from 'redux'
import MinRateReducer from './Reducers/minRateReducer';
import SearchReducer from'./Reducers/searchReducer'
import MinRateTab1Reducer from './Reducers/minRateTab1Reducer';
import MinRateTab2Reducer from './Reducers/minRateTab2Reducer';
import NumberReducer from './Reducers/numberReducer';
import AddReducer from './Reducers/addReducer';
import InputRateReducer from './Reducers/inputRateReducer';
import InputNameReducer from './Reducers/inputNameReducer';
import InputImageReducer from './Reducers/inputImageReducer';
import addMovieCardReducer from './Reducers/addMovieCardReducer';
import InputYearReducer from './Reducers/inputYearReducer';
import InputDescriptionReducer from './Reducers/inputDescriptionReducer';

const store=createStore(combineReducers({
    minratetab:MinRateReducer,
    name:SearchReducer,
    minratetab1:MinRateTab1Reducer,
    minratetab2:MinRateTab2Reducer,
    number:NumberReducer,
    b:AddReducer,
    inputname:InputNameReducer,
    inputrate:InputRateReducer,
    inputimage:InputImageReducer,
    inputyear:InputYearReducer,
    inputdescription:InputDescriptionReducer,
    card:addMovieCardReducer

}))

export default store;
