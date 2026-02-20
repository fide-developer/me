import style from './index.module.scss'
import cx from '@utils/cx'
import React from 'react'
import type { InternalLinkProps } from './internal-link'
import type { ExternalLinkProps } from './external-link'

const LinkVariant = {
    'internal': React.lazy(() => import('./internal-link')),
    'external': React.lazy(() => import('./external-link')),
}

type LinkProps = { asExternal: true } & ExternalLinkProps | { asExternal?: false } & InternalLinkProps

export const Link: React.FC<LinkProps> = ({children, className, asExternal,...props}) => {
    const combinedClass = cx(style.link, className)

    if (asExternal) {
        const External = LinkVariant.external as React.LazyExoticComponent<React.ComponentType<ExternalLinkProps & { className?: string }>>
        return (
            <External {...(props as ExternalLinkProps)} className={combinedClass}>
                {children}
            </External>
        )
    }

    const Internal = LinkVariant.internal as React.LazyExoticComponent<React.ComponentType<InternalLinkProps & { className?: string }>>
    return (
        <Internal {...(props as InternalLinkProps)} className={combinedClass}>
            {children}
        </Internal>
    )
}