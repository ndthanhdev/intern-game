sap.ui.define([
    'app/redux/reducer',
    'libs/redux',
    'libs/redux-logger'
], function (fnReducers) {
    var oStore = Redux.createStore(
        fnReducers,
        Redux.applyMiddleware(
            reduxLogger.createLogger()
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return oStore;
});