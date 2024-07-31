let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
     


})

sr.reveal('.text',{delay:200, origin:'top'})
sr.reveal('.form-container form',{delay:800, origin:'left'})
sr.reveal('.heading',{delay:300, origin:'top'})
sr.reveal('.ride-container .box',{delay:300, origin:'top'})
sr.reveal('.services-container .box',{delay:200, origin:'top'})
sr.reveal('.about-container ',{delay:300, origin:'top'})
sr.reveal('.reviews-container',{delay:300, origin:'top'})
sr.reveal('.newsletter .box',{delay:300, origin:'bottom'})
sr.reveal('.signup-container .box-signup',{delay:300, origin:'bottom'})





document.getElementById('signInForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('signInData', JSON.stringify({ username: username, password: password }));

    window.location.href = 'display.html?type=signin';
});
// car loader
// function showLoading() {
    
//     document.getElementById('loading').style.display = 'flex';

   
//     setTimeout(function() {
//         window.location.href = 'signup.html'; 
//     }, 8000); 
// }

function showLoading(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Display the loading overlay
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'flex';

    // Use a longer timeout to simulate loading delay
    setTimeout(function() {
        window.location.href = event.target.href; // Redirect to the href of the clicked link
    }, 3000); // 3000ms = 3 seconds
}

// Function to hide the loading animation
function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

// Event listener for navigating away from the page
window.addEventListener('beforeunload', hideLoading);

