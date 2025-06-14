const express = require("express");
const cors = require("cors");
const optionsRoutes = require("./routes/options"); // Make sure the path is correct
const router = require("./routes/options");

const app = express();
const PORT = 9001;

app.use(cors());
app.use(express.json());

// Mount the route correctly
app.use("/api/options", optionsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
