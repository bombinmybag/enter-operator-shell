/**
 * Created by i.sungurov on 07.10.13.
 */

operatorShell.service('notifier', function () {

    "use strict";

    var
        details = {
            currentMessage: "",
            hide: function () {
                this.currentMessage = "";
            }
        },
        errors = {
            currentMessage: "",
            hide: function () {
                this.currentMessage = "";
            }
        },
        connection = {
            isConnected: false
        };

    return {
        details: details,
        errors: errors,
        connection: connection
    };

});