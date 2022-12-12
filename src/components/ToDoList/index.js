import React from "react";
import { Heading, IconButton, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import AddTodo from './AddTodo'
import TodoList from './TodoList'

function ToDoList() {
  const initialTodo = [
    {
      id: "1",
      name: "reactjs",
    },
    {
      id: "2",
      name: "Nodejs",
    },
  ];
  return (
    <VStack m={6}>
      <IconButton isRound={true} icon={<FaSun size={20} />} />
      <Heading>Todo Application</Heading>
      <TodoList todo={initialTodo} />
      <AddTodo />
    </VStack>
  );
}

export default ToDoList;
