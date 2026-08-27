import { useState } from "react";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};
const Content = ({ parts }) => {
  return (
    <>
      {parts.map(({ name, exercises }) => {
        return <Part key={name} name={name} exercises={exercises} />;
      })}
    </>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};
const Total = ({ parts }) => {
  const [exerciseTotal, setExerciseTotal] = useState(
    parts.reduce((acc, part) => acc + part.exercises, 0),
  );
  const handleClick = () => {
    setExerciseTotal(exerciseTotal + 1);
  };
  return (
    <>
      <p>Number of exercises {exerciseTotal}</p>
      <button onClick={handleClick}>Increase Exercise Total</button>
    </>
  );
};

// const Hello = (props) => {
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear();
//     return yearNow - props.age;
//   };

//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };
export default App;
