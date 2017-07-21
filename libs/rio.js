$(document).ready(function() {

    var root = 'http://jsonplaceholder.typicode.com';

    $.ajax({
        url: root + '/users',
        method: 'GET'
    }).then(function(data) {
        $.map(data, function(user, index) {
            var template =
                '<div id="post_' + index + '" style="text-align: left">' +
                '<h3> User ID: ' + user.id + '</h3>' +
                '<h2> Name: ' + user.name + '</h2>' +
                '<p> Username: ' + user.username + '</p>' +
                '<p> E-mail: ' + user.email + '</p>' +
                '<p> Street: ' + user.address.street + '</p>' +
                '<p> Suite: ' + user.address.suite + '</p>' +
                '<p> City: ' + user.address.city + '</p>' +
                '<p> Zipcode: ' + user.address.zipcode + '</p>' +
                '<p> Phone: ' + user.phone + '</p>' +
                '<p> Company.name: ' + user.company.name + '</p>' +
                '<p> Company.catchPhrase: ' + user.company.catchPhrase + '</p>' +
                '<p> Company.bs: ' + user.company.bs + '</p>';
            '</div>';

            var template1 =
                '<div id="post_' + index + '" style="text-align: right">' +
                '<h3> User ID: ' + user.id + '</h3>' +
                '<h2> Name: ' + user.name + '</h2>' +
                '<p> Username: ' + user.username + '</p>' +
                '<p> E-mail: ' + user.email + '</p>' +
                '<p> Street: ' + user.address.street + '</p>' +
                '<p> Suite: ' + user.address.suite + '</p>' +
                '<p> City: ' + user.address.city + '</p>' +
                '<p> Zipcode: ' + user.address.zipcode + '</p>' +
                '<p> Phone: ' + user.phone + '</p>' +
                '<p> Company.name: ' + user.company.name + '</p>' +
                '<p> Company.catchPhrase: ' + user.company.catchPhrase + '</p>' +
                '<p> Company.bs: ' + user.company.bs + '</p>';
            '</div>';

            if (index % 2 == 0) {
                $('#users').append(template);
            } else {
                $('#users').append(template1);
            }
        });
    })

    $(".apare").click(function() {
        $('#users div').eq(0).show();
        $('#users div').eq(1).show();
    });

    $(".dispare").click(function() {
        $('#users div').eq(0).hide();
        $('#users div').eq(1).hide();
    });

    $('.loadPosts').click(function(ev) {
        $('#users div').eq(0).find('h2').css('color', 'blue')
    });

/*
    console.log('children', $('#users').children());

    $('#users div').eq(1).css('background', 'red');
    $('#users div').eq(6).css('background', 'red');
    console.log('bgred', $('#users div').eq(1).css('background', 'red'));

    console.log('first', $('#users div').first());

    console.log('last', $('#users div').last());

    var appendtext = $('#users div').children().append("<b>Text appended</b>");
    console.log('appendtext', $('#users div').children().append("<b>Text appended</b>"));

    console.log('nepoti', $('#users div').first().children().not(':eq(1)').css('color', 'blue'));

    $('#users div').children().children().first().html('Text schimbat');


*/

});
