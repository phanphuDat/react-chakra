import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { nanoid } from "nanoid";

function AddTodo({ addTodo }) {
  const [content, setContent] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      toast({
        title: "No Todo.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      name: content,
    };

    addTodo(todo);
    setContent('')
  };
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Enter your todo..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit">Add Todo</Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
