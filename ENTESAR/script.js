document.addEventListener("DOMContentLoaded", function() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slider-wrapper .slide');
    let slideIndex = 0;

    function updateSlider() {
        const slideWidth = slides[0].offsetWidth; // Dynamically calculate slide width
        sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
        sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }

    function nextSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        updateSlider();
    }

    setInterval(nextSlide, 3000);
});

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLETE_ID";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }