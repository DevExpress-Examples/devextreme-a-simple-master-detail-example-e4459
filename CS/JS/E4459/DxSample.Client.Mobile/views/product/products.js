DxSample_Client.Products = function(params) {
    return {
        title: params.CategoryName,

        dataSource: {
            store: DxSample_Client.db.Products,
            map: function(item) {
                return new DxSample_Client.ProductViewModel(item);
            },
            filter: ['CategoryID', '=', Number(params.CategoryID)],
            select: ['ProductName', 'UnitPrice']
        }
    };   
};