import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [error, setError] = useState("");
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const resultJson = await res.json();
        setData(resultJson);
        setError("");
      } catch (exception) {
        setError(exception.message || "Something went wrong");
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, error };
};

export default useFetch;
