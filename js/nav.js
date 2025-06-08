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
});