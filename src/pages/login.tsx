import AuthLayout from "@/layouts/auth";
import styles from '../styles/layouts/auth.module.scss';
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import CONSTANTS from "@/utils/constants";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  /** Component state */
  const [state, setState] = useState({
    showPassword: true,
    email: '',
    password: ''
  });
  /** Component state */
  
  /** Component methods */
  const handleShowPassword = () => setState({
    ...state,
    showPassword: !state.showPassword
  });

  const handleEmailInput = (e: any) => {
    e.preventDefault();
    setState({
      ...state,
      email: e.target.value
    });
  };

  const handlePasswordInput = (e: any) => {
    e.preventDefault();
    setState({
      ...state,
      password: e.target.value
    });
  };

  const logUserIn = async (e: any) => {
    e.preventDefault();
    if (!state.email || state.email.indexOf('@') === -1) {
      CONSTANTS.ERROR_ALERT('Please enter a valid email address');
      return;
    }
    if (!state.password) {
      CONSTANTS.ERROR_ALERT('Please enter a password');
      return;
    }
    router.push('/');
  }
  /** Component methods */

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <AuthLayout>
        <div className="lg:px-10 lg:pb-20 h-full flex flex-wrap">
          <div className="self-center w-full">
            <div>
              <h2 className={`${styles.header} text-center lg:text-left mb-2`}>
                Welcome!
              </h2>
              <span className={`${styles.subheader} block text-center lg:text-left`}>
                Enter details to login.
              </span>
            </div>
            <div className="mt-12">
              <form onSubmit={logUserIn} action="#" method="post">
                <div className="mb-6">
                  <input onChange={handleEmailInput} type="text" placeholder="Email" className={`${styles.formInput} w-full`} />
                </div>
                <div className="mb-6 relative">
                  <input onChange={handlePasswordInput} type={state.showPassword ? 'password' : 'text'} placeholder="Password" className={`${styles.formInput} w-full`} />
                  <span onClick={handleShowPassword} className={`${styles.link} absolute top-4 right-5 cursor-pointer`}>
                    {
                      state.showPassword
                      ? 'Show'
                      : 'Hide'
                    }
                  </span>
                </div>
                <div className="mb-10">
                  <Link href="#" className={styles.link}>
                    Forgot Password
                  </Link>
                </div>
                <div>
                  <button className={`${styles.authButton} uppercase w-full`} type="submit">
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}

export default Login;
