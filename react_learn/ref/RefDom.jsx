import { useRef } from "react";

const RefDom = () => {
  let h2ref = useRef(null); //h2ref is null is current key

  function changeContentStyle() {
    h2ref.current.innerText = "Chandrashekhar";
    h2ref.current.style.color = "blue";
  }

  return (
    <div style={{ padding: "50px" }}>
      <h2 ref={h2ref}>DOM Manipulation using useRef() hook</h2>
      <button onClick={changeContentStyle}>Change Content and Style</button>
    </div>
  );
};

export default RefDom;
