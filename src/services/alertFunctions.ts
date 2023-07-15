import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export function alertSuccess(msg : string) {
    toast.success(msg , {
        position: toast.POSITION.TOP_RIGHT,
        // theme: "dark"
    })
}

export function alertError(msg : string) {
    toast.error(msg , {
        position: toast.POSITION.TOP_RIGHT,
        // theme: "dark"
    })
}