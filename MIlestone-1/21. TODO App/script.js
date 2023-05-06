        const enterTodo = document.getElementById('enterTodo');
        const addTodoButton = document.getElementById('addTodo');
        const todoListContainer = document.getElementById('todoListContainer');

        //  clear input
        function clearInput() {
                enterTodo.value = "";
            }

        // when button is clicked to add todo
        addTodoButton.addEventListener('click', (e) => {
            const enterTodoValue = enterTodo.value;
            console.log(enterTodoValue);
            const todoListItem = document.createElement('li');
            todoListItem.id = "todoListItem";
            todoListItem.innerHTML = "<span >&#129185; &nbsp &nbsp</span>" + enterTodoValue;
            todoListContainer.appendChild(todoListItem);
            todoListItem.style.listStyle = "none";
            todoListItem.style.border = "1px solid gray";
            todoListItem.style.borderRadius = "10px";
            todoListItem.style.padding = " 4px 10px";
            todoListItem.style.marginTop = "5px";
            // clear input 
          clearInput();
        });