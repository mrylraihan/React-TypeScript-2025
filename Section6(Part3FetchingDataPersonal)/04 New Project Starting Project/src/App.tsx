import { useEffect } from "react";
import { get } from "./util/http";

function App() {
  useEffect(()=>{
    get()
    .then(console.log)
  },[])
  return <h1>Data Fetching!</h1>;
}

export default App;
