import styles from '../styles/components/Login.module.css'

export function Login(){
    return (
        <div className={styles.container}>
            <form method="POST">
                <input type="text" name="user" id="user"/>
                <input type="password" name="password" id="password"/>
                <input type="submit" value="Entrar" />
            </form>
        </div>
    )
}