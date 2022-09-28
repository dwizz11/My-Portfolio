function scrollFunction(x) {
    let e = document.getElementById(x);
    e.scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "start",
    });
}

function scrollFunctionSkill() {
    let e = document.getElementById("skill");
    e.scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "start",
    });
}

document.addEventListener("click", (e) => {
    var whichSideNav = e.target.matches("[data-sideNav-button]");

    if (!whichSideNav) return;

    var ifactive = e.target
        .closest("[data-sideNav]")
        .classList.contains("active");
    if (whichSideNav && ifactive) return;

    if (whichSideNav && !ifactive) {
        var getAllSideNav = document.getElementsByClassName("option");

        for (let index = 0; index < getAllSideNav.length; index++) {
            getAllSideNav[index].classList.remove("active");
        }

        var getSideNav = e.target.closest("[data-sideNav]");
        var getContent = getSideNav.classList[0];
        getSideNav.classList.add("active");
    }
});

var lastScrollTop = 0;
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
function disableScrolling(){
  var x=0;
  var y=0;
  window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
  window.onscroll=function(){};
}
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.

// Create a global variable which will keep track of userInteraction
window.onscroll = disableScrolling();
window.addEventListener('wheel', function(event)
{
 if (event.deltaY < 0)
 {
  console.log('scrolling up');
  window.onscroll = enableScrolling();
  
 }
 else if (event.deltaY > 0)
 {
  console.log('scrolling down');
  // document.getElementById('status').textContent= 'scrolling down';
  
 }
});



function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();

    var elemTop = $(elem).offset().top;

    return elemTop >= docViewTop;
}

// listen for scroll event
$(window).scroll(function () {
    // check if element is scrolled into view
    $("#skill").appear(function(){
      // element is scrolled into view, add animation class
      $(".Skill-title").addClass("animate__animated animate__slideInRight");

      $(".Skill-desc").addClass("animate__animated animate__fadeInUp");

      $(".ball.html").addClass("animate__animated animate__fadeInUp");

      $(".ball.css").addClass("animate__animated animate__fadeInUp");

      $(".ball.js").addClass("animate__animated animate__fadeInUp");

      $(".ball.mysql").addClass("animate__animated animate__fadeInUp");

      $(".ball.php").addClass("animate__animated animate__fadeInUp");

      var getAllSideNav = document.getElementsByClassName("option");

  for (let index = 0; index < getAllSideNav.length; index++) {
      getAllSideNav[index].classList.remove("active");
  }

  getAllSideNav[1].classList.add("active");
 

  // var getContent = getSideNav.classList[0];
  // console.log($(window).scrollTop())
  }) 

  $("#profile").appear(function(){
    // element is scrolled into view, add animation class
    

    var getAllSideNav = document.getElementsByClassName("option");

for (let index = 0; index < getAllSideNav.length; index++) {
    getAllSideNav[index].classList.remove("active");
}

getAllSideNav[0].classList.add("active");


// var getContent = getSideNav.classList[0];
// console.log($(window).scrollTop())
}) 

    
});
