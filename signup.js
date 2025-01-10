function next(){
    let contain = document.getElementById('contain');
    let vec = document.getElementById('vec');
    let right = document.getElementById('right');
    let lefth = document.getElementById('left-text');
    let leftp = document.getElementById('left-p');
    let left = document.getElementById('left');
    let tree = document.getElementById('tree')
    let vector = document.getElementById('vector');
    let load = document.getElementById('load');
    let tree3 = document.getElementById('tree3');
    let button =document.getElementById('correct');

setTimeout(() =>{
    window.location.href="http://127.0.0.1:5500/MTBWA/login.html";
},2000);
    
    tree3.style.display = "none"
    contain.style.width = "100vw"
    contain.style.height = "100vh"
    contain.style.borderRadius = "0"
    right.style.display = "none";
    lefth.style.display = "none";
    leftp.style.display = "none";
    left.style.border = "none"

    vec.style.width = "1500px"
    vec.style.marginTop = "180px"
    tree.style.display = "inline-block"
    tree.style.marginTop = "7px"
    vector.style.marginLeft = "1200px"
    load.style.display = "inline-block"
    load.style.marginLeft = "575px"
    load.style.marginTop = "30px"


    
}
