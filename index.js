function scrollFunction(x) {
    let e = document.getElementById(x);
    console.log(e);
    e.scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "start",
    });
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};



var flagClicked = 0;

document.addEventListener("click", (e) => {
    var whichSideNav = e.target.matches("[data-sideNav-button]");

    console.log(whichSideNav);

    if (!whichSideNav) return;

    var ifactive = e.target
        .closest("[data-sideNav]")
        .classList.contains("active");

    console.log(ifactive);
    if (whichSideNav && ifactive) return;

    if (whichSideNav && !ifactive) {
        console.log("success");
        var getAllSideNav = document.getElementsByClassName("option");

        for (let index = 0; index < getAllSideNav.length; index++) {
            getAllSideNav[index].classList.remove("active");
        }

        var getSideNav = e.target.closest("[data-sideNav]");
        getSideNav.classList.add("active");

        flagClicked = 1;
    }
});

var lastScroll = 0;
var active = 0;
var currentPage = $("#profile");

$("html, body").css({
    overflow: "hidden",
    height: "100%",
});

document.addEventListener(
    "mousewheel",
    (e) => {setTimeout(() => {
        if (active === 1) {
            return;
        }

        active = 1;

        if (e.deltaY > 0) {
            var prev = currentPage;
            currentPage = prev.next()[0] !== undefined ? prev.next() : prev;
            scrollFunction(currentPage[0].id);
            console.log(currentPage[0].id);
            console.log(prev[0].id);
            if (currentPage[0].id == "skill") {
                // element is scrolled into view, add animation class
                $(".Skill-title").addClass(
                    "animate__animated animate__slideInLeft"
                );

                $(".Skill-desc").addClass(
                    "animate__animated animate__fadeInUp"
                );

                $(".ball.html").addClass("animate__animated animate__fadeInUp");

                $(".ball.css").addClass("animate__animated animate__fadeInUp");

                $(".ball.js").addClass("animate__animated animate__fadeInUp");

                $(".ball.mysql").addClass(
                    "animate__animated animate__fadeInUp"
                );

                $(".ball.php").addClass("animate__animated animate__fadeInUp");

                var getAllSideNav = document.getElementsByClassName("option");

                for (let index = 0; index < getAllSideNav.length; index++) {
                    getAllSideNav[index].classList.remove("active");
                }

                getAllSideNav[1].classList.add("active");

                // flagClicked = 1;
            } else if (
                currentPage[0].id == "project" ||
                prev[0].id == "project"
            ) {
                console.log("success");
                var getAllSideNav = document.getElementsByClassName("option");

                for (let index = 0; index < getAllSideNav.length; index++) {
                    getAllSideNav[index].classList.remove("active");
                }

                getAllSideNav[2].classList.add("active");
            }
        } else {
            var prev = currentPage;
            currentPage = prev.prev()[0] !== undefined ? prev.prev() : prev;

            // if(currentPage[0].id == 'profile'){
            //     window.scrollTo({top: 0, behavior: 'smooth'});
            //     return;
            // }
            scrollFunction(currentPage[0].id);

            if (currentPage[0].id == "skill") {
                // element is scrolled into view, add animation class
                $(".Skill-title").addClass(
                    "animate__animated animate__slideInLeft"
                );

                $(".Skill-desc").addClass(
                    "animate__animated animate__fadeInUp"
                );

                $(".ball.html").addClass("animate__animated animate__fadeInUp");

                $(".ball.css").addClass("animate__animated animate__fadeInUp");

                $(".ball.js").addClass("animate__animated animate__fadeInUp");

                $(".ball.mysql").addClass(
                    "animate__animated animate__fadeInUp"
                );

                $(".ball.php").addClass("animate__animated animate__fadeInUp");

                var getAllSideNav = document.getElementsByClassName("option");

                for (let index = 0; index < getAllSideNav.length; index++) {
                    getAllSideNav[index].classList.remove("active");
                }

                getAllSideNav[1].classList.add("active");

                // flagClicked = 1;
            } else if (currentPage[0].id == "profile") {
                var getAllSideNav = document.getElementsByClassName("option");

                for (let index = 0; index < getAllSideNav.length; index++) {
                    getAllSideNav[index].classList.remove("active");
                }

                getAllSideNav[0].classList.add("active");
            }
        }

        setTimeout(() => {
            active = 0;
        }, 200);
    }, 700)
    }
);

// });
// listen for scroll event
// $(window).scroll(function () {
//     // check if element is scrolled into view
//     $("#skill").appear(setTimeout(function () {
//         // element is scrolled into view, add animation class
//         removeProfileClass();
//         $(".Skill-title").addClass("animate__animated animate__slideInLeft");

//         $(".Skill-desc").addClass("animate__animated animate__fadeInRight");

//         $(".ball.html").addClass("animate__animated animate__fadeInUp");

//         $(".ball.css").addClass("animate__animated animate__fadeInUp");

//         $(".ball.js").addClass("animate__animated animate__fadeInUp");

//         $(".ball.mysql").addClass("animate__animated animate__fadeInUp");

//         $(".ball.php").addClass("animate__animated animate__fadeInUp");

//         // var getAllSideNav = document.getElementsByClassName("option");

//         // for (let index = 0; index < getAllSideNav.length; index++) {
//         //     getAllSideNav[index].classList.remove("active");
//         // }

//         // getAllSideNav[1].classList.add("active");

//         // flagClicked = 1;
//     }),800);

//     $("#profile").appear(setTimeout(function () {
//         removeSkillClass();

//         $(".leftSide h1").addClass("animate__animated animate__slideInLeft");

//         $(".leftSide p, .leftSide h5").addClass("animate__animated animate__fadeInUp");

//         $(".rightSide").addClass("animate__animated animate__slideInRight");
//         // var getAllSideNav = document.getElementsByClassName("option");

//         // for (let index = 0; index < getAllSideNav.length; index++) {
//         //     getAllSideNav[index].classList.remove("active");
//         // }

//         // getAllSideNav[0].classList.add("active");

//         // flagClicked = 0;
//     }),100);

//     $("#project").appear(function () {
//         // console.log('appeared');
//         // var getAllSideNav = document.getElementsByClassName("option");

//         // for (let index = 0; index < getAllSideNav.length; index++) {
//         //     getAllSideNav[index].classList.remove("active");
//         // }

//         // getAllSideNav[2].classList.add("active");

//         // flagClicked = 0;
//     });
// });

// lock scroll position, but retain settings for later

function removeSkillClass() {
    $(".Skill-title").removeClass("animate__animated animate__slideInLeft");

    $(".Skill-desc").removeClass("animate__animated animate__fadeInUp");

    $(".ball.html").removeClass("animate__animated animate__fadeInUp");

    $(".ball.css").removeClass("animate__animated animate__fadeInUp");

    $(".ball.js").removeClass("animate__animated animate__fadeInUp");

    $(".ball.mysql").removeClass("animate__animated animate__fadeInUp");

    $(".ball.php").removeClass("animate__animated animate__fadeInUp");
}

function removeProfileClass() {
    $(".leftSide h1").removeClass("animate__animated animate__slideInLeft");

    $(".leftSide p, .leftSide h5").removeClass(
        "animate__animated animate__fadeInUp"
    );

    $(".rightSide").removeClass("animate__animated animate__slideInRight");
}
