import axios from "@/utils/axios.customize"

export const registerAPI = (email: string, password: string, name: string) => {
    const url = `/auth/register`
    return axios.post<IBackendRes<IRegister>>(url, { email, password, name })
}

export const verifyCodeAPI = (email: string, code: string) => {
    const url = `/auth/verification`
    return axios.post<IBackendRes<IRegister>>(url, { email, code })
}

export const resendCodeAPI = (email: string, code: string) => {
    const url = `/auth/verify-email`
    return axios.post<IBackendRes<IRegister>>(url, { email })
}

export const loginAPI = (email: string, password: string) => {
    const url = `/auth/login`
    return axios.post<IBackendRes<IRegister>>(url, { email, password })
}