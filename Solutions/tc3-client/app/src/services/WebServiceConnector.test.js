// WebServiceConnector.test.js
// Coypyright © 2019 NextStep IT Training. All rights reserved.
//

import fetch from 'jest-fetch-mock'
global.fetch = fetch

import config from '../config/config'
import WebServiceConnector from '../services/WebServiceConnector'

describe("The connector fetches data correctly", () => {

    test("Fetches beverages correctly", async () => {

        const beveragesSource = [{ id: 1, name: 'beverage1', price: 1.0 }, { id: 2, name: 'beverage2', price: 2.0 }]
        const mockFetch = fetch.mockResponseOnce(JSON.stringify(beveragesSource))
        const webServiceConnector = new WebServiceConnector(config)
        
        const beverages = await webServiceConnector.getBeverages()

        expect(mockFetch).toHaveBeenCalledWith(config.servicePath + '/data/beverages')
        expect(beverages.length).toEqual(2)
        expect(beverages[0].name).toEqual('beverage1')
    })

    test("Fetches pastries correctly", async () => {

        const pastriesSource = [{ id: 1, name: 'pastry1', price: 1.0 }, { id: 2, name: 'pastry2', price: 2.0 }]
        const mockFetch = fetch.mockResponseOnce(JSON.stringify(pastriesSource))
        const webServiceConnector = new WebServiceConnector(config)
        
        const pastries = await webServiceConnector.getPastries()

        expect(mockFetch).toHaveBeenCalledWith(config.servicePath + '/data/pastries')
        expect(pastries.length).toEqual(2)
        expect(pastries[0].name).toEqual('pastry1')
    })
})