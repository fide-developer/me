import { Link as RouterLink, type LinkProps } from 'react-router'
import style from './index.module.scss'
import cx from '@utils/cx'

export type InternalLinkProps = LinkProps

export const InternalLink: React.FC<InternalLinkProps> = ({children, className,...props}) => {
    return (
        <RouterLink {...props} className={cx(style.link, className)}>
            {children}
        </RouterLink>
    )
}

export default InternalLink