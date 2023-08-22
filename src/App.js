import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from 'view/routes/index'

function App() {
   
    
    return (
        <BrowserRouter>
            <AllRoutes />
        </BrowserRouter>
    )

}
export default App;
