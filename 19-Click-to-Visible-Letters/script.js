const v = document.getElementById("v")
const i = document.getElementById("i")
const j = document.getElementById("j")
const a = document.getElementById("a")
const y = document.getElementById("y")
const vijay = document.getElementById("complete")

v.addEventListener("click",()=>{
    v.style.display = "none";
    i.style.display = "block";
});

i.addEventListener("click",()=>{
    i.style.display = "none";
    j.style.display = "block";
});

j.addEventListener("click",()=>{
    j.style.display = "none";
    a.style.display = "block";
});

a.addEventListener("click",()=>{
    a.style.display = "none";
    y.style.display = "block";
});

y.addEventListener("click",()=>{
    y.style.display = "none";
    vijay.style.display = "block";
});

vijay.addEventListener("click",()=>{
    vijay.style.display = "none";
    v.style.display = "block";
});


