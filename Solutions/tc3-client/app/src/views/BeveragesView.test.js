// BeveragesView.test.js
// Copyright © NextStep IT Training. All rights reserved.
//

import $ from 'jquery'

import Beverage from '../models/Beverage'
import BeveragesView from './BeveragesView'

describe("BeveragesView Tests", () => {

    test("appends HTML title and beverages list to the element", () => {

        const beveragesView = new BeveragesView()
        const beverages = [ new Beverage({ id: 1, name: 'beverage1', price: 1.0 }),
                            new Beverage({id: 2, name: 'beverage2', price: 2.0 })]

        $(document.body).empty().append($('<div>').attr('id', 'content'))
        beveragesView.render($('#content'), beverages)

        expect($('h2').text()).toEqual('Beverages')
        expect($('div:contains(beverage2)').length).toEqual(1)
    })
})