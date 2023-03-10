import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useStore } from "effector-react";

import $store, { addtodo, setNewTodo } from "../store"

function TodoAdd() {
  const store = useStore($store)
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={store.newTodo}
        onChange={(evnt) => setNewTodo(evnt.target.value)}
      />
      <Button onClick={() => addtodo()}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
