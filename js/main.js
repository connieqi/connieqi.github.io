$(document).ready(function() {
    // Cache selectors for faster performance.
    var $window = $(window),
    	$header = $('#header'),
        $name = $('#name'),
        $nameAnchor = $('#name-anchor');

    // $header.height($window.height());

    // Run this on scroll events.
    $window.scroll(function() {
        var window_top = $window.scrollTop();
        var div_top = $nameAnchor.offset().top;
        if (window_top > div_top) {
            // Make the div sticky.
            $name.addClass('sticky');
            $nameAnchor.height($name.height());
        }
        else {
            // Unstick the div.
            $name.removeClass('sticky');
            $nameAnchor.height(0);
        }
    });
});