sap.ui.define(["../localService/mockServer"], (mockServer) => {
    "use strict";
    mockServer.init();

    // initialize the embedded component on the HTML page
    sap.ui.require(["sap/ui/core/ComponentSupport"]);
});