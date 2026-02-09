import User from "../models/user.model.js";
import Test from "../models/test.model.js";
import Plot from "../models/plot.model.js";
import FarmerCrop from "../models/farmerCrop.model.js";
import GeneralCrop from "../models/generalCrop.model.js";
import BookTest from "../models/bookTest.model.js";
import TestResult from "../models/testResult.model.js";

export const associate = ()=>{
    User.hasMany(Test);
    User.hasMany(Plot);
    User.hasMany(FarmerCrop);
    FarmerCrop.belongsTo(GeneralCrop);
    User.hasMany(BookTest);
    Plot.hasOne(BookTest);
    User.hasMany(TestResult);    
}