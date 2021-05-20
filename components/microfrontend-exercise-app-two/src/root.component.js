import React, {useEffect, useState} from "react";
import "./root.component.css";

export default function Root(props) {
  const [val, setVal] = useState(0);

  useEffect(() =>{
    window.addEventListener('onHello', () => {
      setVal(window.myapp.hello);
    });
  }, [])
  
  return (
  <div className="container1">
  <h1>Page 1 App</h1>
  <h2>{val}</h2>
  <input type="button" onClick={() => window.myapp.meet()} value="welcome"></input>
  </div>
  );
}
