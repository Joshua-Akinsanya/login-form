// Alert when window too small

window.addEventListener("resize", () =>{
    if(window.innerHeight < 150 || window.innerWidth < 190) {
        alert('Increase your window size, bro !');
    }
});