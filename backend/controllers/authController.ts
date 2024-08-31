export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, userName, password } = req.body;
  } catch (error) {
    console.log(error);
  }
};
export const login = () => {
  console.log("login");
};
export const logout = () => {
  console.log("logout");
};
