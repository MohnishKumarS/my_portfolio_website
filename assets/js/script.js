    // -------------  navbar scroll to fixed -------------

    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.getElementById("navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY < 870) {
          navbar.style.backgroundColor = "#fff";
          navbar.style.boxShadow = "none";
          navbar.style.height = "80px"
          navbar.style.backdropFilter = 'blur(0px)';
        } else {
          navbar.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
          navbar.style.boxShadow = "0 10px 10px rgba(0, 0, 0, 0.1)";
          navbar.style.height = "66px";
          navbar.style.backdropFilter = 'blur(10px)';
          /* Set your desired background color here */
        }
      });

      AOS.init({
        duration:4000
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


    let progressEndValues = [95, 80, 70, 65, 90, 70, 75, 70];
    let progressSpeed = 20;


    progressBars.forEach((progressBar, index) => {
      let progressValue = 0;
      let progressEndValue = progressEndValues[index];

      let progress = setInterval(() => {
        progressValue++;

        circleValues[index].textContent = progressValue;
        progressBar.style.background = `conic-gradient(#ffd936 ${progressValue * 3.6}deg, white ${progressValue * 3.6}deg)`;

        if (progressValue == progressEndValue) {
          clearInterval(progress)
        }
      }, progressSpeed)
    })


    // ----------- project image scroll ---------------

    $(document).ready(function () {
      $('.projects_img').each(function (ind, val) {
        var image = $(this);
        // console.log(val);
        var lastScrollTop = 0;

        image.on('scroll', function () {
          var scrollTop = image.scrollTop();
          lastScrollTop = scrollTop;
        });

        image.on('mouseout', function (e) {
          if (!image.is(e.relatedTarget) && !image.has(e.relatedTarget).length) {
            image.animate({
              scrollTop: 0
            }, 800)
          }
        });

        image.on('mouseenter', function () {
          image.find('.project_scroll_icon').addClass('scrolling');
          $('.scrolling').css('display', 'block');

          setTimeout(() => {
            image.find('.scrolling').removeClass('scrolling');
            image.find('.project_scroll_icon').css('display', 'none');
          }, 800);
        })
      });
    });

    

    // Call the function to initiate the download

    function downloadPDF() {
      // Path to your PDF file
      var pdfFilePath = 'Mohnish_Resume.pdf';

      // Fetch the PDF file
      fetch(pdfFilePath)
        .then(response => response.blob())
        .then(blob => {
          // Create a URL for the Blob object
          var url = window.URL.createObjectURL(blob);

          // Create an anchor element
          var a = document.createElement('a');
          a.href = url;
          a.download = 'Mohnish_Resume.pdf'; // Specify the name for the downloaded file

          // Programmatically trigger a click event on the anchor element
          a.click();

          // Release the URL object after download
          window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error fetching PDF:', error));
    }






