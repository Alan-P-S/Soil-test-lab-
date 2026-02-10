import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize('soiltest','root','root',{host:'localhost',dialect:'mysql'});


export const connectDB = async ()=>{
    try{
        await sequelize.authenticate();
        console.log('Database connected successfully');
    }catch(err){
        console.log('Database connection Error',err);
    }
}

export const syncDatabase = async()=>{
    try{
        await sequelize.sync({alter:true});
        console.log('Database and tables created');
    }catch(error){
        console.log('Error in syncing',error);
    }
}





