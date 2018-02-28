sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"app/redux/store",
	"app/redux/action",
	"app/model/formatter"
], function (Controller, oStore, action, formatter) {
	"use strict";

	return Controller.extend("app.controller.TodoPage", {

		formatter: formatter,

		onInit: function () {
		},
		handleClearComletedTodo: function (oEvent) {
			// oStore.dispatch({
			// 	type: 'CLEAR_COMPLETED_TODO',
			// 	meta: {},
			// 	payload: undefined
			// });
			oStore.dispatch(action.ClearComletedTodos());
		},
		handleDelete: function (oEvent) {
			let context = oEvent.getSource().getBindingContext();
			const id = context.oModel.getProperty(context.sPath).id;
			// oStore.dispatch({
			// 	type: 'DELETE_TODO',
			// 	meta: {},
			// 	payload: id
			// });
			oStore.dispatch(action.DeleteTodo(id));
		},
		handleToggle: function (oEvent) {
			let context = oEvent.getSource().getBindingContext();
			const todo = context.oModel.getProperty(context.sPath);
			oStore.dispatch(action.ToggleTodo(todo));
			// oStore.dispatch({
			// 	type: 'TOGGLE_TODO',
			// 	meta: {},
			// 	payload: context.oModel.getProperty(context.sPath)
			// });
		},
		handlePost: (oEvent) => {
			var sValue = oEvent.getParameter("value");
			// oStore.dispatch({
			// 	type: 'ADD_TODO',
			// 	meta: {},
			// 	payload: {
			// 		id: faker.random.uuid(),
			// 		text: sValue,
			// 		isComplete: false,
			// 		isDelete: false
			// 	}
			// });
			oStore.dispatch(action.AddTodo(sValue));
		},
		handleReload: (oEvent) => {
			// $.ajax({ url: "/resources/todos.json" })
			// 	.done(function (r) {
			// 		// first load
			// 		oStore.dispatch({
			// 			type: 'LOAD_TODO',
			// 			meta: {},
			// 			payload: r
			// 		});
			// 	});
			oStore.dispatch(action.LoadTodos());
		}
	});
});