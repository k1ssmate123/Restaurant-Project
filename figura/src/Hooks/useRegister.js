import { useState } from "react";

const useRegister = () => {
  const [error, setError] = useState(null);

  const register = async (email, name, password, passwordAgain) => {
    if (password != passwordAgain) {
      setError("A jelszavak nem egyeznek!");
      return;
    }

    try {
      const res = await fetch("https://localhost:7146/User/Register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        setError(err);
        return;
      }
      setError("Sikeres regisztráció!");
    } catch (err) {
      setError("Hiba történt: " + err);
    }
  };

  return { register, error };
};

export default useRegister;
