import axios from "axios";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/auth/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const register = async ({
  username,
  email,
  password,
  number,
}: {
  username: string;
  email: string;
  password: string;
  number: string;
}) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/auth/sign-up`,
      { username, email, password, number }
    );
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const logout = async () => {
  //   clear the local storage

  localStorage.removeItem("user");
};
