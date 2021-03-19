import express from "express";
import routes from "./routes/routes";

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,POST');
  res.append('Content-Type', 'application/json');
  next();
});

app.use(express.json());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
