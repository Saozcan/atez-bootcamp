"use strict";
// Icin Bir Class yazacagiz Calssimizida
// tum Urunleri donecek bir fonksiyon.
// tum Telefonlri, tabletleri ve televizyonlari donen bir fonksiyon olacak.
// Text Search yapabilecek bir fonksiyornumuz olacak.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// donecegimiz datalar.
//telefon icin { title, description, price, raiting, color ve thumbnail}
//laptop icin { title, description, price, raiting, screenDimentions , discount persentage, thumbnail}
//televizyon icin { title, description, price, raiting thumbnail smarttv, stock}
//tablet icin { title, description, price, raiting, color, celluar, wifi ve thumbnail}
var data_1 = require("./data");
var ProductFunctions = /** @class */ (function () {
    function ProductFunctions() {
    }
    ProductFunctions.prototype.findSmartPhone = function (item) {
        return {
            title: item.title,
            description: item.description,
            price: item.price,
            rating: item.rating,
            id: item.id,
            thumbnail: item.thumbnail,
            color: item.color
        };
    };
    ProductFunctions.prototype.findLaptop = function (item) {
        return {
            title: item.title,
            description: item.description,
            price: item.price,
            rating: item.rating,
            id: item.id,
            thumbnail: item.thumbnail,
            screenDimentions: item.screenDimentions,
            discountPercentage: item.discountPercentage
        };
    };
    ProductFunctions.prototype.findTablet = function (item) {
        return {
            title: item.title,
            description: item.description,
            price: item.price,
            rating: item.rating,
            id: item.id,
            thumbnail: item.thumbnail,
            color: item.color,
            celluar: item.celluar,
            wifi: item.wifi
        };
    };
    ProductFunctions.prototype.findTelevision = function (item) {
        return {
            title: item.title,
            description: item.description,
            price: item.price,
            rating: item.rating,
            id: item.id,
            thumbnail: item.thumbnail,
            smartTv: item.smartTv,
            stock: item.stock
        };
    };
    ProductFunctions.prototype.findProduct = function (item) {
        return {
            title: item.title,
            description: item.description,
            price: item.price,
            rating: item.rating,
            id: item.id,
            thumbnail: item.thumbnail
        };
    };
    return ProductFunctions;
}());
var ProductApi = /** @class */ (function (_super) {
    __extends(ProductApi, _super);
    function ProductApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductApi.prototype.findAll = function () {
        var _this = this;
        var returnValue = data_1.dummyData.map(function (item) {
            if (item.category === 'smartphones') {
                return _this.findSmartPhone(item);
            }
            else if (item.category === 'laptop') {
                return _this.findLaptop(item);
            }
            else if (item.category === 'tablet') {
                return _this.findTablet(item);
            }
            else if (item.category === 'television') {
                return _this.findTelevision(item);
            }
            else {
                return {};
            }
        });
        return returnValue;
    };
    ProductApi.prototype.findByCategory = function (category) {
        var _this = this;
        var returnData = [];
        data_1.dummyData.filter(function (item) {
            if (item.category === category && "smartphones" === category) {
                returnData.push(_this.findSmartPhone(item));
            }
            else if (item.category === category && "laptop" === category) {
                returnData.push(_this.findLaptop(item));
            }
            else if (item.category === category && "tablet" === category) {
                returnData.push(_this.findTablet(item));
            }
            else if (item.category === category && "television" === category) {
                returnData.push(_this.findTelevision(item));
            }
            else {
            }
        });
        return returnData;
    };
    ProductApi.prototype.findByText = function (input) {
        var allData = this.findAll();
        var returnData = [];
        allData.map(function (item) {
            for (var itemKey in item) {
                if (item[itemKey].toString().toUpperCase().includes(input.toUpperCase())) {
                    returnData.push(item);
                }
            }
        });
        return returnData;
    };
    //Ekstra fonksiyonlar
    ProductApi.prototype.addProduct = function (item) {
        // @ts-ignore
        data_1.dummyData.push(item);
        return item;
    };
    return ProductApi;
}(ProductFunctions));
var test = new ProductApi();
// console.log(test.findAll<IProduct>())
// console.log(test.findByCategory<IProduct>("television"))
// console.log(test.findByText("549"))
console.log(test.addProduct({
    title: "test",
    description: "test",
    price: 100,
    rating: 5,
    thumbnail: "test",
    id: 100
}));
console.log(data_1.dummyData);
// NOTLAR
// Birden fazla dosyada calisabilirsiniz.
// Baska hangi metodlar olabilir? Bir E-Ticaret sistemine yonelik oldugunu goz onunde bulundurarak.
// Calisabilir durumda ve test edilmis olmasi onemli.
// Naminglere dikkat edilmesi gereklidir. Isimlendirme sablonu benzer sekilde olmalidir.
//
