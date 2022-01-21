import instance from "./instance";

export const getAll = () => {
  const url = "/news";
  return instance.get(url);
};
