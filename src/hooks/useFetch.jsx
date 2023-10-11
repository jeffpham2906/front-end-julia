import { useEffect, useState } from "react";
import { BASE_URL } from "../Constants/BASE_URL";
function useFetch(route) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const res = await fetch(`${BASE_URL}/${route}`);
          const data = await res.json();
          setData(data);
        } catch (err) {
          console.log(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    },
    [route],
  );
  return [isLoading, error, data];
}

export default useFetch;
