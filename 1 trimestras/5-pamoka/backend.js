const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      title: "Smartphone",
      price: 100,
      category: "electronics",
      image:
        "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?cs=srgb&dl=pexels-fotios-photos-1092644.jpg&fm=jpg",
    },
  ];
  res.json({ data: products });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
