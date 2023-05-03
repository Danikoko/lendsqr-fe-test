import Swal from "sweetalert2";
/** Customer Side Nav Links */
import usersIcon from "../../public/assets/icons/sidemenu/users.svg";
import guarantorsIcon from "../../public/assets/icons/sidemenu/guarantors.svg";
import loansIcon from "../../public/assets/icons/sidemenu/loans.svg";
import decisionModelsIcon from "../../public/assets/icons/sidemenu/decisionModels.svg";
import savingsIcon from "../../public/assets/icons/sidemenu/savings.svg";
import loanRequestsIcon from "../../public/assets/icons/sidemenu/loanRequests.svg";
import whitelistIcon from "../../public/assets/icons/sidemenu/whitelist.svg";
import karmaIcon from "../../public/assets/icons/sidemenu/karma.svg";
/** Customers Side Nav Links */

/** Businesses Side Nav Links */
import brifecaseIcon from "../../public/assets/icons/sidemenu/briefcase.svg";
import savingsProductsIcon from "../../public/assets/icons/sidemenu/savingsProducts.svg";
import feesIcon from "../../public/assets/icons/sidemenu/fees.svg";
import transactionsIcon from "../../public/assets/icons/sidemenu/transactions.svg";
import servicesIcon from "../../public/assets/icons/sidemenu/services.svg";
import serviceAccountsIcon from "../../public/assets/icons/sidemenu/serviceAccounts.svg";
import settlementsIcon from "../../public/assets/icons/sidemenu/settlements.svg";
import reportsIcon from "../../public/assets/icons/sidemenu/reports.svg";
/** Businesses Side Nav Links */

/** Settings Side Nav Links */
import preferencesIcon from "../../public/assets/icons/sidemenu/preferences.svg";
import feesAndPricingIcon from "../../public/assets/icons/sidemenu/feesAndPricing.svg";
import auditLogsIcon from "../../public/assets/icons/sidemenu/auditLogs.svg";
/** Settings Side Nav Links */

const CONSTANTS = {
    API_URL: "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/",
    ERROR_ALERT: async (message: string) => {
        await Swal.fire({
            title: "Oops!",
            text: message,
            icon: "error",
            confirmButtonColor: "#39CDCC"
        });
    },
    customersSideNavLinks: [
        {
            name: 'Users',
            icon: usersIcon
        },
        {
            name: 'Guarantors',
            icon: guarantorsIcon
        },
        {
            name: 'Loans',
            icon: loansIcon
        },
        {
            name: 'Decision Models',
            icon: decisionModelsIcon
        },
        {
            name: 'Savings',
            icon: savingsIcon
        },
        {
            name: 'Loan Requests',
            icon: loanRequestsIcon
        },
        {
            name: 'Whitelist',
            icon: whitelistIcon
        },
        {
            name: 'Karma',
            icon: karmaIcon
        }
    ] as Link[],
    businessesSideNavLinks: [
        {
            name: 'Organization',
            icon: brifecaseIcon
        },
        {
            name: 'Loan Products',
            icon: loanRequestsIcon
        },
        {
            name: 'Savings Products',
            icon: savingsProductsIcon
        },
        {
            name: 'Fees and Charges',
            icon: feesIcon
        },
        {
            name: 'Transactions',
            icon: transactionsIcon
        },
        {
            name: 'Services',
            icon: servicesIcon
        },
        {
            name: 'Service Account',
            icon: serviceAccountsIcon
        },
        {
            name: 'Settlements',
            icon: settlementsIcon
        },
        {
            name: 'Reports',
            icon: reportsIcon
        }
    ] as Link[],
    settingsSideNavLinks: [
        {
            name: 'Preferences',
            icon: brifecaseIcon
        },
        {
            name: 'Fees and Pricing',
            icon: feesAndPricingIcon
        },
        {
            name: 'Audit Logs',
            icon: auditLogsIcon
        }
    ] as Link[]
}

export default CONSTANTS;