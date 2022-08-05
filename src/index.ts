import express from 'express';
import {json} from 'body-parser';
import {vaccineSummary} from './routes/vaccine-summary'
let port:number = 3000;

const app = express()
app.use(json())
app.use(vaccineSummary);

app.listen(port,() => {
    console.log(`app is running at port ${port}`)
})