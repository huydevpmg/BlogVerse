const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const { connectDB } = require("./db/mongo.js");
const { app, server } = require("./socket/socket.js");
const authRoutes = require("./routes/auth/auth.route.js");
const messageRoutes = require("./routes/messages/message.route.js");
dotenv.config();

const PORT = process.env.PORT;
app.use(express.json({ limit: '50mb' }));  // Giới hạn 50MB
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://192.168.0.4:5173"], // Nguồn gốc được phép
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,  })
);


app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../BlogVerse-FE/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../BlogVerse-FE/dist/index.html"));
  });
}


server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});
