let oStore;
sap.ui.define([
    'app/redux/reducer',
    'app/redux/effect',
    'libs/redux-thunk/index',
    'libs/redux/index',
    'libs/redux-logger/index'
], function (fnReducers, effect, reduxThunkJs) {
    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    oStore = oStore || Redux.createStore(
        fnReducers,
        {
            isBusy: false,
            todos: []
        },
        Redux.compose(
            Redux.applyMiddleware(window.ReduxThunk.default),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
    return oStore;
});