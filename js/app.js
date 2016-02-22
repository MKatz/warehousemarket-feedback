$('#sendRequest').click(function() {
    var name = $('#name').val();
    var email = $('#contact').val();
    var brand = $('#brand').val();
    var size = $('#size').val();
    var quantity = $('#quantity').val();
    // var body = brand.concat(size, quantity);
    var body = "Brand - " + String(brand) + " Size - " + String(size) + " Quantity - " + String(quantity);
    $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
            'key': 'cC3lQUM2VNUZi1Lr1lCNmQ',
            'message': {
                'from_email': email,
                'to': [
                    {
                        'email': 'mrmattkatz@gmail.com',
                        'name': name,
                        'type': 'to'
                    }
                ],
                'autotext': 'true',
                'subject': 'Product Request',
                'text': body
            }
        }
    }).done(function(response) {
            alert('Your product request was sent. Thank you!');
            location.reload();
    });
});

$('#sendProblem').click(function() {
    var name = $('#nameProblem').val();
    var email = $('#contactProblem').val();
    var body = $('#problem').val();
    $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
            'key': 'cC3lQUM2VNUZi1Lr1lCNmQ',
            'message': {
                'from_email': email,
                'to': [
                    {
                        'email': 'mrmattkatz@gmail.com',
                        'name': name,
                        'type': 'to'
                    }
                ],
                'autotext': 'true',
                'subject': 'Problem/Suggestion',
                'text': body
            }
        }
    }).done(function(response) {
            alert('Your problem/suggestion was sent. Thank you!');
            location.reload();
    });
});
