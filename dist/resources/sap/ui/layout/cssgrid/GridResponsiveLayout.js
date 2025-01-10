/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/layout/cssgrid/GridLayoutBase","sap/ui/Device","sap/ui/layout/cssgrid/GridSettings"],function(t,e,i){"use strict";var s=t.extend("sap.ui.layout.cssgrid.GridResponsiveLayout",{metadata:{library:"sap.ui.layout",properties:{containerQuery:{type:"boolean",group:"Behavior",defaultValue:false}},aggregations:{layout:{type:"sap.ui.layout.cssgrid.GridSettings",defaultClass:i,multiple:false},layoutS:{type:"sap.ui.layout.cssgrid.GridSettings",defaultClass:i,multiple:false},layoutM:{type:"sap.ui.layout.cssgrid.GridSettings",defaultClass:i,multiple:false},layoutL:{type:"sap.ui.layout.cssgrid.GridSettings",defaultClass:i,multiple:false},layoutXL:{type:"sap.ui.layout.cssgrid.GridSettings",defaultClass:i,multiple:false}},events:{layoutChange:{parameters:{layout:{type:"string"}}}}}});s.mSizeClasses={Phone:"sapUiLayoutCSSGridS",Tablet:"sapUiLayoutCSSGridM",Desktop:"sapUiLayoutCSSGridL",LargeDesktop:"sapUiLayoutCSSGridXL"};s.mSizeLayouts={Phone:"layoutS",Tablet:"layoutM",Desktop:"layoutL",LargeDesktop:"layoutXL"};s.prototype.init=function(){this._sActiveLayout="layout"};s.prototype.getActiveGridSettings=function(){return this.getAggregation(this._sActiveLayout)};s.prototype.isResponsive=function(){return true};s.prototype.onGridAfterRendering=function(t){this.setActiveLayout(t,false)};s.prototype.onGridResize=function(t){if(!t||t.size.width===0){return}this.setActiveLayout(t.control,true)};s.prototype.applySizeClass=function(t,e){if(t.hasClass(e)){return}var i=Object.keys(s.mSizeClasses).map(function(t){return s.mSizeClasses[t]});t.removeClass(i.join(" "));t.addClass(e)};s.prototype.setActiveLayout=function(t,i){var a=this.getContainerQuery()?t.$().outerWidth():window.innerWidth;var o=e.media.getCurrentRange("StdExt",a),u=s.mSizeLayouts[o.name],r=this._getLayoutToApply(u);this.applySizeClass(t.$(),s.mSizeClasses[o.name]);if(this._sActiveLayout===r){return}this._sActiveLayout=r;if(i){this.fireLayoutChange({layout:r})}};s.prototype._getLayoutToApply=function(t){if(this.getAggregation(t)){return t}return"layout"};return s});
//# sourceMappingURL=GridResponsiveLayout.js.map