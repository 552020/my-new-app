import { useState } from "react";

export default function Home({ initialHeader }) {
  const [url, setUrl] = useState("");
  const [header, setHeader] = useState(initialHeader || "");

  const getHeader = async () => {
    try {
      const response = await fetch("http://localhost:3001/get-header", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      console.log("response");
      console.log(response);

      if (response.ok) {
        const { headers } = await response.json();
        setHeader(JSON.stringify(headers, null, 2));
      } else {
        throw new Error("Failed to fetch header");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" />
      <button onClick={getHeader}>Get Header</button>
      <pre>{header}</pre>
    </div>
  );
}
