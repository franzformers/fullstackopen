import React from "react";

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return course.parts.map((part) => (
    <Part part={part.name} exercises={part.exercises} />
  ));
};

export default Content;
