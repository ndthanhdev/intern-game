sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"app/redux/store",
	"libs/faker/index"
], function (Controller, oStore) {
	"use strict";

	return Controller.extend("app.controller.TodoPage", {
		onInit: function () {
		},
		handleClearDeletedTodo: function (oEvent) {
			oStore.dispatch({
				type: 'CLEAR_COMPLETED_TODO',
				meta: {},
				payload: undefined
			});
		},
		handleDelete: function (oEvent) {
			let context = oEvent.getParameter('listItem').getBindingContext();

			oStore.dispatch({
				type: 'DELETE_TODO',
				meta: {},
				payload: context.oModel.getProperty(context.sPath).id
			});
		},
		handleToggle: function (oEvent) {
			let context = oEvent.getSource().getBindingContext();

			oStore.dispatch({
				type: 'TOGGLE_TODO',
				meta: {},
				payload: context.oModel.getProperty(context.sPath).id
			});
		},
		handlePost: (oEvent) => {
			var sValue = oEvent.getParameter("value");
			oStore.dispatch({
				type: 'ADD_TODO',
				meta: {},
				payload: {
					id: faker.random.uuid(),
					text: sValue,
					isComplete: false,
					isDelete: false
				}
			});
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