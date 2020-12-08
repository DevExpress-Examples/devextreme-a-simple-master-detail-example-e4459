
$(function() {
    
    DxSample_Client.app = new DevExpress.framework.html.HtmlApplication({
        ns: DxSample_Client,
        viewPortNode: document.getElementById("viewPort"),
        defaultLayout: DxSample_Client.config.defaultLayout,
        navigation: DxSample_Client.config.navigation
    });

    DxSample_Client.app.router.register(":view/:id", { view: "Categories", id: undefined });
    DxSample_Client.app.router.register(":view/:CategoryID/:CategoryName", { view: "Products", CategoryID: undefined, CategoryName: undefined });
});
