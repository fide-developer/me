import { NavLink as RouterNavLink, type NavLinkProps, type NavLinkRenderProps } from 'react-router'
import style from './index.module.scss'
import cx from '@utils/cx'

export const NavLink: React.FC<NavLinkProps> = ({children, className,...props}) => {
    const resolvedClassName =
        typeof className === 'function'
            ? (navData: NavLinkRenderProps) => cx(style.navLink, className(navData))
            : cx(style.navLink, className)

    return (
        <RouterNavLink {...props} className={resolvedClassName}>
            {children}
        </RouterNavLink>
    )
}