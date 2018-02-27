let sagaMiddleware;

sap.ui.define(['libs/redux-saga/index', 'app/api/index'],
    function (reduxSagaJs, api) {
        sagaMiddleware = sagaMiddleware || ReduxSaga.default();

        function* effects() {
            yield ReduxSaga.effects.takeEvery('START_LOAD_TODO', loadTodoAsync)
        }

        function* loadTodoAsync(action) {
            try {
                let r = yield api.fetchTodos();
                yield ReduxSaga.effects.put({
                    type: 'LOAD_TODO',
                    meta: {},
                    payload: r
                });
            } catch (error) {
                yield ReduxSaga.effects.put({
                    type: 'LOAD_TODO',
                    meta: {},
                    payload: []
                });
            }

        }

        return {
            middleware: sagaMiddleware,
            run: function () {
                sagaMiddleware.run(effects);
            }
        };
    }
);