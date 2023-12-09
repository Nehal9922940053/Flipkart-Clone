import mongoose from 'mongoose';

export const Connection = async (username,password) =>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.v40un4r.mongodb.net/?retryWrites=true&w=majority`;
   
    try {
        await mongoose.connect(URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        });
        console.log("Database connection established");
    } catch (error) {
        console.log('Error while connecting with the  database',error.message);
    }
}
export default Connection;