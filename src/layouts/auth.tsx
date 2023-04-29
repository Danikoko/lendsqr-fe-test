import styles from '@/styles/layouts/auth.module.scss';

const AuthLayout = ({ children }: any) => {
    return (
        <div>
            <h1>Check me out at &nbsp;
                <a className={styles.link} href="https://danikoko.com" target="_blank">danikoko.com</a>
            </h1>
            {
                children
            }
        </div>
    );
}
 
export default AuthLayout;