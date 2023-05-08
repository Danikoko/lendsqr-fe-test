import DashboardLayout from "@/layouts/dashboard";
import layoutStyles from '../styles/layouts/dashboard.module.scss';
import Head from "next/head";
import axios from "axios";
import __CONSTANTS__ from "@/utils/constants";
import { useCallback, useEffect, useMemo, useState } from "react";
import BackButton from "@/components/BackButton";
import ProfileCard from "@/layouts/dashboard/components/ProfileCard";
import BioData from "@/layouts/dashboard/components/BioData";
import { useRouter } from "next/router";

const UserById = () => {
  const router = useRouter();
  const { userId } = router.query;

  /** Component state */
  const [state, setState] = useState({
    activeView: 'General Details',
    userDetails: {} as any,
    fetching: true as boolean
  });
  /** Component state */

  
  const { 
    API_URL,
    ERROR_ALERT,
    BAD_INTERNET_ALERT
  } = __CONSTANTS__;

  const updateActiveView = (view: string) => setState({
    ...state,
    activeView: view
  });

  const saveUserDetails = useCallback((userDetails: unknown = {}) => setState({
    ...state,
    userDetails,
    fetching: false
  }), [state]);

  /** Method for fetching users */
  const fetchSingleUser = useCallback(async () => {
    try {
      const RESPONSE = await axios.get(`${API_URL}users/${userId}`);
      saveUserDetails(RESPONSE.data);
    }
    catch (e) {
      if (window.navigator.onLine === false) {
        BAD_INTERNET_ALERT().then(() => router.push('/login'));
      } else {
        ERROR_ALERT('There was an issue with this request').then(() => router.push('/login'));
      }
    }
  }, [
    saveUserDetails,
    userId,
    router,
    API_URL,
    BAD_INTERNET_ALERT,
    ERROR_ALERT
  ]);
  /** Method for fetching users */

  const currency = useMemo(() => {
    return state.userDetails?.profile
    ? state.userDetails?.profile.currency
    : '#'
  }, [state.userDetails]);

  const sortAmount = (amount: string) => `${currency} ${amount}`;

  const sortIncome = (arr: string[] = ["0", "0"]) => {
      const newArr = arr.sort((a, b) => parseFloat(a) - parseFloat(b)).map((amount: string) => `₦${amount}`);
      return `${sortAmount(newArr[0])} - ${sortAmount(newArr[1])}`;
  }

  useEffect(() => {
    userId && fetchSingleUser();
  }, [
    userId,
    fetchSingleUser
  ]);

  return (
    <>
      <Head>
          <title>User</title>
      </Head>
      <DashboardLayout fetching={state.fetching}>
          <div className={`${layoutStyles.mainSection} w-full lg:w-4/5 ml-auto`}>
            <div className="px-2 pt-4 lg:px-12 lg:py-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-4 lg:mt-8">
                <BackButton />
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-2/3 self-center">
                  <h2 className={`${layoutStyles.mainBlueColor} text-2xl`}>User Details</h2>
                </div>
                <div className="w-3/4 mt-4 lg:mt-0 lg:w-1/3">
                  <div className="grid grid-cols-2 gap-2">
                    <button className={`${layoutStyles.redOutlineButton} uppercase text-sm lg:text-md p-1`}>
                      Blacklist User
                    </button>
                    <button className={`${layoutStyles.mainOutlineButton} uppercase text-sm lg:text-md p-1`}>
                      Activate User
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <ProfileCard
                updateActiveView={updateActiveView} 
                activeView={state.activeView}
                userDetails={state.userDetails}
                sortAmount={sortAmount}
                />
                {
                 state.activeView === 'General Details'
                  ? <BioData
                    userDetails={state.userDetails}
                    sortIncome={sortIncome}
                    sortAmount ={sortAmount}
                    />
                  : state.activeView === 'Documents'
                  ? <div className={`${layoutStyles.card} p-5`}>
                      <h2 className="text-2xl text-center">Hope you guys like it. My bank details?</h2>
                    </div>
                  : state.activeView === 'Bank Details'
                  ? <div className={`${layoutStyles.card} p-5`}>
                      <h2 className="text-2xl text-center">Reach me on <a className={`${layoutStyles.mainBlueColor} font-bold underline`} href="https://wa.me/+2348147233865" target="_blank">WhatsApp</a> for that. </h2>
                    </div>
                  : state.activeView === 'Loans'
                  ? <div className={`${layoutStyles.card} p-5`}>
                      <h2 className="text-2xl text-center">Yeah sure I don&apos;t mind at all &gt;&gt;&gt;</h2>
                    </div>
                  : state.activeView === 'Savings'
                  ? <div className={`${layoutStyles.card} p-5`}>
                      <h2 className="text-2xl text-center">Well, I&apos;d be <span className="font-bold">saving</span> your organization front-end headaches if I&apos;m hired. Get it? 😭💔</h2>
                    </div>
                  : <div className={`${layoutStyles.card} p-5`}>
                      <h2 className="text-2xl text-center">If I entertained you, check me out <a className={`${layoutStyles.mainBlueColor} font-bold underline`} href="https://danikoko.com" target="_blank">here</a>. If not, checkout <a className={`${layoutStyles.mainBlueColor} font-bold underline`} href="https://danikoko.hashnode.dev" target="_blank">my blog</a>. Or do both if you&apos;re a legend 💯🔥</h2>
                    </div>
                }
              </div>
            </div>
          </div>
      </DashboardLayout>
    </>
  )
}

export default UserById;
