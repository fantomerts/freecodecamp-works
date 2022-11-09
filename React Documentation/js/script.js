function changeColor (cb) {
        navbar = document.getElementById("navbar");
        main = document.getElementById("main-doc");
        if (cb.checked) {
            document.body.style.background = "#060F18";
            navbar.style.background = "#225695";
            navbar.style.color = "#f1f1ff";
            navbar.style.boxShadow = "0.1rem 0.1rem 0.4rem black";

            main.style.background = "#225695";
            main.style.color = "#f1f1ff";
            main.style.boxShadow = "0.1rem 0.1rem 0.4rem black";
        }
        else {
            document.body.style.background = "#f1f1ff";
            navbar.style.background = "white";
            navbar.style.color = "#333366";
            navbar.style.boxShadow = "0.1rem 0.1rem 0.4rem rgb(128, 147, 153)";

            main.style.background = "white";
            main.style.color = "#333366";
            main.style.boxShadow = "0.1rem 0.1rem 0.4rem rgb(128, 147, 153)";
        }
    }