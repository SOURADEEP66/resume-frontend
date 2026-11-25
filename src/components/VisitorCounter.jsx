import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    if (!apiUrl) return;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((err) => console.error("Counter error:", err));
  }, []);

  return (
    <p className="visitor-counter">
      Visitors: <strong>{count ?? "..."}</strong>
    </p>
  );
}