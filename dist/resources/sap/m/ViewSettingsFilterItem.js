/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ViewSettingsItem","./library"],function(e,t){"use strict";var r=e.extend("sap.m.ViewSettingsFilterItem",{metadata:{library:"sap.m",properties:{multiSelect:{type:"boolean",group:"Behavior",defaultValue:true}},aggregations:{items:{type:"sap.m.ViewSettingsItem",multiple:true,singularName:"item",bindable:"bindable"}},events:{filterDetailItemsAggregationChange:{}}}});r.prototype._handleNewAggregationEvents=function(e){e.attachEvent("itemPropertyChanged",function(e){this.fireItemPropertyChanged({changedItem:e.getParameter("changedItem"),propertyKey:e.getParameter("propertyKey"),propertyValue:e.getParameter("propertyValue")})}.bind(this));this.fireFilterDetailItemsAggregationChange({item:e})};r.prototype.addAggregation=function(t,r,i){e.prototype.addAggregation.apply(this,arguments);this._handleNewAggregationEvents(r);return this};r.prototype.insertAggregation=function(t,r,i,g){e.prototype.insertAggregation.apply(this,arguments);this._handleNewAggregationEvents(r);return this};r.prototype.removeAggregation=function(t,r,i){e.prototype.removeAggregation.apply(this,arguments);this.fireFilterDetailItemsAggregationChange();return this};r.prototype.removeAllAggregation=function(t,r){e.prototype.removeAllAggregation.apply(this,arguments);this.fireFilterDetailItemsAggregationChange();return this};r.prototype.destroyAggregation=function(t,r){e.prototype.destroyAggregation.apply(this,arguments);this.fireFilterDetailItemsAggregationChange();return this};return r});
//# sourceMappingURL=ViewSettingsFilterItem.js.map