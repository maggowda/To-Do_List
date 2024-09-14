const inputBox = document.getElementById("input");
const listContainer = document.getElementById("list-Container");

//To add a task to the list
function addTask(){
    if(inputBox.value ===''){
        alert('Please enter a task');
    }
    else{
        var li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00D7';
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

//to add a task when enter key is pressed
inputBox.addEventListener('keyup',function(ev){
    if(ev.keyCode === 13){
        addTask();
    }
});

//to toggle the task as done
listContainer.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
        saveData();
    }
    else if(ev.target.tagName === 'SPAN'){
        ev.target.parentElement.remove();
        saveData();
    }
},false);

//to save data to local storage
function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

//to load data from local storage
function loadData(){
    listContainer.innerHTML = localStorage.getItem('data');
}
loadData();