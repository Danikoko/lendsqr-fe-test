import DashboardLayout from "@/layouts/dashboard";
import layoutStyles from '../styles/layouts/dashboard.module.scss';
import Head from "next/head";
import axios from "axios";
import __CONSTANTS__ from "@/utils/constants";
import { useEffect, useMemo, useState } from "react";
import usersIcon from "../../public/assets/icons/users/users.svg";
import activeUsersIcon from "../../public/assets/icons/users/activeUsers.svg";
import usersWithLoanIcon from "../../public/assets/icons/users/usersWithLoan.svg";
import usersWithSavingsIcon from "../../public/assets/icons/users/usersWithSavings.svg";
import UsersCardInfo from "@/components/UsersCardInfo";
import HomeTable from "@/layouts/dashboard/components/HomeTable";

const Home = () => {
  /** Component state */
  const [users, setUsers] = useState([]);
  /** Component state */

  const activeUsers = useMemo(() => {
    return users.filter((user: any) => {
      return new Date(user.lastActiveDate) > new Date(user.createdAt)
    });
  }, [users]);

  const usersWithLoans = useMemo(() => {
    return users;
  }, [users]);

  const usersWithSavings = useMemo(() => {
    return users.filter((user: any) => {
      return parseFloat(user.accountBalance) > 0
    });
  }, [users]);

  const infoCards = useMemo(() => [
    {
      icon: usersIcon,
      title: 'Users',
      count: users.length
    },
    {
      icon: activeUsersIcon,
      title: 'Active users',
      count: activeUsers.length
    },
    {
      icon: usersWithLoanIcon,
      title: 'Users with loans',
      count: usersWithLoans.length
    },
    {
      icon: usersWithSavingsIcon,
      title: 'Users with savings',
      count: usersWithSavings.length
    }
  ], [
    users,
    activeUsers, 
    usersWithLoans, 
    usersWithSavings
  ]);

  const { 
    API_URL,
    ERROR_ALERT
  } = __CONSTANTS__;

  /** Method for fetching users */
  const fetchUsers = async () => {
    try {
      const RESPONSE = await axios.get(`${API_URL}users`);
      setUsers(RESPONSE.data);
    }
    catch (e) {
      ERROR_ALERT('There was an issue with this request');
    }
  }
  /** Method for fetching users */

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Head>
          <title>Home</title>
      </Head>
      <DashboardLayout>
          <div className={`${layoutStyles.mainSection} w-full lg:w-4/5 ml-auto`}>
            <div className="px-2 pt-4 lg:px-12 lg:py-12">
              <h2 className={`${layoutStyles.mainBlueColor} text-2xl`}>Users</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4 lg:mt-8">
                {
                  infoCards.map((cardInfo: any, index: number) => (
                    <UsersCardInfo
                    key={index}
                    cardInfo={cardInfo}
                    />
                  ))
                }
              </div>
              <div className="mt-8">
                <HomeTable 
                users={users} 
                />
              </div>
            </div>
          </div>
      </DashboardLayout>
    </>
  )
}

export default Home;
