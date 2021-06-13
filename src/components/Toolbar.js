import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";

const ColorContext = React.createContext("primary");

function App() {
  const [color, setColor] = useState({ color: "primary" });
  return (
    <div className="App">
      <ColorContext.Provider value={color}>
        <Toolbar />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setColor(
              color.color === "primary"
                ? { color: "secondary" }
                : { color: "primary" }
            );
          }}
        >
          Смена цвета
        </Button>
      </ColorContext.Provider>
    </div>
  );
}

const Toolbar = () => {
  return <ColorButton />;
};

class ColorButton extends React.Component {
  static contextType = ColorContext;
  render() {
    return (
      <Button variant="contained" color={this.context.color}>
        Кнопа
      </Button>
    );
  }
}

export default App;
