import express from 'express' 
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
 
import indexRouter from './Router/index.js'



const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))


app.set('views', join(__dirname, 'views'))
app.set('view endine', 'ejs')
app.use(indexRouter)

app.use(express.static(join(__dirname, 'public')))

app.listen(process.env.PORT || 3000)
console.log('sevidor', process.env.PORT || 3000)




