import app from "./server"
import { PORT } from "./config/app.config";


app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT} ...`);
});