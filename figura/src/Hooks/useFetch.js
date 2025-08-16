import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [error, setError] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!url) {
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Http error" + res.status);
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((e) => {
        if (e.name !== "AbortError") {
          setError(e.message);
        }
      })
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
