sap.ui.define([

], function () {
    return {
        deletedFilter: function (todos) {
            return todos.filter(todo => !todo.isDeleted);
        }
    }
});