// cutoff-backend/routes/options.js
const mysql = require("mysql2/promise");
const pool = require("../config/db");
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/", async (req, res) => {
  const { stream } = req.query;
  let tableName = "";

  console.log("Stream:", stream);

  if (stream === "BA") {
    tableName = "ba_cutoffs";
  } else {
    return res.status(400).json({ error: "Invalid stream" });
  }

  const clauses = [];
  const params = [];

  if (stream && stream !== "") {
    clauses.push("course = ?");
    params.push(stream);
  }

  const where = clauses.length > 0 ? "WHERE " + clauses.join(" AND ") : "";

  try {
    const [courseRows] = await pool.query(
      `SELECT DISTINCT course FROM ${tableName}`,
      params
    );
    const [cityRows] = await pool.query(
      `SELECT DISTINCT city FROM ${tableName}`,
      params
    );

    res.json({
      courses: courseRows.map((r) => r.course),
      cities: cityRows.map((r) => r.city),
    });
  } catch (err) {
    console.error("Error fetching dropdown options:", err);
    res.status(500).json({ error: "Failed to fetch options" });
  }
});

module.exports = router;
