import cors from 'cors'
import 'dotenv/config'
import express, { Application, NextFunction, Request, Response } from 'express'
import * as path from 'path'
import routes from './app/routes'

// import routes here
import globalErrorHandler from './errors/globalErrorHandler'
import { dbConnect } from './utils/dbConnect'
const app: Application = express()
const corsOptions = {
  origin: ['https://japanese-language-learning.netlify.app'],
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

// https://learn-server-kappa.vercel.app/api/v1/auth/login
// https://japanese-language-learning.netlify.app

// Set EJS as the view engine
app.set('view engine', 'ejs')

// Set the path to the views directory
app.set('views', path.join(__dirname, '../views'))

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Database connection
dbConnect()

// Application routes
app.use('/api/v1/', routes)

//Welcome route
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.render('welcome')
})

// Error handling
app.use(globalErrorHandler)

export { app }
