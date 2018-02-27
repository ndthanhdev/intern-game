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
                type: actionType.ADD_TODO,
                payload: text
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

    // delete todo
    const DeleteTodo = (id) => async (dispatch, getState) => {
        try {
            await dispatch({
                type: actionType.DELETE_TODO,
                payload: id
            });
            const deletedId = await api.deleteTodo(id);
            const action = DeleteTodoSuccess(deletedId);
            await dispatch(action);
        } catch (error) {
            await dispatch(AddTodoFail(error));
        }
    };

    const DeleteTodoSuccess = (id) => {
        return {
            type: actionType.DELETE_TODO_SUCCESS,
            payload: id
        };
    };

    const DeleteTodoFail = (error) => async (dispatch, getState) => {
        await dispatch({
            type: actionType.DELETE_TODO_FAIL,
            payload: error
        });
    };

    // toggle todo
    const ToggleTodo = (todo) => async (dispatch, getState) => {
        try {
            await dispatch({
                type: actionType.TOGGLE_TODO,
                payload: todo
            });
            const preparedTodo = { ...todo, isCompleted: !todo.isCompleted };
            const newTodo = await api.putTodo(preparedTodo.id, preparedTodo);
            const action = ToggleTodoSuccess(newTodo);
            await dispatch(action);
        } catch (error) {
            await dispatch(ToggleTodoFail(error));
        }
    };

    const ToggleTodoSuccess = (todo) => {
        return {
            type: actionType.TOGGLE_TODO_SUCCESS,
            payload: todo
        };
    };

    const ToggleTodoFail = (error) => async (dispatch, getState) => {
        await dispatch({
            type: actionType.TOGGLE_TODO_FAIL,
            payload: error
        });
    };

    return {
        LoadTodos,
        LoadTodosSuccess,
        LoadTodosFail,

        AddTodo,
        AddTodoSuccess,
        AddTodoFail,

        DeleteTodo,
        DeleteTodoSuccess,
        DeleteTodoFail,

        ToggleTodo,
        ToggleTodoSuccess,
        ToggleTodoFail
    };
});