import express from 'express'
import { router } from './app'
const app = express()

app.use(express.json());

app.use(router)

app.listen(3000, () => { console.log('Listen on port: ' + 3000) })
