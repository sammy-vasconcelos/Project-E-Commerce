

let count = 1
document.getElementById("radio1").checked = true;
setInterval( function(){
    nextImage();
}, 5000)

function nextImage() {
    count++;
    if(count>4){
        count = 1
    }

    document.getElementById("radio"+count).checked = true;
}

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    })
