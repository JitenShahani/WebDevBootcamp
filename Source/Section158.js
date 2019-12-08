let todo = ['Buy new tuttle'];

let input = prompt('What would you like to do?');

while (input !== "quit") {
	if (input === "list") {
		console.log(todo);
	} else if (input === "new") {
		let newTodo = prompt('Enter new todo');
		todo.push(newTodo);
	}

	input = prompt('What would you like to do?');
}

console.log('OK! YOU QUIT THE APP');