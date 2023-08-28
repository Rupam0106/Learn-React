import Header from "./components/Header/Header";
import "./App.css";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {

  let item=["Gujarat","Jammu","Kerala","UP"];
  const handleSelect = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <Header />
      <ListGroup
        items={item}
        heading={"React Developer"}
        onSelectItem={handleSelect}
      />
    </>
  );
}

export default App;
