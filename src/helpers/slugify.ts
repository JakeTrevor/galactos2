const slugify = (name: string) => {
  console.log("name: ", name);
  return name.toLowerCase().replaceAll(" ", "-");
};

export default slugify;
