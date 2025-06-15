function Heading(props) {
  return (
    <h1 className="text-5xl {props.Classname} text-center font-Kapakana font-bold  mb-[2rem]">
      {props.heading}
    </h1>
  );
}

function Heading2(props) {
  return (
    <h2 className="text-2xl text-center p-7 font-medium">{props.heading}</h2>
  );
}

export { Heading, Heading2 };
