import { VStack, Text, HStack, IconButton, Spacer } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import React from "react";

function TodoList({ todo }) {
  return (
    <VStack
     divider={true}
      borderColor="gray.200"
      borderWidth="2px"
      width="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
      p="4"
    >
      {todo.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.name}</Text>
          <Spacer />
          <IconButton icon={<FaTrash />} />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
