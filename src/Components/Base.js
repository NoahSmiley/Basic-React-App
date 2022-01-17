import { useState, useEffect } from "react";
import FormComponent from "./FormComponent";
import ListComponent from "./ListComponent";
const Base = () => {

  const [list, setList] = useState([]);

  const addItemHandler = (name, age) => {
    setList((prevList) => {
      return [...prevList, { name: name, age: age }];
    });

    postData({ name: name, age: age });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 5000);
    return () => clearTimeout(timer)
  }, [list]);

  const fetchData = async () => {
    const response = await fetch(
      "https://reacthttp-3326c-default-rtdb.firebaseio.com/posts.json"
    );
    const data = await response.json();

    let dataManipulation = [];

    for (const key in data) {
      dataManipulation.push({
        id: key,
        name: data[key].name,
        age: data[key].age,
      });
    }
    setList(dataManipulation);
  };

  const postData = async (item) => {
    const response = await fetch(
      "https://reacthttp-3326c-default-rtdb.firebaseio.com/posts.json",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
  };

  return (
    <div>
      <FormComponent onAdd={addItemHandler} />
      <button onClick={fetchData}>Fetch</button>
      <ListComponent listItems={list} />
    </div>
  );
};
export default Base;
