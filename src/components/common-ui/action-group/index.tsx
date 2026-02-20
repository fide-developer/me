import cx from '@utils/cx'
import style from './index.module.scss'

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    childAlignment?: 'left' | 'center' | 'right'
    placement?: 'start' | 'center' | 'end'
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({children, childAlignment = 'left', placement = 'center', ...props}) => {
    return (
        <div className={cx(style.buttonGroup, style[childAlignment], style[placement])} {...props}>
            {children}
        </div>
    )
}