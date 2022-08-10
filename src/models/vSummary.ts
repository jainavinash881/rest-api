import mongoose from "mongoose";
// const mon = require("../index")

const vSummarySchema = new mongoose.Schema({
     YearWeekISO: { type: String,},
     FirstDose: { type: Number},
     FirstDoseRefused : { type: String,},
     SecondDose : { type: Number},
     DoseAdditional1 : { type: Number},
     DoseAdditional2 : { type: Number},
     UnknownDose : { type: Number},
     NumberDosesReceived : { type: Number},
     NumberDosesExported : { type: Number},
     Region : { type: String},
     Population : { type: Number},
     ReportingCountry : { type: String},
     TargetGroup : { type: String},
     Vaccine : { type: String},
     Denominator : { type: Number},
})

const vSummary = mongoose.model('vSummary', vSummarySchema);

export { vSummary }