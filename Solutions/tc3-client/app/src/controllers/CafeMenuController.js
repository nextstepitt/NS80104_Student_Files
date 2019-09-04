// CafeMenuController.js
// Copyright © 2019 NextStep IT Training. All rights reserved.
//

import $ from 'jquery'

class CafeMenuController {

    constructor(webServiceConnector, beveragesView, pastriesView) {

        this._webServiceConnector = webServiceConnector
        this._beveragesView = beveragesView
        this._pastriesView = pastriesView
    }

    async displayBeverages() {

        let beverages = await this._webServiceConnector.getBeverages()

        this._beveragesView.render($('#content'), beverages)
    }

    async displayPastries() {

        let pastries = await this._webServiceConnector.getPastries()
        
        this._pastriesView.render($('#content'), pastries)
    }
}

export default CafeMenuController
