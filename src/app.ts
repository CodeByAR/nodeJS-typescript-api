import express from "express";
import routes from "./routes/routes";

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,POST');
  res.append('Content-Type', 'application/json');
  res.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  next();
});

app.use(express.json());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
