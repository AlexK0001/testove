document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll(".dashboard__header, .dashboard__section, .dashboard__user, .menu__item");

    elementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("fade-in");
        }, index * 100); // Затримка для ефекту по черзі
    });
});
