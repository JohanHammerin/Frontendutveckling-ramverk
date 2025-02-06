import { useEffect, useState } from "react";
import "./App.css";
import { User, Student } from "./types/User";

function App() {
  //interfaces
  //const [getter, setter] = useState<datatype>(initialValue)
  // command + . - quick fix
  const [score, setScore] = useState<number>(0); // useState Hook
  const [username, setUsername] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setuser] = useState<User>({ username: "", password: "" });
  const [student, setStudent] = useState<Student>({
    name: "Johan",
    age: 21,
    grade: "A",
  });

  //const [updateCount, setUpdateCount] = useState<number>(0);

  // The WRONG way to console.log
  function addToScore() {
    //score = 0
    setScore(score + 1);
    //console.log(score); //<----???
  }

  // method: prev
  // TODO - why isnt console.log working?
  function addToScoreWithPreviousValue() {
    setScore((prev) => prev + 1);
    //setUpdateCount((prev) => prev + 1);
    //console.log(score); // PROBLEM!!!
  }

  useEffect(() => {
    console.log(score);
  }, [score]);
  // Kan ha updateScore!!!
  return (
    <>
      <div>
        <p>What is 2 + 2 = {2 + 2}</p>
        {/* Score */}
        <p>Score: {score}</p>
        <button onClick={addToScoreWithPreviousValue}>Score + 1</button>

        <div>
          is {score} bigger than 4? {score > 4 ? <p>TRUE</p> : <p>FALSE</p>}
        </div>

        {/* XML comment */}
        {/* Right of ? is true, else = :  */}
        <div>Is 2 bigger than 4? {2 > 4 ? <p>TRUE</p> : <p>FALSE</p>}</div>

        <div>
          <div>Is 2 less than 4 {2 < 4 ? <p>FALSE</p> : <p>TRUE</p>}</div>
          <div>
            Is 2 less than 4 Big text {2 < 4 ? <h1>FALSE</h1> : <h1>TRUE</h1>}
          </div>
          <div>
            2+2 = 4 || 2+2 = 99{" "}
            {2 + 2 == 4 || 2 + 2 == 99 ? <p>TRUE</p> : <p>FALSE</p>}
          </div>
          <div>
            2+2 = 4 & 2+4 = 6{" "}
            {2 + 2 == 4 && 2 + 4 == 6 ? <p>TRUE</p> : <p>FALSE</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
