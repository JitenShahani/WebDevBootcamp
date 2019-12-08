let todo = ['Buy new tuttle'];
let input = prompt('What would you like to do?');

while (input !== "quit") {
	if (input === "list") {
		listTodo();
	} else if (input === 'new') {
		addTodo();		
	} else if (input === 'delete') {
		deleteTodo();
	}
	input = prompt('What would you like to do?');
}
console.log('OK! YOU QUIT THE APP');

function listTodo() {
	console.clear();
	console.log('**********');
	todo.forEach(function(todo, i) {
		console.log(i + ': ' + todo);
	})
	console.log('**********');
}

function addTodo() {
	let newTodo = prompt('Enter new todo');
	todo.push(newTodo);
	console.log('Todo addede');
}

function deleteTodo() {
	let index = prompt('Enter index of todo to delete')
	todo.splice(index, 1);
	console.log('Deleted todo');
}