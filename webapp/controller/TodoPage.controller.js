sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"app/model/todos"
], function (Controller, todos) {
	"use strict";

	return Controller.extend("app.controller.TodoPage", {
		onInit: function () {
			this.getView().setModel(todos, "todos")
		},
		handleDelete: (oEvent) => {
			console.log('delete');

			var oList = oEvent.getSource(),
				oItem = oEvent.getParameter("listItem"),
				sPath = oItem.getBindingContextPath(),
				index = parseInt(sPath.substring(1)),
				items = todos.getProperty("/");
			items.splice(index, 1);
			todos.setData(items);
		},
		handlePost: (oEvent) => {
			var sValue = oEvent.getParameter("value"),
				items = todos.getProperty("/");
			items.unshift({
				isComplete: false,
				content: sValue,
				isDelete: false
			});
			todos.setData(items);
		}
	});
});