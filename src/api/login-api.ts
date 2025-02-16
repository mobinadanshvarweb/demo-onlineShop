export const handleLogin = async (email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    return data;
  } catch {
    console.log("sth went wrong!");
  }
};

export const handleRegister = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();
    return data;
  } catch {
    console.log("sth went wrong!");
  }
};
