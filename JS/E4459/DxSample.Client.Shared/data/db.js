
(function () {
    var endpointSelector = new DevExpress.EndpointSelector(DxSample_Client.config.endpoints);

    var serviceConfig = $.extend(true, {}, DxSample_Client.config.services, {
        db: {
            url: endpointSelector.urlFor("db"),
            // To enable JSONP support, uncomment the following line
            //jsonp: !window.WinJS,

            errorHandler: handleServiceError
        }
    });

    function handleServiceError(error) {
        if (window.WinJS) {
            try {
                new Windows.UI.Popups.MessageDialog(error.message).showAsync();
            } catch (e) {
                // Another dialog is shown
            }
        } else {
            alert(error.message);
        }
    }

    // Enable partial CORS support for IE < 10
    $.support.cors = true;

    DxSample_Client.db = new DevExpress.data.ODataContext(serviceConfig.db);

}());
