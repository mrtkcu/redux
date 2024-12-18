import { useDispatch } from "react-redux";
import { useEffect } from "react";

import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import List from "./components/List";
import { setList } from "./store/actions/listActions";
import { cars } from "./data";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setList(cars));
  }, []);
  return (
    <>
      <Header />
      <div className="content">
        <List />
        <Card />
      </div>
    </>
  );
}

export default App;
