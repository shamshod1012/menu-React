import "./App.css";
import items from "./data/data.js";
import { useState } from "react";
import Menu from "./components/Menu.jsx";

let allCategory = items.map((item) => item.category);
allCategory = ["all", ...new Set(allCategory)];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setcategories] = useState(allCategory);

  function filter(category) {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const sort = items.filter((item) => item.category === category);
    setMenuItems(sort);
  }

  return (
    <div className="App">
      <div className="big_title">
        <p> our menu </p>
        <div> </div>

        <header className="btn_container">
          {categories.map((item, index) => {
            return (
              <button
                onClick={() => {
                  filter(item);
                }}
              >
                {" "}
                {item}{" "}
              </button>
            );
          })}
        </header>
      </div>
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
