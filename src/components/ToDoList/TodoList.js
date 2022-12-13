import {
  VStack,
  Text,
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import React from "react";

function TodoList({ todos, deleteTodo }) {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
        No Todos, yay!!
      </Badge>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderRadius={10}
      borderColor="gray.200"
      borderWidth="2px"
      width="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
      p="4"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.name}</Text>
          <Spacer />
          <IconButton
            onClick={() => {
              console.log(todo.id);
              deleteTodo(todo.id);
            }}
            isRound={true}
            icon={<FaTrash />}
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
