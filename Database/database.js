import mongoose from 'mongoose';
export const database =() =>{
    mongoose
    .connect(process.env.Mongodb,{
        dbname:"Hospital2",
    }).then(()=>{
        console.log("connected to database")
    }).catch(err=>{
        console.log(`error connecting to database :${err}`)
    })
};
