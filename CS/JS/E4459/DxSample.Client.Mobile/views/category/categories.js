
DxSample_Client.Categories = function(params) {
    return {
        dataSource: {
            store: DxSample_Client.db.Categories,
            map: function(item) {
                return new DxSample_Client.CategoryViewModel(item);
            },
            select: [ 'CategoryID', 'CategoryName', 'Description' ]
        }
    };   
};
