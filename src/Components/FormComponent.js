import { useState } from "react";

const FormComponent = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (name !== "" && age !== "") {
      props.onAdd(name, age);
      setName("");
      setAge("");
    } else {
      alert("empty form submission!");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <p>Name:</p>
      <input type="text" onChange={changeNameHandler} value={name} />
      <p>Age:</p>
      <input type="text" onChange={changeAgeHandler} value={age} />
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};
export default FormComponent;
