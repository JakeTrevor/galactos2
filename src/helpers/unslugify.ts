const unslugify = (slug: string) => {
  return slug.replaceAll("-", " ");
};

export default unslugify;
