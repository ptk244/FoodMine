import {connect, ConnectOptions} from 'mongoose';

export const dbConnect=()=>{
    connect(process.env.MONGO_URI!,{
        useNewUrlparser:true,
        useUnifiedTopology:true
    } as ConnectOptions).then(
        ()=> console.log("connect Successfully"),
        (error)=> console.log(error)
        
    )
}




// const options: ConnectOptions = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   };
  
//   connect('mongodb://localhost:27017/mydatabase', options)
//     .then(() => console.log('Database connected successfully'))
//     .catch((err) => console.error('Database connection error:', err));
