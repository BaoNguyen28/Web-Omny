/* ================= BASE SCRIPT ================= */

document.addEventListener('DOMContentLoaded', function () {

    /* ===== SCROLL REVEAL ===== */
    if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            for (var i = 0; i < entries.length; i++) {
                if (entries[i].isIntersecting) {
                    entries[i].target.classList.add('active');
                }
            }
        }, { threshold: 0.2 });

        var sections = document.querySelectorAll('.content-wrapper > section');
        for (var j = 0; j < sections.length; j++) {
            revealObserver.observe(sections[j]);
        }
    }

    /* ===== BACK TO TOP ===== */
    var backToTop = document.querySelector('.back-to-top');
    if (backToTop) {

        window.addEventListener('scroll', function () {
            var totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            var scrolled = window.scrollY || document.documentElement.scrollTop;
            var percent = (scrolled / totalHeight) * 100;

            if (percent > 30) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ===== MOBILE MENU ===== */
    var hamburger = document.getElementById('hamburger');
    var menu = document.querySelector('.main-menu');

    if (hamburger && menu) {
        hamburger.addEventListener('pointerdown', function (e) {
            e.preventDefault();
            hamburger.classList.toggle('active');
            menu.classList.toggle('open');
        });
    }

});
