import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const API_KEY = "3Jd_5jGr_KNpNi3Krvk_7uAjvNgs7XNnhG7LrMrKeou2";
const MODEL_URL = "https://au-syd.ml.cloud.ibm.com/ml/v4/deployments/fc786c07-4022-4e1a-9fad-c900a7bcee06/predictions?version=2021-05-01"; // public endpoint

// Get IBM IAM token
async function getToken() {
  const res = await fetch("https://iam.cloud.ibm.com/identity/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${API_KEY}`,
  });
  const data = await res.json();
  return data.access_token;
}

// Endpoint for frontend
app.post("/predict", async (req, res) => {
  try {
    console.log("🔑 Generating IAM token...");
    const token = await getToken();
    console.log("✅ Token received");

    console.log("📡 Sending to IBM endpoint:", MODEL_URL);
    const response = await fetch(MODEL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(req.body),
    });

    const text = await response.text(); // log raw response
    console.log("📨 Raw IBM Response:", text);

    const data = JSON.parse(text);
    res.json(data);
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: err.message });
  }
});


app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
