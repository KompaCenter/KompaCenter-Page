document.addEventListener("DOMContentLoaded", () => {

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-menu a").forEach(link => {

        if (
            link.getAttribute("href") === currentPage ||
            (currentPage === "" &&
            link.getAttribute("href") === "index.html")
        ) {

            link.classList.add("active");

        }

    });

});