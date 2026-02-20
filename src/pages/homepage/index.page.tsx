import MainContent from "@component/layout/main-content";
import type React from "react";
import HomePageBanner from "./homepage-banner";


export const HomePage: React.FC = () => {
    return (
        <div>
            <HomePageBanner />
            <MainContent>
                <section>
                    Hi
                </section>
            </MainContent>
        </div>
    )
}