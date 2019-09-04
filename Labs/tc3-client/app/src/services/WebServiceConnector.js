// WebServiceConnector
// Copyright © 2019 NextStep IT Training. All rights reserved.
//

import Beverage from '../models/Beverage'
import Pastry from '../models/Pastry'

const paths = {
    beveragesPath: '/data/beverages',
    pastriesPath: '/data/pastries'
}

class WebServiceConnector {

    constructor(config) {

        this._config = config;
    }

    async getBeverages() {

        // jQuery is not so good; get and ajax don't work because of cross-origin restrictions
        // in the library, and JSONP does work for retrieval but what about post?
        //
        // let result = await $.get(this._config.servicePath + paths.beveragesPath)
        // let result = await $.ajax({ URL: this._config.servicePath + paths.beveragesPath, type: 'GET'})
        // let beveragesSource = await $.getJSON(this._config.servicePath + paths.beveragesPath)

        // Fetch doesn't have the restrictions:

        let response = await fetch(this._config.servicePath + paths.beveragesPath);
        let beveragesSource = await response.json();
        let beverages = beveragesSource.map(beverageSource => new Beverage(beverageSource))

        return beverages;
    }

    async getPastries() {

        let response = await fetch(this._config.servicePath + paths.pastriesPath);
        let pastriesSource = await response.json();
        let pastries = pastriesSource.map(pastrySource => new Pastry(pastrySource))

        return pastries;
    }
}

export default WebServiceConnector;
