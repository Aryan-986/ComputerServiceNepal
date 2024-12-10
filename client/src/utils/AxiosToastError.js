import toast from "react-hot-toast"

const AxiosToasteError = (error)=>{
    toast.error(
        error?.response?.data?.message
    )
}

export default AxiosToasteError