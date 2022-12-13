import React, { useState, useEffect } from "react";
import { Heading, IconButton, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { getTodoFromLocalStorage } from "../../utils/LocalStorage";

function ToDoList() {
  
  const [todos, setTodos] = useState(getTodoFromLocalStorage);
  

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <VStack m={6}>
      <IconButton
        isRound={true}
        alignSelf="flex-end"
        icon={<FaSun size={20} />}
      />
      <Heading
        p="4"
        size="2xl"
        fontWeight="extrabold"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default ToDoList;
