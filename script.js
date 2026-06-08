document.addEventListener("DOMContentLoaded", function () {
    var togglers = document.querySelectorAll(".navbar-toggler");

    togglers.forEach(function (button) {
        var targetSelector = button.getAttribute("data-bs-target");
        if (!targetSelector) {
            return;
        }

        var target = document.querySelector(targetSelector);
        if (!target) {
            return;
        }

        button.addEventListener("click", function () {
            var isShown = target.classList.toggle("show");
            button.setAttribute("aria-expanded", isShown ? "true" : "false");
        });
    });
});
