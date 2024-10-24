const express = require("express");
const pool = require("../config/dbConn");
const router = express.Router();

router.post("/logout", async (req, res, next) => {
  const connection = await pool.getConnection();
  try {
    const refreshToken = req.cookies.refreshToken;

    // Delete refresh token from the database
    const [
      results,
    ] = await connection.execute("DELETE FROM refreshtokens WHERE token = ?", [
      refreshToken,
    ]);

    // Clear the refresh token from the cookies first
    res.clearCookie("refreshToken", {
      httpOnly: true,
      sameSite: "Strict",
      secure: true, // Use secure only in production with HTTPS
    });
    res.clearCookie("accessToken", {
      httpOnly: true,
      sameSite: "Strict",
      secure: true, // Use secure only in production with HTTPS
    });

    if (results.affectedRows > 0) {
      res.status(200).json({
        mes: "Logout successfully",
      });
    } else {
      res.status(400).json({
        mes: "Logout failure",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mes: "Internal server error",
    });
  } finally {
    if (connection) connection.release(); // Release MySQL connection back to the pool
  }
});

module.exports = router;
