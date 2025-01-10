/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib"],function(e){"use strict";var t={apiVersion:2};var n={MONTH:"month",MONTH_PICKER:"monthPicker",YEAR_PICKER:"yearPicker",YEAR_RANGE_PICKER:"yearRangePicker"};t.render=function(t,r){var a=r.getId(),i=r.getTooltip_AsString(),o=r.getAggregation("month"),s=r.getProperty("_currentPicker"),l=r.getWidth(),c=e.getResourceBundleFor("sap.ui.unified"),d={labelledby:{value:"",append:!r._oSpecialDatesControlOrigin},role:r._oSpecialDatesControlOrigin?"":"group",roledescription:r._oSpecialDatesControlOrigin?"":c.getText("CALENDAR_DIALOG")};t.openStart("div",r);t.class("sapUiCal");if(o.length>1){t.class("sapUiCalMulti")}t.accessibilityState(r,d);if(i){t.attr("title",i)}if(l){t.class("sapUiCalWidth");t.style("width",l)}if(r._getSecondaryCalendarType()){t.class("sapUiCalSecType")}if(this.addAttributes){this.addAttributes(t,r)}t.openEnd();var C=r.getAggregation("header");t.renderControl(C);t.openStart("div",a+"-content");t.class("sapUiCalContent");t.openEnd();if(r.getMonths()>1){switch(s){case n.MONTH_PICKER:case n.YEAR_PICKER:case n.YEAR_RANGE_PICKER:this.renderMonths(t,r,o);this.renderCalContentOverlay(t,r,a);break}}switch(s){case n.MONTH:this.renderMonths(t,r,o);break;case n.MONTH_PICKER:t.renderControl(r._getMonthPicker());break;case n.YEAR_PICKER:t.renderControl(r._getYearPicker());break;case n.YEAR_RANGE_PICKER:t.renderControl(r._getYearRangePicker());break}t.close("div");if(!r._bSkipCancelButtonRendering){t.openStart("button",a+"-cancel");t.class("sapUiCalCancel");t.attr("tabindex","-1");t.openEnd();t.text(c.getText("CALENDAR_CANCEL"));t.close("button")}this.renderCalContentAndArrowsOverlay(t,r,a);t.close("div")};t.renderMonths=function(e,t,n){n.forEach(function(r,a){e.renderControl(r);if(n.length===2&&a===0){e.renderControl(t.getAggregation("secondMonthHeader"))}})};t.renderCalContentOverlay=function(e,t,n){e.openStart("div",n+"-contentOver");e.class("sapUiCalContentOver");e.openEnd();e.close("div")};t.renderCalContentAndArrowsOverlay=function(e,t,n){};return t},true);
//# sourceMappingURL=CalendarRenderer.js.map