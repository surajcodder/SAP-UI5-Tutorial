// sap.ui.define(["sap/m/Text"],(Text)=>{
//     "use strict";
//     alert("UI5 is ready");

//     new Text({
//         text:"Hello World"
//     }).placeAt("content");
// })


sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], (XMLView) => {
	"use strict";

	XMLView.create({
		viewName: "ui5.walkthrough.view.App"
	}).then((oView) => oView.placeAt("content"));
});
