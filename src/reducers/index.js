import { combineReducers } from 'redux';
import PostReduce from './reducer_fetchPost';
import { reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  posts:PostReduce,
  form:formReducer
});

export default rootReducer;
