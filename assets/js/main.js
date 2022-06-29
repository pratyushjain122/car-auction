"use strict";
const d = document;
d.addEventListener("DOMContentLoaded", function (event) {
    if (d.querySelector(".headroom")) {
        var headroom = new Headroom(document.querySelector("#navbar-main"), {
            offset: 0,
            tolerance: {
                up: 0,
                down: 0,
            },
        });
        headroom.init();
    }

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true,
    });

    d.querySelector(".current-year").textContent = new Date().getFullYear();
});
