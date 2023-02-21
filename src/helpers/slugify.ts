const slugify = (name: string) => {
  return name.toLowerCase().replaceAll(" ", "-");
};

export default slugify;
