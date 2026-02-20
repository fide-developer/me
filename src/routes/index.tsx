import type React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/homepage";
import { AppLayout } from "../components/layout/app-layout";


export const AppRoutes: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}