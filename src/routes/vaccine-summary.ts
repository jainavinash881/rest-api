import express, { Request, Response } from 'express';
import mongoose, {Schema} from 'mongoose';

const router = express.Router();

const collection_structure = new Schema({
     YearWeekISO: { type: String, required: true},
     FirstDose: { type: Number,required: true},
     FirstDoseRefused : { type: String, required: true},
     SecondDose : { type: Number, required: true},
     DoseAdditional1 : { type: Number, required: true},
     DoseAdditional2 : { type: Number, required: true},
     UnknownDose : { type: Number, required: true},
     NumberDosesReceived : { type: Number, required: true},
     NumberDosesExported : { type: Number, required: true},
     Region : { type: String, required: true},
     Population : { type: Number, required: true},
     ReportingCountry : { type: String, required: true},
     TargetGroup : { type: String, required: true},
     Vaccine : { type: String, required: true},
     Denominator : { type: Number, required: true},
})

const vSummary = mongoose.model('VaccineSummary', collection_structure);
router.get('/api/v1/vaccine-summary:62eec4823761d6a90067ae52', (req: Request, res: Response) => {
    vSummary.find({ id: req.params.id }, (err: any, items: any) => {
    console.log(items)
    if (err) res.status(500).send(err)

    res.status(200).json(items);
  });
    
});

export { router as vaccineSummary }


