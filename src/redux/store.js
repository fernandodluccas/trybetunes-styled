import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import themeReducer from './reducers/themeReduces';

const store = createStore(themeReducer, composeWithDevTools());

export default store;
