$(document).ready(function () {
	//fire functions that do not have buttons	
	mapEnter();
	taskCounter();
	handleTodoCompletion();
	handleRemoveTask();
});


//listens for keypress nr 13, which is ascii for enter
function mapEnter() {
	$("#inputtask").on("keypress", function (e) {
		if (e.which === 13) {
			addTask();
		}
	})

}

function taskCounter() {
	var taskNo = $(".item").length;
	$("#tasknumber").text(taskNo);
}

function addTask() {

	//a variable to get what's being inputted 
	var task = $('#inputtask').val();

	//to avoid empty todo's
	if (task != "") {

		//add an li element with checkbox to the list, with the task from input as text
		$("#tabela").append(todo(task));
	}

	//clears the input
	$("#inputtask").val("");
	taskCounter();
}

function todo(task){
	var todoDOM = $('<li class = "item"><input type="checkbox"><span class="todo-content"></span><span class = "remove"> X </span></li>');
	todoDOM.find('.todo-content').text(task);
	return todoDOM;
}

function handleTodoCompletion() {
	$("#tabela").on("click", "input:checkbox", function () {

		var $this = $(this);
		if (this.checked) {
			//input is a child of li, so this works!
			$this.parent().removeClass();
			$this.parent().addClass('done');
		} else {
			$this.parent().removeClass('done');
			$this.parent().addClass('item');
		}

		taskCounter();
	});
}

function handleRemoveTask() {
	$("#tabela").on("click", ".remove", function () {
		var $this = $(this);
		$this.parent().remove();
		taskCounter();
	});
}



function filterTodo() {

	var x = $("li").hasClass("item");

	if (x) {

		$("li").hide();
		$("li.item").show();

	} else {
		alert("you have no tasks to do!");
	}
}

function filterDone() {

	var x = $("li").hasClass("done");
	if (x) {

		$("li").hide();
		$("li.done").show();
	} else {
		alert("you have no finished tasks")
	}
}


function filterAll() {
	$("li").show();
}

