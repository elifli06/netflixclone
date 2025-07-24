import { combineReducers, createStore, applyMiddleware } from 'redux';
import movieReducer from './reducers/movieReducer';
import genreReducer from './reducers/genreReducer';
import { thunk } from 'redux-thunk'; // ✅ Doğru import bu

const rootReducer = combineReducers({
  movie: movieReducer,
  genre: genreReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
