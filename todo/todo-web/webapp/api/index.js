sap.ui.define([], function () {
    return {
        getTodo: async function () {
            return await $.ajax({
                url: "/rest/todo",
                contentType: "application/json",
                dataType: "json",
            });
        },
        postTodo: async function (text) {
            return await $.ajax({
                url: "/rest/todo",
                method: "POST",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({ text })
            });
        },
        putTodo: async function (id, todo) {
            return await $.ajax({
                url: `/rest/todo/${id}`,
                method: "PUT",
                contentType: "application/json",
                data: JSON.stringify(todo)
            });
        },
        deleteTodo: async function (id) {
            return await $.ajax({
                url: `/rest/todo/${id}`,
                dataType: "json",
                method: "DELETE"
            });
        },
        clearComletedTodos: async function (id, todo) {
            return await $.ajax({
                url: `/rest/todo/clear-completed-todos`,
                method: "PUT",
                contentType: "application/json",
                dataType: "json"
            });
        },
    };
});