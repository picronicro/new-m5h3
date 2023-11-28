import React from 'react';
import {Route, Routes} from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import UsersPage from "./pages/UsersPage";

function App(props) {
    return (
        <div>
            <Routes>
                <Route path="/users" element={<Layout />}>
                    <Route index element={<UsersPage />} />
                    <Route path="/users/:id" element={<ProfilePage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;