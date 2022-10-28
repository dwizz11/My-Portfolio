function scrollFunction(x) {
    let e = document.getElementById(x);
    // console.log(e);
    e.scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "start",
    });
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}



var sideNav = document.getElementById('myNav');

sideNav.addEventListener("click", (e) => {
    var before,active;
    var whichSideNav = e.target.matches("[data-sideNav-button]");

    // console.log(whichSideNav);

    if (!whichSideNav) return;

    var ifactive = e.target
        .closest("[data-sideNav]")
        .classList.contains("active");

    var getSideNav = e.target.closest("[data-sideNav]");

    console.log(ifactive);
    if (whichSideNav && ifactive) return;

    if (whichSideNav && !ifactive) {
        console.log("success");
        var getAllSideNav = document.getElementsByClassName("option");

        for (let index = 0; index < getAllSideNav.length; index++) {
            // if(getAllSideNav[index].classList.contains("active") && getAllSideNav[index].classList.contains("profile")){
            //     removeProfileClass();
            // }else if(getAllSideNav[index].classList.contains("active") && getAllSideNav[index].classList.contains("skill")){
            //     removeSkillClass();
            // }else{
            //     removeProjectClass();
            // }  

            if(getSideNav === getAllSideNav[index]) active = index;
            if(getAllSideNav[index].classList.contains("active")){
                removeClasses(index);
                getAllSideNav[index].classList.remove("active");
                // active = index;
                before = index;
                // console.log(getAllSideNav[index]);
                // break;
            } 
           
        }

        // console.log(before + " " + active);

        // var getSideNav = e.target.closest("[data-sideNav]");
        // console.log(getSideNav);
        addClasses(before, active);
        getSideNav.classList.add("active");

        addClasses

        // if( getSideNav.classList.contains("skill")) return addSkillClass() ;

        // if( getSideNav.classList.contains("profile")) return addProfileClass() ;

        // if( getSideNav.classList.contains("project")) return addProjectClass() ;

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
                removeProfileClass();
               addSkillClass();

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
            removeSkillClass();
            addProjectClass();
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
                removeProjectClass();
               addSkillClass();
                
                var getAllSideNav = document.getElementsByClassName("option");

                for (let index = 0; index < getAllSideNav.length; index++) {
                    getAllSideNav[index].classList.remove("active");
                }

                getAllSideNav[1].classList.add("active");

                // flagClicked = 1;
            } else if (currentPage[0].id == "profile") {
                var getAllSideNav = document.getElementsByClassName("option");
                removeSkillClass();
                addProfileClass();

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

function removeClasses(before){
    if(before == 0){

        removeProfileClass();
    }else if(before == 1){
        removeSkillClass();
    }else{
        removeProjectClass();
    }
}

function addClasses(before, current){
    var time = (Math.abs(current-before))*100 + 100
    if(current == 0){
        setTimeout(addProfileClass, time)
    }else if(current == 1){
        setTimeout(addSkillClass, time)
    }else if(current == 2){
        setTimeout(addProjectClass, time)
    }
}


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

function addSkillClass(){
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
}

function addProfileClass() {
    $(".leftSide h1").addClass("animate__animated animate__slideInLeft");

    $(".leftSide p, .leftSide h5").addClass(
        "animate__animated animate__fadeInUp"
    );

    $(".rightSide").addClass("animate__animated animate__slideInRight");
}

function addProjectClass() {
    $(".Projects-title").addClass("animate__animated animate__slideInLeft");

    $(".projectWrapper .project").addClass(
        "animate__animated animate__fadeInUp"
    );
}

function removeProjectClass() {
    $(".Projects-title").removeClass("animate__animated animate__slideInLeft");

    $(".projectWrapper .project").removeClass(
        "animate__animated animate__fadeInUp"
    );
}

var buttons = document.getElementById('buttons');

var counter = 0;

buttons.addEventListener('click', (e) => {

    var prev = e.target.matches('[data-prev]');
    var next = e.target.matches('[data-next]');
    var dontclick = e.target.matches('[data-dont-click]');

    var getProjects = document.querySelectorAll('.projectWrapper .project')

    if(dontclick) return;
    if(counter == 0 && prev) return;
    if(counter == getProjects.length-1 && next) return;


    if(prev){
        counter--;
        getProjects[counter].classList.remove('hide')

        $(".nextButton").removeClass(
            "dead"
        );
        if(counter == 0){
            $(".backButton").addClass(
                "dead"
            );
        }
        
    } else {
        
        getProjects[counter].classList.add('hide');
        counter++;
        $(".backButton").removeClass(
            "dead"
        );
        if(counter == getProjects.length-1){
            $(".nextButton").addClass(
                "dead"
            );
        }

    }
    // console.log(counter);

})