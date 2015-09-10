(function() {
    "use strict";
    var app = angular.module("controllerTest", []);

    app.controller("CartController", function() {

        this.getSubtotal = function() {
            var itemTotal;
            var subtotal = 0;
            for(var i = 0; i <this.items.length; i++) {
                itemTotal = this.items[i].price * this.items[i].quantity;
                subtotal += itemTotal;
            };
            this.subtotal = subtotal
        };

        this.getShipping = function () {
            var numOfItems = 0;
            for(var i = 0; i <this.items.length; i++) {
                numOfItems += this.items[i].quantity;
            };
            this.shipping = numOfItems * 1.25;
        };

        this.getTax = function () {
            this.tax = this.subtotal * .08125;
        };

        this.getTotal = function () {
            this.total = this.subtotal + this.shipping + this.tax;
        };

        this.onChange = function() {
            this.getShipping();
            this.getSubtotal();
            this.getTax();
            this.getTotal();
        };

        this.addNewItem = function() {
            this.items.push(this.newItem);
            this.newItem = {
                quantity: 1,
            };
            this.onChange();
        };

        this.removeItem = function (index) {
            this.items.splice(index, 1);
            this.onChange();
        };

        this.items = [];

        this.newItem = {
            quantity: 1,
        };

        this.subtotal = 0;
        this.tax = 0;
        this.shipping = 0;
        this.total = 0;


        
    });




    
})();