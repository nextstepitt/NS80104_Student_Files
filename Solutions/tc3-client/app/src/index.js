// index.js
// Copyright © 2019 NextStep IT Training. All rights reserved.
//

import $ from 'jquery'

import config from './config/config'
import CafeMenuController from './controllers/CafeMenuController'
import WebServiceConnector from './services/WebServiceConnector';
import BeveragesView from './views/BeveragesView'
import PastriesView from './views/PastriesView'

(() => {

    let beveragesView = new BeveragesView()
    let pastriesView = new PastriesView()
    let webServiceConnector = new WebServiceConnector(config)
    let cafeMenuController = new CafeMenuController(webServiceConnector, beveragesView, pastriesView)

    $('button#beverages_button').click( (event) => cafeMenuController.displayBeverages() )
    $('button#pastries_button').click( (event) => cafeMenuController.displayPastries() )

    cafeMenuController.displayBeverages()

}).call(null)