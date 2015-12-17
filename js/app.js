$('#sendRequest').click(function() {
    var name = $('#name').val();
    var email = $('#contact').val();
    var brand = $('#brand').val();
    var size = $('#size').val();
    var quantity = $('#quantity').val();
    var body = brand.concat(size, quantity);
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
            alert('Your message was sent. Thank you!');
    });
});

$('#sendProblem').click(function() {
    var name = $('#name').val();
    var email = $('#contact').val();
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
            alert('Your message was sent. Thank you!');
    });
});
