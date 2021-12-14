import Box from "./component/Box";
import "./Box.css";

export default function App() {
  const boxArray = [
    {
      id: 0,
      size: "100px",
      color : "red"
    },
    {
      id: 1,
      size: "75px",
      color : "green"
    },
    {
      id: 2,
      size: "250px",
      color : 'blue'
    },
    {
      id: 3,
      size: "150px",
      color :"orange"
    }
  ];
  return (
    <div>
      {boxArray.map((box) => {
        return <Box key={box.id} size={box.size} color={box.color} />;
      })}
    </div>
  );
}
