
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); 
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth' 
            });
        }
    });
});

const sidebar = document.getElementById("sidebar");
const toggleButton = document.getElementById("sidebar-toggle");


toggleButton.addEventListener("click", () => {
    
    sidebar.classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", function () {
    const options = {
        strings: ["Привіт, я фронтенд-розробник.", "Я створюю стильні та зручні сайти.", "Давайте розпочнем!"],
        typeSpeed: 50,        
        backSpeed: 25,       
        loop: false,          
        showCursor: false,    
        cursorChar: '|',      
    };

    const typed = new Typed("#typing-text", options);
});



