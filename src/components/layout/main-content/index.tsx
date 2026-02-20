import type React from "react"
import style from './index.module.scss'

export const MainContent: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <main className={style.mainContent}>
            {children}
        </main>
    )
}

export default MainContent