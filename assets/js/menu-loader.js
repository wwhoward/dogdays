fetch('/partials/menu.html')
    .then(function(r) { return r.text(); })
    .then(function(html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        var nav = doc.getElementById('menu');
        var menu = document.getElementById('menu');
        if (nav && menu) menu.innerHTML = nav.innerHTML;
    });
