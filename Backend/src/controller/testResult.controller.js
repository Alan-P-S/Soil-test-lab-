
import TestResult from "../models/testResult.model.js"


export const addTestResult = async (req,res)=>{
    const data = req.body;
    const result = {Nvalue:data.organicCarbon,Pvalue:data.phosphorus,Kvalue:data.potassium,Tssvalue:data.tss,Phvalue:data.ph,UserId:data.UserId};
    console.log(result);
    try
    {
        const r = await TestResult.create(result);
        return res.status(201).json({data:r});
    }catch(error){
        console.log('Error',error.name);
        return res.status(401).json({error:error.name});
    }
}