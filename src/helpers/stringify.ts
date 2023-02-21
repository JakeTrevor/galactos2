const stringify = (name: string) => {
  console.log("name: ", name);
  return name.toLowerCase().replaceAll(" ", "-");
};

export default stringify;
