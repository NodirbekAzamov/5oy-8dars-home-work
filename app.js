// 1chi masala
let text = document.getElementById('text');
let lists = document.getElementById('lists');

const data = () => {
    localStorage.setItem("data", lists.innerHTML)
}

const showTask = () => {
    lists.innerHTML = localStorage.getItem("data");
}

const addList = () => {
    console.log(text.value);
    let button = document.createElement('button');
    let li = document.createElement('li');
    button.innerHTML = "x";
    li.innerHTML = text.value
    lists.appendChild(li);
    li.appendChild(button)
    button.classList.add("delete");
    text.value = "";
    data();
}

lists.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove()
    } else if (e.target.tagName === "Li") {
        e.target.classList.toggle("check");
    }
})

showTask();




// 2chi masala
let textarea = document.getElementById('textarea')
let compute = document.getElementById('compute');
let textt = document.getElementById('textt');

compute.addEventListener("click", () => {
    let a = textarea.value;

    let b = a.split(' ').filter(el => el).length
    textt.innerText = b;

})


let delete1 = document.getElementById('delete')

delete1.addEventListener("click", () => {
    textarea.value = '';
})


// 3chi masala
let textarea1 = document.getElementById('textarea1');
let inp = document.createElement('inp');

const btn = () => {
    let textarea1_value = textarea1.value;
    let d = textarea1_value.split(' ');

    if (d.includes(inp)) {
        alert("soz bor")
    } else  {
        alert("soz yo'q")
    }
}




// 4chi masala