import styles from "./user-item.module.scss";

export const UserItem = ({ title, content } : { title : string, content: string | number | React.ReactNode}) => {
    return (
        <p className={styles.wrapper}>
            <span className={styles.title}>{`${title}: `}</span>
            <span>{content}</span>
        </p>
    )
}