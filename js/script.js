$(function() {


    // smoothly scroll when you click on the navigation links
    $('.site-navigation a').smoothScroll();


    $('.scrollTop').click(function() {
        $('html, body').smoothScroll(5000);
    });


    $('.wrapper').on('submit', function(event) {
        event.preventDefault();
        if ($('#inputText').val() == '') {
            alert('Please enter a correct email address.');
        } else {
            alert('Thank you for subscribing to our newsletter!');
        }

        $('#inputText').val('');
    });

});