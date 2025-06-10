document.addEventListener("DOMContentLoaded", function () {
    function checkScroll() {
        const navbar = document.getElementById("navbar");

        if (window.scrollY > 1) {
            navbar.classList.add("shadow-md", "bg-white");
        } else {
            navbar.classList.remove("shadow-md", "bg-white");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();


    // humberger
    const hamburgers = document.querySelectorAll('.humberger');
    const navMobile = document.querySelector('.nav-mobile');

    hamburgers.forEach(hamburger => {
        hamburger.addEventListener('click', () => {
            hamburgers.forEach(item => item.classList.toggle('active'));
            navMobile.classList.toggle('active');
            document.body.classList.toggle('overflow-hidden');
        });
    });
});