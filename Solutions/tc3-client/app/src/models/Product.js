// Product.js
// Copyright © 2019 NextStep IT Training. All rights reserved.
//

class Product {

    constructor(src) {

        if (src) {
                
            this.id = src.id ? src.id : null;
            this.name = src.name ? src.name : null;
            this.price = src.price ? src.price : 0;
        }
    }

    get id() {

        return this._id;
    }

    set id(value) {

        this._id = value;
    }

    get name() {

        return this._name;
    }

    set name(value) {

        this._name = value;
    }

    get price() {

        return this._price;
    }

    set price(value) {

        this._price = value;
    }
}

export default Product;
