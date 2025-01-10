/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","./OverflowToolbar","./OverflowToolbarRenderer","sap/ui/Device","sap/ui/core/Element"],function(t,e,n,o,r){"use strict";var i=e.extend("sap.m.AssociativeOverflowToolbar",{metadata:{associations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"}}},renderer:n});i.prototype.getContent=function(){var t=this.getAssociation("content")||[];var e=[];t.forEach(function(t){var n=r.getElementById(t);if(n){e.push(n)}});return e};i.prototype.insertContent=function(e,n){var o=e.getId(),r=this.getAssociation("content").filter(function(t){return t!==o});var i;if(n<0){i=0}else if(n>r.length){i=r.length}else{i=n}if(i!==n){t.warning("AssociativeOverflowToolbar.insertContent: index '"+n+"' out of range [0,"+r.length+"], forced to "+i)}r.splice(i,0,o);this.removeAllAssociation("content");r.forEach(function(t){this.addAssociation("content",t)},this);return this};i.prototype.exit=function(){e.prototype.exit.apply(this,arguments);this._callToolbarMethod("destroyContent",[true])};i.prototype.indexOfContent=function(t){var e=this.getAssociation("content")||[];return e.indexOf(t.getId())};i.prototype._handleResize=function(){if(o.system.phone){this._resetAndInvalidateToolbar()}else{this._bControlsInfoCached=false;e.prototype._handleResize.apply(this,arguments)}};i.prototype._callToolbarMethod=function(t,n){switch(t){case"addContent":return this.addAssociation("content",n[0]);case"getContent":return this.getContent();case"insertContent":return this.insertContent(n[0],n[1]);case"removeContent":return r.getElementById(this.removeAssociation("content",n[0],n[1],n[2]))||null;case"destroyContent":this.removeAllAssociation("content",n[0]);return this;case"removeAllContent":return this.removeAllAssociation("content",n[0]).map(function(t){return r.getElementById(t)});default:return e.prototype._callToolbarMethod.call(this,t,n)}};return i});
//# sourceMappingURL=AssociativeOverflowToolbar.js.map