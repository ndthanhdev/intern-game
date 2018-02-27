
sap.ui.define([
  'app/redux/actionType'
], (actionType) => {
  return (state, action) => {
    let todos;
    switch (action.type) {
      case actionType.LOAD_TODOS_SUCCESS:
        return { ...state, todos: action.payload || initState.todos };
      case 'ADD_TODO':
        return { ...state, todos: [action.payload, ...state.todos] };
      case 'DELETE_TODO':
        todos = [...state.todos];
        todos = todos.filter(todo => todo.id !== action.payload);
        return { ...state, todos: todos };
      case 'TOGGLE_TODO':
        todos = [...state.todos];
        todos = todos.map(todo => todo.id !== action.payload ? todo : { ...todo, isComplete: !todo.isComplete });
        return { ...state, todos: todos };
      case 'CLEAR_COMPLETED_TODO':
        todos = [...state.todos];
        todos = todos.filter(todo => !todo.isComplete);
        return { ...state, todos: todos };
      default:
        return state
    }
  };
});

var initState = {
  isBusy: false,
  todos: [{
    "id": "2fa1c0c9-b4be-446b-8693-6dfeec14874f",
    "text": "nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum",
    "isComplete": true,
    "isDeleted": false
  }, {
    "id": "273ec60c-ec13-455f-a3c8-23139ddcd595",
    "text": "velit donec diam neque vestibulum eget vulputate ut ultrices vel augue",
    "isComplete": false,
    "isDeleted": false
  }, {
    "id": "20fe805c-ef98-46d7-808c-0a9ddaae6a23",
    "text": "curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac",
    "isComplete": false,
    "isDeleted": false
  }, {
    "id": "289ac280-890c-4f16-86b1-d36cb44d0f77",
    "text": "curae nulla dapibus dolor vel est donec odio justo sollicitudin",
    "isComplete": true,
    "isDeleted": true
  }, {
    "id": "0146a637-fb32-4d65-a469-69bddf1e23da",
    "text": "ut tellus nulla ut erat id mauris vulputate elementum nullam varius",
    "isComplete": false,
    "isDeleted": false
  }]
};