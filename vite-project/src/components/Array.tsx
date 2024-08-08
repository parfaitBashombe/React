const myArray = ["apple", "banana", "orange", "string", "number"];

const Array = () => {
  return myArray.map((item) => <p>{item}</p>);
};

export default Array;
