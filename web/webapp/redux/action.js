sap.ui.define([
    'app/api/index',
    'app/redux/actionType'
], function (api, actionType) {
    // load todos
    const LoadTodos = () => async (dispatch, getState) => {
        try {
            await dispatch({
                type: actionType.LOAD_TODOS
            });
            const todos = await api.fetchTodos();
            const action = LoadTodosSuccess(todos);
            await dispatch(action);
        } catch (error) {
            await dispatch(LoadTodosFail(error));
        }
    };

    const LoadTodosSuccess = (todos) => {
        return {
            type: actionType.LOAD_TODOS_SUCCESS,
            payload: todos
        };
    };

    const LoadTodosFail = (error) => async (dispatch, getState) => {
        await dispatch({
            type: actionType.LOAD_TODOS_FAIL,
            payload: error
        });
    };

    return {
        LoadTodos,
        LoadTodosSuccess
    };
});