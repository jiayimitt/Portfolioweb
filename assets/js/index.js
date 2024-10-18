 'use strict';
 
 // Get the dark mode toggle icon
 const toggleIcon = document.querySelector('.dark-mode-toggle');
    
 // Add event listener to the icon
 toggleIcon.addEventListener('click', function() {
   // Toggle the 'dark-mode' class on the body
   document.body.classList.toggle('dark-mode');
   
   // Optionally change the icon (moon to sun and vice versa)
   if (document.body.classList.contains('dark-mode')) {
     toggleIcon.classList.remove('fa-moon');
     toggleIcon.classList.add('fa-sun');
   } else {
     toggleIcon.classList.remove('fa-sun');
     toggleIcon.classList.add('fa-moon');
   }
 });

//header links
document.querySelector('a[href="#about"]').addEventListener('click', function(e) {
  e.preventDefault(); 
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#blog"]').addEventListener('click', function(e) {
  e.preventDefault(); 
  document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
  e.preventDefault(); 
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

//Social links
 document.getElementById('linkedin-button').addEventListener('click', function() {
  window.open('https://www.linkedin.com', '_blank');
});

// Contact me
(function() {
  emailjs.init("hGY-eXfhF0TuCMnNi"); // use emailjs Public API

  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); 

      const serviceID = "service_ktjqdgc"; // emailjs Service ID 
      const templateID = "template_uw09g53"; // emailjs Template ID 

      emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
              alert('Email sent successfully!');
              this.reset(); 
          }, (err) => {
              alert('Failed to send email. Please try again later.');
              console.error(err);              
          });
  });
})();