import { useState } from "react";

const useLogin = () => {
  const [error, setError] = useState("");

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
      console.log(result);

      setError(() => {
        return "Sikeres bejelentkezés!";
      });
      return { success: true, data: result };
    } catch (error) {
      setError("Hiba történt: " + error);
      return { success: false };
    }
  };
  return { login, error };
};

export default useLogin;
