/* =====================================================
   FUGA COLORADA
   JAVASCRIPT
===================================================== */


/* =====================================================
   CUANDO CARGA LA PÁGINA
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =============================================
           AÑO AUTOMÁTICO
        ============================================= */

        const year =
            document.getElementById("year");


        if (year) {

            year.textContent =
                new Date().getFullYear();

        }



        /* =============================================
           MENÚ MÓVIL
        ============================================= */

        const menuButton =
            document.getElementById(
                "menuButton"
            );


        const navMenu =
            document.getElementById(
                "navMenu"
            );


        if (menuButton && navMenu) {


            menuButton.addEventListener(
                "click",
                function () {

                    navMenu.classList.toggle(
                        "active"
                    );

                }
            );


            /* Cerrar menú al pulsar un enlace */

            const links =
                navMenu.querySelectorAll("a");


            links.forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {

                            navMenu.classList.remove(
                                "active"
                            );

                        }
                    );

                }
            );

        }



        /* =============================================
           CERRAR MENÚ AL TOCAR FUERA
        ============================================= */

        document.addEventListener(
            "click",
            function (event) {


                if (
                    navMenu &&
                    menuButton &&
                    !navMenu.contains(event.target) &&
                    !menuButton.contains(event.target)
                ) {

                    navMenu.classList.remove(
                        "active"
                    );

                }

            }
        );



        /* =============================================
           ANIMACIÓN SUAVE DE APARICIÓN
        ============================================= */

        const sections =
            document.querySelectorAll(
                ".section"
            );


        const observer =
            new IntersectionObserver(
                function (entries) {


                    entries.forEach(
                        function (entry) {


                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        sections.forEach(
            function (section) {

                observer.observe(section);

            }
        );

    }
);