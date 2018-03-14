import { combineReducers } from 'redux';
import SectionReducer from './section-reducer';



const rootReducer = combineReducers ({
  info : SectionReducer,
  
  
});

export default rootReducer;