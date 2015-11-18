$('#send').click(function() {
    var name = $('#inputName').val();
    var email = $('#inputEmail').val();
    var body = $('#inputBody').val();
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
                'subject': 'Test 4',
                'text': body
            }
        }
    }).done(function(response) {
            console.log('sent'); // if you're into that sorta thing
            console.log(name);
            console.log(email);
            alert('Your message was sent. Thank you!');
    });
});
