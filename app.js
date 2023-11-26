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
let inp = document.getElementById('input');

const btn = () => {
    let textarea1_value = textarea1.value;
    let d = textarea1_value.split(' ');
    let input = inp.value;

    if (d.includes(input)) {
        alert("soz bor")
    } else {
        alert("soz yo'q")
    }
    console.log(input);
    console.log(d);
}




// 4chi masala
function showFileSize() {
    let file = document.getElementById("file").files[0];
    if (file) {
        let item = Math.floor(file.size / 1024)
        alert(item + " KB");
    } else {
        alert("select a file... duh");
    }
}











