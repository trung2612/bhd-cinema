export const isLogin = () => {
  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  return storedUserLoggedInInformation === "1";
};
