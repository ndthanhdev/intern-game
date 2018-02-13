sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"app/model/models",
	"libs/openui5-redux-model/ReduxModel",
	"app/redux/store"
], function (UIComponent, Device, models, ReduxModel, oStore) {
	"use strict";

	return UIComponent.extend("app.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// set redux model
			const model = new ReduxModel(oStore);
			this.setModel(model);

			// first load
			oStore.dispatch({
				type: 'LOAD_TODO',
				meta: {},
				payload: {}
			});
		}
	});
});