let oStore;
sap.ui.define([
    'app/redux/reducer',
    'libs/redux-thunk/index',
    'libs/redux/index',
    'libs/redux-logger/index'
], function (fnReducers, reduxThunkJs) {
    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    oStore = oStore || Redux.createStore(
        fnReducers,
        Redux.compose(
            Redux.applyMiddleware(window.ReduxThunk.default),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
    return oStore;
});