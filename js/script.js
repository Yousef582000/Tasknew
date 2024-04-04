let btn=document.getElementById("menu-btn")
let list=document.querySelector(".navbar")

btn.addEventListener("click",()=>{
    list.classList.toggle("active")
})


window.addEventListener('load', function() {
    // Check if content has been loaded before
    const contentLoaded = sessionStorage.getItem('contentLoaded');
    
    if (!contentLoaded) {
      // Show loader immediately on page load
      document.querySelector('.loader-wrapper').style.display = 'flex';
    }
    
    // Simulate loading time
    setTimeout(function() {
      // Hide loader
      document.querySelector('.loader-wrapper').style.display = 'none';
      // Show content
      document.querySelector('.content').classList.remove('hidden');
      
      // Set flag to indicate content has been loaded
      sessionStorage.setItem('contentLoaded', true);
    }, 2000); // Adjust the time according to your preference
  });
  