import Card from "./Card/Card";

function App() {
  const data = [
    {
      id: 0,
      url: "https://picsum.photos/200/300",
      title: "random pic",
      description: "I dont know what I will get "
    },
    {
      id: 1,
      url: "https://picsum.photos/200/301",
      title: "random pic1",
      description: "I dont know what I will get1 "
    },
    {
      id: 2,
      url: "https://picsum.photos/200/302",
      title: "random pic2",
      description: "I dont know what I will get2 "
    }
  ];

  return (
    <div className="App">
      {data.map((card) => { //עבור כל איבר בדאטא יחזיר את הכרטיס ששולחים לו את הנתונים הרלוונטים
        return (
          <Card
            key={card.id}//צריך לשלוח גם KEY 
            url={card.url}
            title={card.title}
            description={card.description}
          />
        );
      })}
    </div>
  );
}

export default App;