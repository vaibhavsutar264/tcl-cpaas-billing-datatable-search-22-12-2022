import axios from 'axios'
import { getFromLocalStorage } from '../../hooks/useLocalStorage'
import { Password } from '../../types/authType'
import { apiHelpers, appRoutes, localStorageVar } from '../../utils/constants'
import routes from './routes'
const httpInstance = axios.create({ baseURL: routes.BASE_URL })

// Intercepter for every request appending headers here
httpInstance.interceptors.request.use(
  (config: any) => {
    config.headers[apiHelpers.HEADER_CONTENT_TYPE] =
      apiHelpers.CONTENT_TYPE_APP_JSON
    config.headers[apiHelpers.HEADER_AUTHORIZATION] = `${
      apiHelpers.TOKEN_TYPE
    } ${getFromLocalStorage(localStorageVar.TOKEN_VAR) || null}`
    return config
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear()
      window.location.href = appRoutes.LOGIN
    }
    return Promise.reject(error)
  }
)

// Add a response interceptor
httpInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response)
  },
  ({ response }) => {
    return Promise.reject(response)
  }
)

const requests = {
  get: (url: string) => httpInstance.get(url),
  post: (url: string, body: any) => httpInstance.post(url, body),
  patch: (url: string, body: Password) => httpInstance.patch(url, body),
  put: (url: string, body: any) => httpInstance.put(url, body),
}

const userLoginData = {
  login: (body: any) =>
    requests.post(`${routes.BASE_URL}${routes.LOGIN}`, body),
  logout: () => requests.get(`${routes.BASE_URL}${routes.LOGOUT}`),
  updatePassword: (body: Password) =>
    requests.post(`${routes.BASE_URL}${routes.SET_PASSWORD}`, body),
  forgotPassword: (body: any) =>
    requests.post(`${routes.BASE_URL}${routes.FORGOT_PASSWORD}`, body),
  resetPassword: (token: any, body: any) =>
    requests.post(`${routes.BASE_URL}${routes.RESET_PASSWORD}/${token}`, body),
  getUserInfo: () =>
    requests.get(`${routes.BASE_URL}${routes.GET_USER_INFO}`)
}

const billing = {
  loadInvoices: (data: any) =>
    requests.get(`${routes.BASE_URL}${routes.GET_INVOICES}?q=${data.searchValue}`),
  viewInvoice: (data: any) =>
    requests.get(`${routes.BASE_URL}${routes.VIEW_INVOICES}`),
  downloadInvoice: () =>
    axios.get(`${routes.BASE_URL}${routes.DOWNLOAD_INVOICES}`),
  downloadInvoiceCdr: (data: any) =>
    requests.get(`${routes.BASE_URL}${routes.DOWNLOAD_INVOICES_CDR}`),
}

export { userLoginData, billing }
