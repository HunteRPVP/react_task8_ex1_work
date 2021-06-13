import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserForm name="" age={0} />
    </div>
  );
}

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.nameField = React.createRef();
    this.ageField = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var name = this.nameField.current.state.name;
    var age = this.ageField.current.state.age;
    if (
      this.nameField.current.state.nameValid &&
      this.ageField.current.state.ageValid
    ) {
      alert("Имя: " + name + " Возраст: " + age);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Name name="" ref={this.nameField} />
        <Age age={5} ref={this.ageField} />
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

class Name extends React.Component {
  constructor(props) {
    super(props);
    const name = props.name;
    const nameIsValid = this.validateName(name);
    this.state = {
      name,
      nameValid: nameIsValid,
    };
  }

  validateName(name) {
    return name.length > 2;
  }

  onNameChange = (e) => {
    var val = e.target.value;
    console.log(val);
    var valid = this.validateName(val);
    this.setState({ name: val, nameValid: valid });
  };

  render() {
    const nameColor = this.state.nameValid ? "green" : "red";
    return (
      <p>
        <label>Имя:</label>
        <br />
        <input
          type="text"
          value={this.state.name}
          onChange={this.onNameChange}
          style={{ borderColor: nameColor }}
        />
      </p>
    );
  }
}

class Age extends React.Component {
  constructor(props) {
    super(props);
    const age = props.age;
    const ageIsValid = this.validateAge(age);
    this.state = {
      age,
      ageValid: ageIsValid,
    };
  }

  validateAge(age) {
    return age >= 0;
  }

  onAgeChange = (e) => {
    var val = e.target.value;
    var valid = this.validateAge(val);
    this.setState({ age: val, ageValid: valid });
  };

  render() {
    const ageColor = this.state.ageValid ? "green" : "red";
    return (
      <p>
        <label>Возраст:</label>
        <br />
        <input
          type="number"
          value={this.state.age}
          onChange={this.onAgeChange}
          style={{ borderColor: ageColor }}
        />
      </p>
    );
  }
}

export default App;
