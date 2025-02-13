import {config as conf} from "dotenv";
conf();


const _config = {
    port : process.env.PORT,
    databaseUrl : process.env.MONGO_URI
};


export const config =  Object.freeze(_config);


//isme ham ek freeze nam ki method use kar rahe hain jo hamare config object ko immutable banata hai, matlab ki is object ki value ko change nahi kiya ja sakta. 