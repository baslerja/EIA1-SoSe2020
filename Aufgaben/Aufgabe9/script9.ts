window.addEventListener('load', function () {
    let todolist: string[] = ["Get snacks for New Year's Eve", "Visit the family", "Complete this EIA prototype"];

    //To Do Liste erstellen
    function createList() {
        todo.innerHTML = "";
        for (var index = 0; index < todolist.length; index++) {
            todo.innerHTML += "<div>" + "<input type='checkbox'>" + todolist[index] + "<i class='far fa-trash-alt'></i>" + "</div>";
        }
        var total = document.querySelector("#counter");
        total.innerHTML = todolist.length;
    }

    var todo = document.querySelector(".addlist");
    createList();

    //Add new task
    var input = document.querySelector("#newtask");
    var addTask = document.querySelector("#addbutton");
    addTask.addEventListener('click', function () {
        todolist.push(input.value);
        createList();
        input.value = "";
    })

    //Delete
    var close = document.getElementsByClassName("far fa-trash-alt");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
})