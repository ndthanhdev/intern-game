
sap.ui.define([
  'app/redux/actionType'
], function (actionType) {
  return (state, action) => {
    var todos;
    switch (action.type) {
      case actionType.LOAD_TODOS:
      case actionType.CLEAR_COMPLETED_TODOS:
        return { ...state, isBusy: true };
      case actionType.LOAD_TODOS_SUCCESS:
      case actionType.CLEAR_COMPLETED_TODOS_SUCCESS:
        return { ...state, todos: action.payload, isBusy: false };
      case actionType.ADD_TODO_SUCCESS:
        return { ...state, todos: [action.payload, ...state.todos] };
      case actionType.DELETE_TODO:
        todos = [...state.todos];
        todos = todos.map(todo => todo.id !== action.payload ? todo : { ...todo, isBusy: true });
        return { ...state, todos: todos };
      case actionType.DELETE_TODO_SUCCESS:
        todos = [...state.todos];
        todos = todos.map(todo => todo.id !== action.payload ? todo : { ...todo, isDeleted: true, isBusy: false });
        return { ...state, todos: todos };
      case actionType.TOGGLE_TODO:
        todos = [...state.todos];
        todos = todos.map(todo => todo.id !== action.payload.id ? todo : { ...todo, isBusy: true });
        return { ...state, todos: todos };
      case actionType.TOGGLE_TODO_SUCCESS:
        todos = [...state.todos];
        todos = todos.map(todo => todo.id !== action.payload.id ? todo : { ...action.payload, isBusy: false });
        return { ...state, todos: todos };
      default:
        return state
    }
  };
});