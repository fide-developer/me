
export default function cx(...classNames: (string | undefined | false)[]) {
    return classNames.filter(Boolean).join(' ')
}
