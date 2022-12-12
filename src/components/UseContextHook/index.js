import ComponentA from "./ComponentA";
import { useAppContext } from "../../context/CounterContext";

function UseContextHook() {
    const {counter, ChangeCounter} = useAppContext()
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={ChangeCounter}>is Click</button>
      <ComponentA x={counter} />
    </div>
  );
}

export default UseContextHook;
