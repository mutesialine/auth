export const useLogout = () => {
  localStorage.removeItem("token");
};
