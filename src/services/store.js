import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
// import {}
import reducers from './reducers'

// const enhancer = compose(
//     window.devToolsExtension ? window.devToolsExtension() : f=>f
//     // window.devToolsExtension
// )

const store = createStore(reducers,applyMiddleware(thunk))

export default store;
