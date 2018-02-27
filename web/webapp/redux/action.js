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
            const todos = await api.getTodo();
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

    // add todo
    const AddTodo = (text) => async (dispatch, getState) => {
        try {
            await dispatch({
                type: actionType.ADD_TODO
            });
            const todo = await api.postTodo(text);
            const action = AddTodoSuccess(todo);
            await dispatch(action);
        } catch (error) {
            await dispatch(AddTodoFail(error));
        }
    };

    const AddTodoSuccess = (todos) => {
        return {
            type: actionType.ADD_TODO_SUCCESS,
            payload: todos
        };
    };

    const AddTodoFail = (error) => async (dispatch, getState) => {
        await dispatch({
            type: actionType.ADD_TODO_FAIL,
            payload: error
        });
    };

    return {
        LoadTodos,
        LoadTodosSuccess,
        LoadTodosFail,

        AddTodo,
        AddTodoSuccess,
        AddTodoFail
    };
});