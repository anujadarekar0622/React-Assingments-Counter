import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import CharacterCounter from "./components/CharacterCounter";
import ProductQuantityy from "./components/ProductQuantity";
import ColorPicker from "./components/ColorPickerr";
import UserProfileCard from "./components/UserProfileCardd";
import FeedbackCollector from "./components/Feedback Collectorr";

function App() {
  const [openComponent, setOpenComponent] = useState(null);

  return (
    <>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", padding: "40px" }}>
        <button onClick={() => setOpenComponent("counter")}>Character Counter</button>
        <button onClick={() => setOpenComponent("product")}>Product Quantity</button>
        <button onClick={() => setOpenComponent("color")}>Color Picker</button>
        <button onClick={() => setOpenComponent("profile")}>User Profile Card</button>
        <button onClick={() => setOpenComponent("feedback")}>Feedback Collector</button>
        <button onClick={() => setOpenComponent(null)} style={{ background: "#dc2626" }}>Close</button>
      </div>


      {openComponent === "counter" && <CharacterCounter />}
      {openComponent === "product" && <ProductQuantityy />}
      {openComponent === "color" && <ColorPicker />}
      {openComponent === "profile" && <UserProfileCard />}
      {openComponent === "feedback" && <FeedbackCollector />}
    </>
  );
}

export default App;