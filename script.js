
document.addEventListener('DOMContentLoaded', function () {
  
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const themeSwitch = document.getElementById('theme-switch');

   
    if (storedTheme === 'dark' || (!storedTheme && userPrefersDark)) {
        document.body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }

  
    themeSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
       
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    
    window.showDetails = function () {
        const modal = document.getElementById('modal');
        modal.style.display = 'block';
    };

    window.closeDetails = function () {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
    };

    
    window.showExperienceDetails = function (company, role, time, description) {
        const experienceModal = document.getElementById('experience-modal');
        const companyElement = document.getElementById('experience-company');
        const roleElement = document.getElementById('experience-role');
        const timeElement = document.getElementById('experience-time');
        const descriptionElement = document.getElementById('experience-description');

        companyElement.textContent = company;
        roleElement.textContent = `Role: ${role}`;
        timeElement.textContent = `Time: ${time}`;
        descriptionElement.textContent = description;

        experienceModal.style.display = 'block';
    };

    window.closeExperienceDetails = function () {
        const experienceModal = document.getElementById('experience-modal');
        experienceModal.style.display = 'none';
    };

 
   /**  window.submitForm = function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        
        console.log(`Received message from ${name} (${email}): ${message}`);

       
        document.getElementById('contact-form').reset();

        
        console.log("Received message");

        
    const canvasCommentElement = document.getElementById('canvas-comment');
    if (canvasCommentElement) {
        canvasCommentElement.textContent = "Received a message via the Contact-Me page.";
    }
    };

    window.formbutton=window.formbutton||function(){(window.formbutton.q=window.formbutton.q||[]).push(arguments)};
    formbutton("create", {
        action: "https://formspree.io/f/xoqozbya",
        title: "Contact Me",
        fields: [
            { type: "name", label: "Name:", required: true },
            { type: "email", label: "Email:", required: true },
            { type: "textarea", label: "Message:", required: true }
        ],
        styles: {
            title: {
                backgroundColor: "#4CAF50",
                color: "white"
            },
            button: {
                backgroundColor: "#4CAF50",
                color: "white"
            }
        }
    });**/
});
