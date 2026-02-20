import type React from "react";
import styles from './index.module.scss'
import { Link } from "@component/common-ui/link";
import { NavLink } from "@component/common-ui/nav-link";
import { ButtonGroup } from "@component/common-ui/action-group";

export const MainNavigation: React.FC = () => {
    return (
        <nav className={styles.navContainer}>
            <div>Fi.Dev</div>
            <div>
                <NavLink to='/'>
                    Home
                </NavLink>
            </div>
            <ButtonGroup placement="end">
                <Link href={import.meta.env.VITE_GITHUB_LINK} asExternal>
                    GitHub
                </Link>
                <Link href={import.meta.env.VITE_LINKEDIN_LINK} asExternal>
                    Linked In
                </Link>
            </ButtonGroup>
        </nav>
    )
}