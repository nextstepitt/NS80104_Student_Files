// CafeMenuController.test.js
// Copyright © NextStep IT Training. All rights reserved.
//

import $ from 'jquery'
import domSerialize from 'dom-serialize'

import CafeMenuController from '../../src/controllers/CafeMenuController'
import Beverage from '../../src/models/Beverage'
import Pastry from '../../src/models/Pastry'
import BeveragesView from '../../src/views/BeveragesView'
import PastriesView from '../../src/views/PastriesView'

import WebServiceConnector from '../../src/services/WebServiceConnector'
jest.mock('../../src/services/WebServiceConnector')

describe("MenuController Tests", () => {
    
    test("displays beverage view with beverage data", async () => {

        const webServiceConnector = new WebServiceConnector()
        const beveragesView = new BeveragesView()
        const pastriesView = new PastriesView()
        const cafeMenuController = new CafeMenuController(webServiceConnector, beveragesView, pastriesView)
        const beverages = [ new Beverage({ id: 1, name: 'beverage1', price: 1.0 }),
                            new Beverage({id: 2, name: 'beverage2', price: 2.0 })]
   
        $(document.body).empty().append($('<div>').attr('id', 'content'))
        webServiceConnector.getBeverages.mockReturnValue(new Promise((resolve, reject) => resolve(beverages)))

        await cafeMenuController.displayBeverages()

        expect($('h2').text()).toEqual('Beverages')
        expect($('div:contains(beverage2)').length).toEqual(1)
    })

    test("displays pastry view with pastry data", async () => {

        const webServiceConnector = new WebServiceConnector()
        const beveragesView = new BeveragesView()
        const pastriesView = new PastriesView()
        const cafeMenuController = new CafeMenuController(webServiceConnector, beveragesView, pastriesView)
        const pastries = [  new Pastry({ id: 1, name: 'pastry1', price: 1.0 }),
                            new Pastry({id: 2, name: 'pastry2', price: 2.0 }),
                            new Pastry({id: 2, name: 'pastry3', price: 2.0 })]
   
        $(document.body).empty().append($('<div>').attr('id', 'content'))
        webServiceConnector.getPastries.mockReturnValue(new Promise((resolve, reject) => resolve(pastries)))

        await cafeMenuController.displayPastries()
        
        const dom = domSerialize(document.body)
        const title = /Pastries/
        const pastry = /pastry3/

        expect((dom.match(title) || []).length).toBe(1)
        expect((dom.match(pastry) || []).length).toBe(1)
    })
})