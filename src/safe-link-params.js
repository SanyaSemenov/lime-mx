(function() {
    'use strict';

    document.addEventListener('click', function(e) {
        var target = e.target;
        var targetHref = target.getAttribute('href');
        var url = document.location.href;
        var newUrl, indexParam, urlParams;

        if (targetHref && targetHref.indexOf('www.lime-zaim') > -1) {
            e.preventDefault();
            indexParam = url.indexOf('?');
            urlParams = url.slice(indexParam);
            if (targetHref.indexOf('?') > -1) {
                newUrl = targetHref + '&' + urlParams.slice(1);
            } else {
                newUrl = targetHref + urlParams;
            }

            window.location.href = newUrl;
        }
    });

})();
