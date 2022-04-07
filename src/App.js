import "./styles.css";
import Child from "./Child";
import team from "./team";

// Make list w/ reusable component
// Certs get same color ([A, B, C, etc])

// Frank (Director) [A, B]
// -- Andrew (Lead Engineer)
// ---- Sarah (Developer) [A]
// ---- John (Developer)
// -- Peter (Lead Engineer) [A, C]
// ---- Rachel (Developer)
// ---- Noelle (Developer)

export default function App() {
  return (
    <div className="App" style={{ textAlign: "left" }}>
      <h1>The Challenge:</h1>
      {team.map((employee) => {
        return <Child key={employee.name} employee={employee} />;
      })}
    </div>
  );
}
