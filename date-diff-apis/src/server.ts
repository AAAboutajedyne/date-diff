import express from 'express'
import morgan from 'morgan'
import cors from 'cors'


const app = express()
//-- install midllewares --------------
app.use(cors())
app.use(morgan("dev"))
app.use(express.json()) 

app.get("/current-date", (req, res, next) => {
  res.status(200).json({ currentDate: new Date() })
})

export default app;