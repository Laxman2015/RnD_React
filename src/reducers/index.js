import {combineReducers} from 'redux';
import BooksReducer from './reducer_book';
import ActiveBook from './reducer_activeBook';
var routReducer = combineReducers({
    books: BooksReducer,
    ActiveBook: ActiveBook
});

export default routReducer;
