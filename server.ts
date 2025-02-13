import app from "./src/app";
import { config } from "./config/config";




const startServer = () => {
    const PORT =config.port || 3000;


   app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
   })
};




startServer();

