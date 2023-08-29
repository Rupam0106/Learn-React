import Header from "./components/Header/Header";
import "./App.css";
// import ListGroup from "./components/ListGroup/ListGroup";
// import Testcon from "./components/React-Icons/Testcon";
// import Alert from "./components/Alert/Alert";
import Expandable from "./components/Expandable/Expandable";

function App() {
  // let item = ["Gujarat", "Jammu", "Kerala", "UP"];
  // const handleSelect = (item: string) => {
  //   console.log(item);
  // };
  return (
    <>
      <Header />
      {/* <Testcon />
      <Alert onClose={close}>Hi</Alert>
      <ListGroup
        items={item}
        heading={"React Developer"}
        onSelectItem={handleSelect}
      /> */}
      <Expandable maxChars={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quibusdam
        officiis quisquam maxime, culpa, praesentium libero facere, veritatis
        ipsa rerum similique aspernatur. Voluptatibus, deserunt sit molestias
        dolore asperiores iusto? Quas nihil dolores ea. Voluptatibus explicabo
        blanditiis alias consectetur aperiam nisi ipsa! Cum consectetur
        voluptatibus nihil dignissimos nemo. Eveniet ea architecto expedita
        deleniti, quia alias quam minus quos autem. Accusamus facilis fugit,
        illum deleniti quia nemo illo temporibus quas tenetur suscipit inventore
        culpa dolor libero quidem ratione quos non reprehenderit earum nulla
        adipisci aliquam. Alias ut minima quae hic omnis neque rerum in qui
        aperiam nobis veniam, facere blanditiis voluptates ipsam, dolore
        laboriosam fugit tenetur. Odio minus fuga harum, tempora soluta quam
        magnam quas recusandae beatae itaque dolorum doloribus iste?
        Necessitatibus veniam ad repudiandae fugit exercitationem?
      </Expandable>
    </>
  );
}

export default App;
