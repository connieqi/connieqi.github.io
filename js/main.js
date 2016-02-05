$(document).ready(function() {
    // Cache selectors for faster performance.
    var $window = $(window),
    	$header = $('#header'),
        $name = $('#name'),
        $nameAnchor = $('#name-anchor'),
        $faceIcon = $('#face-icon');

    // $header.height($window.height());

    // Run this on scroll events.
    $window.scroll(function() {
        var window_top = $window.scrollTop();
        var name_top = $nameAnchor.offset().top;
        var face_top = $faceIcon.offset().top;

        if (window_top > name_top) {
            // Make the div sticky.
            $name.addClass('sticky');
            $nameAnchor.height($name.height());
        }
        else {
            // Unstick the div.
            $name.removeClass('sticky');
            $nameAnchor.height(0);
        }

        // fade out face icon
        $faceIcon.css({
            'opacity': ((face_top - window_top) / face_top)
        });
    });
});