sap.ui.define([], function () {
    return {
        fetchTodos: async function () {
            return await $.ajax({ url: "/resources/todos.json" });
        }
    };
});