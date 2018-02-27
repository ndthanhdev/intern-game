sap.ui.define([], function () {
    return {
        getTodo: async function () {
            return await $.ajax({ url: "/rest/todo" });
        },
        postTodo: async function (text) {
            return await $.ajax({
                url: "/rest/todo",
                method: "POST",
                data: {
                    text: text
                }
            });
        },
        putTodo: async function (id, todo) {
            return await $.ajax({
                url: `/rest/todo/${id}`,
                method: "PUT",
                data: todo
            });
        },
        deleteTodo: async function (id) {
            return await $.ajax({
                url: `/rest/todo/${id}`,
                method: "DELETE"
            });
        },
    };
});