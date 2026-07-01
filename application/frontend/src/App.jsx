import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://13.60.169.204:3000/health")
      .then((response) => {
        setStatus(response.data.message);
      })
      .catch(() => {
        setStatus("Backend is not reachable");
      });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>ShopSphere</h1>

      <h2>Enterprise DevOps Project</h2>

      <hr />

      <h3>Backend Status</h3>

      <p>{status}</p>
    </div>
  );
}

export default App;
