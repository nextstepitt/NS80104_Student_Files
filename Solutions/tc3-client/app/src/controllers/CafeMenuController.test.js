// CafeMenuController.test.js
// Copyright © NextStep IT Training. All rights reserved.
//

import $ from 'jquery'

import CafeMenuController from './CafeMenuController'
import Beverage from '../models/Beverage'
import Pastry from '../models/Pastry'

import WebServiceConnector from '../services/WebServiceConnector'
jest.mock('../services/WebServiceConnector')

import BeveragesView from '../views/BeveragesView'
jest.mock('../views/BeveragesView')

import PastriesView from '../views/PastriesView'
jest.mock('../views/PastriesView')

describe("CafeMenuController Tests", () => {

    beforeEach(() => {

        BeveragesView.mockClear()
        PastriesView.mockClear()
    })
    
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

        expect(webServiceConnector.getBeverages).toHaveBeenCalledTimes(1)
        expect(beveragesView.render).toHaveBeenCalledWith($('#content'), beverages)
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

        expect(webServiceConnector.getPastries).toHaveBeenCalledTimes(1)
        expect(pastriesView.render).toHaveBeenCalledWith($('#content'), pastries)
    })
})