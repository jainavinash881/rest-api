require('dotenv').config()
import express, { Request, Response } from 'express';
import {vSummary} from '../models/vSummary'
import mongoose, { Schema } from 'mongoose';
import {
  ObjectId,
  MongoClient
} from 'mongodb';


const router = express.Router();


router.get('/api/v1/vaccine-summary', async(req, res) => {
  try {
    let range, country, dateFrom, dateTo;
    if (req && req.query) {
      country = req.query.c;
      dateFrom = req.query.dateFrom;
      dateTo = req.query.dateTo;
      range = req.query.range;
      console.log(country, dateFrom,dateTo, range)
      if (country && dateFrom && dateTo && range) {
        const filter = {
          'Region': `${country}`, 
          'YearWeekISO': {
            '$gte': `${dateFrom}`, 
            '$lt': `${dateTo}`
          }
        };

        
        const client = await MongoClient.connect(
        `${process.env.CONNECTION_STRING}`,
        );
        const coll = client.db('node-api').collection('VaccineSumaary');
        console.log(coll, "colclclclcl");
        console.log(filter);
        const cursor = coll.find(filter);
        const result = await cursor.toArray();
        res.send(result);
      }


    } else {
      res.send('please Enter Valid Parameter');
    }
    } catch(err){
      console.log(err,"error")
    }

});


export { router as vaccineSummary }


