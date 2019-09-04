// PastriesView.js
// Copyright © 2019 NextStep IT Training. All rights reserved.
//
// This class renders the list of formatted Pastries onto the specified element.
//

import $ from 'jquery'

class PastriesView {

    render(element, pastries) {

        let tbody;

        element.empty();
        element.append($('<h2>').text('Pastries'))
        element.append(
            $('<table>').append(
                $('<thead>').append(
                    $('<tr>').append(
                        $('<th>').text('Pastries'),
                        $('<th>').text('Price')
                    )
                )
            ).append(
                tbody = $('<tbody>')
            )
        )

        pastries.forEach(pastry => tbody.append(
            $('<tr>').append(
                $('<td>').text(pastry.name),
                $('<td>').text(pastry.price)
            )
        ))
    }
}

export default PastriesView;
