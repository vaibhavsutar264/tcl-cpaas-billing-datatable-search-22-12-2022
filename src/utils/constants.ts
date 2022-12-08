export const apiRoutes = {
  BASE_URL: 'http://localhost:4000',

  // User
  LOGIN: '/cpaas/token',
  MOCKLOGIN: '/auth/login',
  SET_PASSWORD: '/api/v1/auth/password',
  FORGOT_PASSWORD: '/api/v1/password/forgot',
  RESET_PASSWORD: '/api/v1/password/reset',
  LOGOUT: '/api/v1/logout',

  // Billing
  GET_INVOICES: '/result_data',
}

export const apiHelpers = {
  HEADER_AUTHORIZATION: 'Authorization',
  HEADER_CONTENT_TYPE: 'Content-Type',
  TOKEN_TYPE: 'Bearer',
  CONTENT_TYPE_APP_JSON: 'application/json',
}

export const appThemes = {
  LIGHT_THEME: 'light',
  DARK_THEME: 'dark',
}

export const localStorageVar = {
  THEME_VAR: 'theme',
  TOKEN_VAR: 'token',
  USER_VAR: 'user',
  I18_LANG_VAR: 'i18nextLng',
  LANG_VAR: 'lng',
}

export const thunkPaths = {
  LOGIN_THUNK: 'auth/login',
  LOGOUT_THUNK: 'auth/logout',
  UPDATEPASSWORD_THUNK: 'auth/updatePassword',
}

export const slices = {
  AUTH_SLICE: 'auth',
  BILLING_SLICE: 'billing',
}

export const typeVar = {
  IMAGE_WEBP: 'image/webp',
  IMAGE_PNG: 'image/png',
  IMAGE_SVG: 'image/svg+xml',
  IMAGE_JPG: 'image/jpg',
  TEXT: 'text/plain',
  HTML: 'text/html',
  PDF: 'application/pdf',
  JSON: 'application/json',
  MP4: 'audio/mp4',
  OGG: 'audion/ogg',
  OTF: 'font/opentype',
  WEBM: 'video/webm',
}

export const appRoutes = {
  DEFAULT_PARMS: '?page=1&take=10',
  ROOT: '/',
  LOGIN: '/login',
  CHECK_PROTECTED: '/checkprotected',
  SET_PASSWORD: '/setpassword',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/password/reset/:token',
  NOT_FOUND: '*',
  BILLING: '/invoices',
  INVOICE: '/invoices/:id',
  RAISE_TICKET: '/invoices/raiseticket',
  INVOICE_BILL: '/invoices/invoicebill',
  BILLING_DETAILS: '/invoices/billingdetails'
}

export const breadCrums = {
  BILLING: {
    path: [
      { transName: 'dashboard', type: 'link', linkURL: appRoutes.BILLING },
      { transName: 'billingInvoiceshead', type: 'text', linkURL: '' },
    ],
    PageName: 'billingInvoiceshead',
  },
}

export const dataTables = {
  BILLING: (values: [], masterData = []) => ({
    data: values,
    columns: [
      { eleName: 'invoiceNumber', headTrans: 'id', sort: true, filter: false },
      {
        eleName: 'customerLe',
        headTrans: 'customerLe',
        sort: true,
        filter: true,
        filterData: {
          element: "customerLe",
          values: masterData.map((e: any) => e.customerLe).filter((it, i, ar) => ar.indexOf(it) === i)
        }
      },
      {
        eleName: 'tataEntity',
        headTrans: 'entity',
        sort: true,
        filter: false,
      },
      {
        eleName: 'poNumber',
        headTrans: 'poNo',
        sort: true,
        filter: true,
        filterData: {
          element: "poNumber",
          values: masterData.map((e: any) => e.poNumber).filter((it, i, ar) => ar.indexOf(it) === i)
        }
      },
      {
        eleName: 'paymentStatus',
        headTrans: 'status',
        sort: true,
        filter: true,
        filterData: {
          element: "paymentStatus",
          values: masterData.map((e: any) => e.paymentStatus).filter((it, i, ar) => ar.indexOf(it) === i)
        }
      },
      {
        eleName: 'invoiceAmount',
        headTrans: 'invoiceAmount',
        sort: true,
        filter: true,
        filterData: {
          element: "currency",
          values: masterData.map((e: any) => e.currency).filter((it, i, ar) => ar.indexOf(it) === i)
        }
      },
      {
        eleName: 'invoiceDate',
        headTrans: 'invoiceIssuedDate',
        sort: true,
        filter: false,
      },
      { eleName: 'dueDate', headTrans: 'dueDate', sort: true, filter: false },
    ],
    tableName: 'billing',
  }),
}

export const apiDefaultrespons = {
  LOGIN_ERRRO: {
    "meta_data": {
      "api_name": "token"
    },
    "data": {
      "data": null,
      "message": "Internal Error",
      "status": 404
    }
  }
}