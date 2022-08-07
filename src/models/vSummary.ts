import mongoose from "mongoose";

const vSummarySchema = new mongoose.Schema({

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

const vSummary = mongoose.model('vSummary', vSummarySchema);

export { vSummary }