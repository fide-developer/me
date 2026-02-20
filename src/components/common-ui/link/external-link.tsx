import style from './index.module.scss'
import cx from '@utils/cx'

export type ExternalLinkProps = React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>

export const ExternalLink: React.FC<ExternalLinkProps> = ({children, className,...props}) => {
    return (
        <a {...props} className={cx(style.link, className)} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}

export default ExternalLink