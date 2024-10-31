import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Profile from "./pages/Profile";
import Notes from "./pages/Notes";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Profile/>} />   
                <Route path='/notes' element={ <Notes/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;