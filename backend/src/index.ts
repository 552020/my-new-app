import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/get-header", async (req, res) => {
  const { url } = req.body;
  console.log("url", url);

  try {
    const response = await axios.get(`https://${url}`);
    res.json({ headers: response.headers });
    console.log("response.headers", response.headers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch headers" });
  }
});

const server = app.listen(3001, () => console.log("🚀 Server ready at: http://localhost:3001"));
