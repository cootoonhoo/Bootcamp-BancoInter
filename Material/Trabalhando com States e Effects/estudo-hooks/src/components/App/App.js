import Counter from "../Counter/Counter";
import IfoodCounter from "../IfoodCounter/IfoodCounter";
import SmartCounter from "../SmartCounter/SmartCounter";

function App() {
  return (
    <>
    <h1>Hello World</h1>
    <h2>Contador inteligente</h2>
    <SmartCounter />
    <h2>Contador normal</h2>
    <Counter></Counter>
    <IfoodCounter/>
    </>
  )
}

export default App;
