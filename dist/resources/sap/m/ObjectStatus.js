/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control","sap/ui/core/Lib","sap/ui/core/ValueStateSupport","sap/ui/core/IndicationColorSupport","sap/ui/core/library","sap/ui/core/_IconRegistry","sap/ui/base/DataType","./ObjectStatusRenderer","sap/m/ImageHelper","sap/ui/core/LabelEnablement","sap/ui/events/KeyCodes"],function(t,e,i,r,o,n,s,a,p,u,l,c){"use strict";var g=n.TextDirection;var h=n.ValueState;var d=t.EmptyIndicatorMode;var f=e.extend("sap.m.ObjectStatus",{metadata:{interfaces:["sap.ui.core.IFormContent","sap.ui.core.ISemanticFormContent"],library:"sap.m",designtime:"sap/m/designtime/ObjectStatus.designtime",properties:{title:{type:"string",group:"Data",defaultValue:null},text:{type:"string",group:"Data",defaultValue:null},active:{type:"boolean",group:"Misc",defaultValue:false},state:{type:"string",group:"Misc",defaultValue:h.None},inverted:{type:"boolean",group:"Misc",defaultValue:false},icon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},iconDensityAware:{type:"boolean",group:"Appearance",defaultValue:true},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:g.Inherit},emptyIndicatorMode:{type:"sap.m.EmptyIndicatorMode",group:"Appearance",defaultValue:d.Off},stateAnnouncementText:{type:"string",group:"Misc"}},associations:{ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{press:{}},dnd:{draggable:true,droppable:false}},renderer:p});f.prototype._getStateText=function(t){if(t!==h.None&&this.isPropertyInitial("stateAnnouncementText")){return r.getAdditionalText(t)?r.getAdditionalText(t):o.getAdditionalText(t)}return!this.isPropertyInitial("stateAnnouncementText")?this.getStateAnnouncementText():""};f.prototype.exit=function(){if(this._oImageControl){this._oImageControl.destroy();this._oImageControl=null}};f.prototype._getImageControl=function(){var t=this.getId()+"-icon",e=!this.getText()&&!this.getTitle(),i={src:this.getIcon(),densityAware:this.getIconDensityAware(),useIconTooltip:e,decorative:!this.getActive()};this._oImageControl=u.getImageControl(t,this._oImageControl,this,i);return this._oImageControl};f.prototype._getAriaIconTitle=function(){var t;if(this._oImageControl.isA("sap.ui.core.Icon")){t=s.getIconInfo(this._oImageControl.getSrc(),undefined,"mixed")}return t?t.text:i.getResourceBundleFor("sap.m").getText("OBJECT_STATUS_ICON")};f.prototype.setState=function(t){if(t==null){t=h.None}else if(!a.getType("sap.ui.core.ValueState").isValid(t)&&!a.getType("sap.ui.core.IndicationColor").isValid(t)){throw new Error('"'+t+'" is not a value of the enums sap.ui.core.ValueState or sap.ui.core.IndicationColor for property "state" of '+this)}return this.setProperty("state",t)};f.prototype.ontap=function(t){if(this._isClickable(t)){this.firePress()}};f.prototype.onsapenter=function(t){if(this._isActive()){this.firePress();t.setMarked()}};f.prototype.onkeyup=function(t){if(t.which===c.SPACE){if(!this._bPressedEscapeOrShift){this.firePress();t.setMarked()}else{this._bPressedEscapeOrShift=false}this._bPressedSpace=false}};f.prototype.onkeydown=function(t){if(t.which===c.SPACE||t.which===c.SHIFT||t.which===c.ESCAPE){if(t.which===c.SPACE){if(this._isActive()){t.setMarked();t.preventDefault();this._bPressedSpace=true}}if(this._bPressedSpace&&(t.which===c.ESCAPE||t.which===c.SHIFT)){this._bPressedEscapeOrShift=true}}else{if(this._bPressedSpace){t.preventDefault()}}};f.prototype._isActive=function(){return this.getActive()&&(this.getText().trim()||this.getIcon().trim())};f.prototype._isEmpty=function(){return!(this.getText().trim()||this.getIcon().trim()||this.getTitle().trim())};f.prototype._shouldRenderEmptyIndicator=function(){return this.getEmptyIndicatorMode()!==d.Off&&!this.getText()&&!this.getIcon()};f.prototype.ontouchstart=function(t){if(this._isClickable(t)){t.setMarked()}};f.prototype.getAccessibilityInfo=function(){var t=this.isPropertyInitial("stateAnnouncementText")?r.getAdditionalText(this.getState()):this.getStateAnnouncementText(),e=this._shouldRenderEmptyIndicator()?i.getResourceBundleFor("sap.m").getText("EMPTY_INDICATOR_TEXT"):this.getText(),n;if(this.getState()!=h.None){t=t!==null?t:o.getAdditionalText(this.getState())}n=((this.getTitle()||"")+" "+(e||"")+" "+(t!==null?t:"")+" "+(this.getTooltip()||"")).trim();n=this._isActive()?n+(n?" "+i.getResourceBundleFor("sap.m").getText("OBJECT_STATUS_ACTIVE"):""):n;return{description:n}};f.prototype._hasExternalLabelling=function(){return this.getAriaLabelledBy().length>0||l.getReferencingLabels(this).length>0};f.prototype._generateSelfLabellingIds=function(){var t=this.getId(),e="";if(this.getTitle()){e+=t+"-title "}if(this.getText()){e+=t+"-text "}if(this.getIcon()){e+=t+"-statusIcon "}return e.trim()};f.prototype._isClickable=function(t){var e=t.target.id||t.srcControl.getId();return this._isActive()&&(e===this.getId()+"-link"||e===this.getId()+"-text"||e===this.getId()+"-statusIcon"||e===this.getId()+"-icon")};f.prototype.getFormFormattedValue=function(){return this.getText()};f.prototype.getFormValueProperty=function(){return"text"};f.prototype.getFormObservingProperties=function(){return["text","title"]};f.prototype.getFormRenderAsControl=function(){return true};return f});
//# sourceMappingURL=ObjectStatus.js.map