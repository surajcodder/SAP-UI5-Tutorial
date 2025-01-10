/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/changeHandler/BaseAddViaDelegate","sap/base/util/ObjectPath"],function(e,n){"use strict";var t="columns";var r="cells";var a="items";function i(e,n,t,r,a,i){var o=i&&i.entityType;if(o){return Promise.resolve().then(t.createControl.bind(t,"sap.m.Text",a,r,e.newFieldSelector.id+"--column",{text:"{/#"+o+"/"+e.bindingPath+"/@sap:label}"}))}return Promise.resolve(n.label)}var o=e.createAddViaDelegateChangeHandler({aggregationName:t,parentAlias:"targetTable",fieldSuffix:"--field",skipCreateLabel:function(e){return!!(e&&e.entityType)},skipCreateLayout:true,addProperty:function(e){var n=e.innerControls;if(n.valueHelp){return Promise.reject(new Error("Adding properties with value helps is not yet supported by addTableColumn change handler"))}var o=e.control;var l=e.modifier;var d=e.view;var u=e.appComponent;var s=e.change;var g=s.getRevertData();var v=s.getContent();var c=s.getSupportInformation().oDataInformation;var p=v.newFieldIndex;var f=v.newFieldSelector;return Promise.resolve().then(l.getBindingTemplate.bind(l,o,a,d)).then(function(e){if(e){var t=n.control;return Promise.resolve().then(l.insertAggregation.bind(l,e,r,t,p,d)).then(l.updateAggregation.bind(l,o,a)).then(function(){g.newCellSelector=l.getSelector(t,u);s.setRevertData(g)})}return undefined}).then(l.createControl.bind(l,"sap.m.Column",u,d,f)).then(function(e){return i(v,n,l,d,u,c).then(function(n){return Promise.resolve().then(l.insertAggregation.bind(l,e,"header",n,0,d)).then(l.insertAggregation.bind(l,o,t,e,p,d))})})},revertAdditionalControls:function(e){var n=e.control;var t=e.change;var i=t.getRevertData();var o=e.modifier;var l=e.appComponent;var d,u;return Promise.resolve().then(o.getBindingTemplate.bind(o,n,a)).then(function(e){d=e;if(d){return Promise.resolve().then(o.bySelector.bind(o,i.newCellSelector,l)).then(function(e){u=e;return o.removeAggregation(d,r,u)}).then(function(){return o.destroy(u)}).then(o.updateAggregation.bind(o,n,a))}return undefined})}});return o},true);
//# sourceMappingURL=AddTableColumn.js.map