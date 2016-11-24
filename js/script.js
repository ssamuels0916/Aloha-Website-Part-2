$(function() {


    // smoothly scroll when you click on the navigation links
    $('a').smoothScroll();


    $('.scrollTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 5000);
        return false;
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