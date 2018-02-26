sap.ui.define([], function () {
    return {
        fetchTodos: async function () {
            try {
                return await $.ajax({ url: "/resources/todos.json" });
            } catch (error) {
                return await Promise.resolve([]);
            }
        }
    };
});