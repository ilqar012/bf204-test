import "./App.css";

import Main from "./components/Main";

function App() {
  const name = [{ id: 1, name: "Ilqar" }];
  return (
    <>
      <Main name={name} />
    </>
  );
}

export default App;
