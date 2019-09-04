// BeveragesView.js
// Copyright © 2019 NextStep IT Training. All rights reserved.
//
// This class renders the list of formatted beverages onto the specified element.
//

import $ from 'jquery'

class BeveragesView {

    render(element, beverages) {

        let tbody;

        element.empty();
        element.append($('<h2>').text('Beverages'))
        element.append(
            $('<table>').append(
                $('<thead>').append(
                    $('<tr>').append(
                        $('<th>').text('Beverage'),
                        $('<th>').text('Price')
                    )
                )
            ).append(
                tbody = $('<tbody>')
            )
        )

        beverages.forEach(beverage => tbody.append(
            $('<tr>').append(
                $('<td>').text(beverage.name),
                $('<td>').text(beverage.price)
            )
        ))
    }
}

export default BeveragesView;
