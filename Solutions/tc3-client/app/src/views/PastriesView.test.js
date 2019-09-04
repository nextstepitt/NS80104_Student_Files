// PastriesView.test.js
// Copyright © NextStep IT Training. All rights reserved.
//

import $ from 'jquery'
import domSerialize from 'dom-serialize'

import Pastry from '../models/Pastry'
import PastriesView from './PastriesView'

describe("PastriesView Tests", () => {

    test("appends HTML title and pastries list to the element", () => {

        const pastriesView = new PastriesView()
        const pastries = [  new Pastry({ id: 1, name: 'pastry1', price: 1.0 }),
                            new Pastry({id: 2, name: 'pastry2', price: 2.0 }),
                            new Pastry({id: 2, name: 'pastry3', price: 2.0 })]

        $(document.body).empty().append($('<div>').attr('id', 'content'))
        pastriesView.render($('#content'), pastries)
        
        const dom = domSerialize(document.body)
        const title = /Pastries/
        const pastry = /pastry3/

        expect((dom.match(title) || []).length).toBe(1)
        expect((dom.match(pastry) || []).length).toBe(1)
    })
})