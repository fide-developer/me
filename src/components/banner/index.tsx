import type React from "react"
import styles from './index.module.scss'

export const Banner: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <section className={styles.banner}>
            {children}
        </section>
    )
}