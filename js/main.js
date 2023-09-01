(function ($) {
    "use strict";
    spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// Typewriter for index page

const texts = ["Job Prep"];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const delay = 100;
const element = document.getElementById('text');

function type() {
    const text = texts[textIndex];
    if (!isDeleting && charIndex <= text.length) {
        element.textContent = text.substring(0, charIndex);
        charIndex++;
        if (charIndex === text.length + 1) {
            isDeleting = true;
            charIndex--;
            setTimeout(erase, 1000);
        } else {
            setTimeout(type, delay);
        }
    }
}

function erase() {
    const text = texts[textIndex];
    if (isDeleting && charIndex >= 0) {
        element.textContent = text.substring(0, charIndex);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            charIndex++;
            setTimeout(type, 500);
        } else {
            setTimeout(erase, delay);
        }
    }
}

setTimeout(type, delay);

// validation for contact form 
function sendMessage() {
    const form = document.querySelector('.needs-validation');
    const feedback = document.querySelector('.feedback-message');

    if (form.checkValidity()) {
        feedback.textContent = 'Your message has been successfully sent.';
        feedback.classList.add('success');
    } else {
        feedback.textContent = 'Please fill out all required fields before sending.';
        feedback.classList.remove('success');
    }

    // Add the 'was-validated' class to show validation feedback
    form.classList.add('was-validated');
}

// Submit button function
function Btn2() {
    const form = document.querySelector('.needs-validation');

    if (form.checkValidity()) {
        // Form is valid
        alert('Success! Your answers have been submitted.');
    } else {
        // Form is invalid
        alert('Error! Please fill out all fields before submitting.');
    }

    // Trigger validation feedback
    form.classList.add('was-validated');
}

// Software js
      // Get the form element
      const form = document.querySelector('.needs-validation');
  
      form.addEventListener('submit', function (event) {
          // Prevent the default form submission behavior
          event.preventDefault();
  
          // Check if the form is valid
          if (form.checkValidity() === false) {
              event.stopPropagation();   
          } else {
              // Perform your form submission action here
              alert('Form submitted successfully!');
              form === "";
          }
  
          // Add the 'was-validated' class to show validation feedback
          form.classList.add('was-validated');
      });


        // function use for submit button

      function Btn() {
        const form = document.querySelector('.needs-validation');

        if (form.checkValidity()) {
            // Form is valid
            alert('Success! Your answers have been submitted.');
        } else {
            // Form is invalid
            alert('Error! Please fill out all fields before submitting.');
        }

        // Trigger validation feedback
        form.classList.add('was-validated');
    }

//  Software Engineer
    function showResults() {
        const answers = {
          q1: document.getElementById("q1b").checked,
          q2: document.getElementById("q2b").checked,
          q3: document.getElementById("q3c").checked, 
          q4: document.getElementById("q4c").checked, 
          q5: document.getElementById("q5c").checked, 
          q6: document.getElementById("q6b").checked,
          q7: document.getElementById("q7b").checked,
          
        };
  
        const correctAnswers = Object.values(answers).filter(answer => answer).length;
        const totalQuestions = Object.keys(answers).length;
  
        const resultPercentage = (correctAnswers / totalQuestions) * 100;
  
        alert(`You answered ${correctAnswers} out of ${totalQuestions} questions correctly.Your result: ${resultPercentage.toFixed(2)}%`);
    }

// Marketing
    function showResults2() {
        const answers = {
        q1: document.getElementById("q1c").checked,
        q2: document.getElementById("q2d").checked,
        q3: document.getElementById("q3d").checked, 
        q4: document.getElementById("q4a").checked, 
        q5: document.getElementById("q5c").checked, 
        q6: document.getElementById("q6a").checked,
        q7: document.getElementById("q7b").checked,
        
        };

        const correctAnswers = Object.values(answers).filter(answer => answer).length;
        const totalQuestions = Object.keys(answers).length;

        const resultPercentage = (correctAnswers / totalQuestions) * 100;

        alert(`You answered ${correctAnswers} out of ${totalQuestions} questions correctly.\nYour result: ${resultPercentage.toFixed(2)}%`);
    }
    // Teaching
    function showResults2() {
        const answers = {
        q1: document.getElementById("q1c").checked,
        q2: document.getElementById("q2c").checked,
        q3: document.getElementById("q3b").checked, 
        q4: document.getElementById("q4c").checked, 
        q5: document.getElementById("q5c").checked, 
        q6: document.getElementById("q6b").checked,
        q7: document.getElementById("q7a").checked,
        
        };

        const correctAnswers = Object.values(answers).filter(answer => answer).length;
        const totalQuestions = Object.keys(answers).length;

        const resultPercentage = (correctAnswers / totalQuestions) * 100;

        alert(`You answered ${correctAnswers} out of ${totalQuestions} questions correctly.\nYour result: ${resultPercentage.toFixed(2)}%`);
    }
     // Human Resources
     function showResults3() {
        const answers = {
        q1: document.getElementById("q1c").checked,
        q2: document.getElementById("q2c").checked,
        q3: document.getElementById("q3c").checked, 
        q4: document.getElementById("q4b").checked, 
        q5: document.getElementById("q5b").checked, 
        q6: document.getElementById("q6b").checked,
        q7: document.getElementById("q7c").checked,
        
        };

        const correctAnswers = Object.values(answers).filter(answer => answer).length;
        const totalQuestions = Object.keys(answers).length;

        const resultPercentage = (correctAnswers / totalQuestions) * 100;

        alert(`You answered ${correctAnswers} out of ${totalQuestions} questions correctly.\nYour result: ${resultPercentage.toFixed(2)}%`);
    }
     // Sales And Management
     function showResults4() {
        const answers = {
        q1: document.getElementById("q1c").checked,
        q2: document.getElementById("q2b").checked,
        q3: document.getElementById("q3b").checked, 
        q4: document.getElementById("q4b").checked, 
        q5: document.getElementById("q5d").checked, 

        
        };

        const correctAnswers = Object.values(answers).filter(answer => answer).length;
        const totalQuestions = Object.keys(answers).length;

        const resultPercentage = (correctAnswers / totalQuestions) * 100;

        alert(`You answered ${correctAnswers} out of ${totalQuestions} questions correctly.\nYour result: ${resultPercentage.toFixed(2)}%`);
    }
        // Design
        function showResults5() {
            const answers = {
            q1: document.getElementById("q1c").checked,
            q2: document.getElementById("q2c").checked,
            q3: document.getElementById("q3c").checked, 
            q4: document.getElementById("q4b").checked, 
            q5: document.getElementById("q5c").checked, 
    
            
            };
    
            const correctAnswers = Object.values(answers).filter(answer => answer).length;
            const totalQuestions = Object.keys(answers).length;
    
            const resultPercentage = (correctAnswers / totalQuestions) * 100;
    
            alert(`You answered ${correctAnswers} out of ${totalQuestions} questions correctly.\nYour result: ${resultPercentage.toFixed(2)}%`);
        }

        // Bussiness Developement
         // Design
         function showResults6() {
            const answers = {
            q1: document.getElementById("q1a").checked,
            q2: document.getElementById("q2b").checked,
            q3: document.getElementById("q3d").checked, 
            q4: document.getElementById("q4c").checked, 
            q5: document.getElementById("q5c").checked, 
    
            
            };
    
            const correctAnswers = Object.values(answers).filter(answer => answer).length;
            const totalQuestions = Object.keys(answers).length;
    
            const resultPercentage = (correctAnswers / totalQuestions) * 100;
    
            alert(`You answered ${correctAnswers} out of ${totalQuestions} questions correctly.\nYour result: ${resultPercentage.toFixed(2)}%`);
        }

         // Customer Services
         function showResults7() {
            const answers = {
            q1: document.getElementById("q1c").checked,
            q2: document.getElementById("q2d").checked,
            q3: document.getElementById("q3c").checked, 
            q4: document.getElementById("q4d").checked, 
            q5: document.getElementById("q5c").checked, 
    
            
            };
    
            const correctAnswers = Object.values(answers).filter(answer => answer).length;
            const totalQuestions = Object.keys(answers).length;
    
            const resultPercentage = (correctAnswers / totalQuestions) * 100;
    
            alert(`You answered ${correctAnswers} out of ${totalQuestions} questions correctly.\nYour result: ${resultPercentage.toFixed(2)}%`);
        }

     


