import type React from "react"
import styles from './index.module.scss'
import cx from "@utils/cx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "small" | "medium" | "large";
    withTransparentBackground?: boolean;
}

export const Card: React.FC<React.PropsWithChildren<CardProps>> = ({ children, size = 'medium', withTransparentBackground, className }) => {
    return (
        <div className={cx(styles.card, styles[size], withTransparentBackground && styles.transparent, className)}>
            {children}
        </div>
    )
}

export default Card