Array.from(document.getElementsByTagName('input')).forEach((e , i)=>{
    e.addEventListener('keyup', (el)=>{
        if (e.value.length > 0) {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(180deg)";
        } else {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(0deg)";
        }
    })
})

let menu_btn = document.getElementsByClassName('bi-three-dots')[0];
let menu_bx = document.getElementById('menu_bx');


menu_btn.addEventListener('click', ()=>{
    menu_bx.classList.toggle('ul_active');
})



// alpha code 

function myFunction() {
    var inputVal = document.getElementById("myInput").value;
    console.log("The input value is: " + inputVal);
    localStorage.setItem('inputValue', inputVal);
    window.location.href = "explore.html";
}
