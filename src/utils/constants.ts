import Swal from "sweetalert2";

const CONSTANTS = {
    API_URL: "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/",
    ERROR_ALERT: async (message: string) => {
        await Swal.fire({
            title: "Oops!",
            text: message,
            icon: "error",
            confirmButtonColor: "#39CDCC"
        });
    }
}

export default CONSTANTS;