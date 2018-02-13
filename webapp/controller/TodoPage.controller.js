sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"app/model/todos",
	"app/redux/store"
], function (Controller, todos, oStore) {
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
				text: sValue,
				isDelete: false
			});
			todos.setData(items);
		},
		handleReload: (oEvent) => {
			oStore.dispatch({
				type: 'LOAD_TODO',
				meta: {},
				payload: {}
			});
		}
	});
});