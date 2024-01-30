    // -------------  navbar scroll to fixed -------------

    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.getElementById("navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY < 870) {
          navbar.style.backgroundColor = "#fff";
          navbar.style.boxShadow = "none";
          navbar.style.height = "80px"
        } else {
          navbar.style.backgroundColor = "#ebf2ff";
          navbar.style.boxShadow = "0 10px 10px rgba(0, 0, 0, 0.1)";
          navbar.style.height = "66px";
          /* Set your desired background color here */
        }
      });
    });



    

// -------- programming lang carousel -----------

$(document).ready(function () {
  $('.skill-carousel').owlCarousel({
    // nav: true,
    items: 3,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    // margin:20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1200: {
        items: 4
      }
    }
  });
})


// --------- skills percentage progress bar -----------------

let progressBars = document.querySelectorAll('.circular');
let circleValues = document.querySelectorAll('.circle-num');


let progressEndValues = [95,80,70,65,90,70,75,70];
let progressSpeed = 20;


progressBars.forEach((progressBar,index) => {
 let progressValue = 0;
 let progressEndValue = progressEndValues[index];

 let progress = setInterval(() => {
   progressValue++;
   
   circleValues[index].textContent = progressValue;
   progressBar.style.background = `conic-gradient(#ffd936 ${progressValue * 3.6}deg, white ${progressValue * 3.6}deg)`;

   if(progressValue == progressEndValue){
     clearInterval(progress)
   }
 } , progressSpeed)
})


    // ----------- project image scroll ---------------

    $(document).ready(function () {
      $('.projects_img').each(function (ind,val) {
        var image = $(this);
        // console.log(val);
        var lastScrollTop = 0;
    
        image.on('scroll', function () {
          var scrollTop = image.scrollTop();
          lastScrollTop = scrollTop;
        });
    
        image.on('mouseout', function (e) {
          if (!image.is(e.relatedTarget) && !image.has(e.relatedTarget).length) {
            image.animate({scrollTop:0},800)
          }
        });
    
        image.on('mouseenter',function(){
          image.find('.project_scroll_icon').addClass('scrolling');
          $('.scrolling').css('display', 'block');
    
          setTimeout(() => {
            image.find('.scrolling').removeClass('scrolling');
            image.find('.project_scroll_icon').css('display', 'none');
          }, 1000);
        })
      });
    });


        // document.addEventListener('DOMContentLoaded', function () {
    //   const imageContainers = document.querySelectorAll('.projects_img');
    //   let lastScrollTops = new Map();

    //   imageContainers.forEach((image) => {
    //     image.addEventListener('scroll', () => {
    //       const scrollTop = image.scrollTop;
    //       lastScrollTops.set(image, scrollTop);
    //     });

    //     image.addEventListener('mouseout', function () {

    //       const lastScrollTop = lastScrollTops.get(image);
    //       console.log(lastScrollTop);
    //       if (lastScrollTop !== undefined) {
    //         image.scrollTop = 0;
    //       }
    //     });
    //   });

    // })




    AOS.init();
