import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js';
import postRouters from './routers/postRouters.js'
import dalleRouters from './routers/dalleRouters.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRouters);
app.use('/api/v1/dalle', dalleRouters);
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.get('/', async (req, res) => {
    res.send('Hello')
})


const startServer = async () => {
    try{
        connectDB(process.env.MONGODB_URL)
         app.listen(8080, () => {console.log(`http://localhost:8080`)})
    }catch(err){
        console.log(err)
    }
}

startServer();