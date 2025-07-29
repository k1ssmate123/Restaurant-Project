import { useState } from "react";

const useLogin = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState("");

  const login = async (email, password) => {
    try {
      const res = await fetch("https://localhost:7146/User/Login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      });

      if (!res.ok) {
        setError(await res.text());
        return { success: false };
      }

      const result = await res.json();
      setData(() => {
        return result;
      });
      setError(() => {
        return "Sikeres bejelentkezés!";
      });
      return { success: true };
    } catch (error) {
      setError("Hiba történt: " + error);
      return { success: false };
    }
  };
  return { login, error, data };
};

export default useLogin;
