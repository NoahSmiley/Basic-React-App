const ListComponent = (props) => {
  const listComponent = props.listItems.map((item) => {
    return (
      <div>
        <h1>{item.name}</h1>
        <p>{item.age}</p>
      </div>
    );
  });

  return <div>{listComponent}</div>;
};
export default ListComponent;
