import type React from "react";
import { MainNavigation } from "../main-navigation";
import { Outlet } from "react-router";

export const AppLayout: React.FC = () => {
    return (
        <div>
            <MainNavigation />
            <Outlet />
        </div>
    )
}