odoo.define('pos_skip_receipt_screen', function (require) {
    "use strict";
    var models = require('point_of_sale.models');
    var screens = require('point_of_sale.screens');
    
    models.load_fields('pos.config', ['skip_receipt_screen']);

    screens.PaymentScreenWidget.include({
        finalize_validation: function () {
            this._super();
            if (this.pos.config.skip_receipt_screen)
                this.gui.show_screen('products');
        },
    });
});


