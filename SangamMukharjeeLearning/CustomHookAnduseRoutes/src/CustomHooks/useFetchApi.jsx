import { useState, useEffect } from 'react';

export default function useApiFetch(url, options = {}) {
  const [data, setData] = useState(null);  // Use null to distinguish between loading and empty data
  const [loading, setLoading] = useState(true);  // Add a loading state
  const [error, setError] = useState(null);  // Track error state

  async function fetchData() {
    try {
      const res = await fetch(url, { ...options });

      if (!res.ok) throw new Error(res.statusText);

      const resJson = await res.json();
      setData(resJson);  // Always update the data state regardless of content
      setLoading(false);  // Loading is finished

    } catch (error) {
      setError(error.message);  // Set the error message
      setLoading(false);  // End loading state
      console.error(`useApiFetch - Error: ${error.message}`);
    }
  }

  useEffect(() => {
    setLoading(true);  // Set loading before fetching data
    fetchData();
  }, [url]);

  return { data, loading, error };  // Return data, loading, and error
}