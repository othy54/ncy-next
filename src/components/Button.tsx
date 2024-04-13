import styles from '@/app/styles/Button.module.css'

interface ButtonProps {
    variant?: 'primary' | 'primaryInvert' | 'secondary';
    text: string,
    icon: string,
}

export default function Button({ variant = 'primary', text, icon }: ButtonProps) {
    const classNames = {
        primary: styles.primary,
        primaryInvert: styles.primaryInvert,
        secondary: styles.secondary,
    };

    const variantClass = classNames[variant] || classNames.primary;


    return (
        <button className={`${styles.button} ${variantClass}`}>
            <span className={`${icon} aspect-square w-[24px]`}></span>
            <div className={styles.contained}>
                <div data-before={text} className={styles.wrapped}>
                    <span>{text}</span>
                </div>
            </div>
        </button>
    )
}