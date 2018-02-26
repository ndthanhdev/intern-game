sap.ui.define([
    'app/redux/reducer',
    'libs/redux/index',
    'libs/redux-logger/index'
], function (fnReducers) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    var oStore = Redux.createStore(
        fnReducers,
        composeEnhancers(Redux.applyMiddleware())
    );

    return oStore;
});