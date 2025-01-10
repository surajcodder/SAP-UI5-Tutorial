// sap.ui.define(["sap/m/Text"],(Text)=>{
//     "use strict";
//     alert("UI5 is ready");

//     new Text({
//         text:"Hello World"
//     }).placeAt("content");
// })


sap.ui.define([
    "sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
	"use strict";

	// XMLView.create({
	// 	viewName: "ui5.walkthrough.view.App"
	// }).then((oView) => oView.placeAt("content"));
    
    new ComponentContainer({
        name : "ui5.walkthrough",
        settings : {
            id : "walkthrough"
        },
        async : true
    }).placeAt("content");

});
