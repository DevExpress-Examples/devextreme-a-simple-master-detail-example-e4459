
// NOTE object below must be a valid JSON
window.DxSample_Client = $.extend(true, window.DxSample_Client, {
    "config": {
        "endpoints": {
            "db": {
                "local": "http://localhost:63817/DataService.svc/",
                "production": "http://localhost:63817/DataService.svc/"
            }
        },
        "services": {
            "db": {
                "entities": {
					"Categories": { 
						key: "CategoryID", 
						keyType: "Int32"
					},
					"Products": { 
						key: "ProductID", 
						keyType: "Int32" 
					},
                }
            }
        }
    }
});
