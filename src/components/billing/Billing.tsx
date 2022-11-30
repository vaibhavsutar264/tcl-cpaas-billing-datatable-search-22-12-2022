<<<<<<< HEAD
import { useEffect } from 'react'
=======
import { useEffect, useState } from 'react'
>>>>>>> 0eddcf581e4fbecfb12b1c293db8fb859a84ab49
import { SideBar } from '../common/elements/SideBar'
import DataTable from '../common/tables/DataTables'
import { BreadCrums } from '../common/elements/BreadCrum'
import { InfoCard } from '../common/elements/InfoCard'
import { PageSearch } from '../common/elements/PageSearch'
import { breadCrums, dataTables } from '../../utils/constants'
import {
  useDispatch as useAppDispatch,
  useSelector
} from '../../redux/store'
import { ChangePageBilling, loadInvoices, searchData } from '../../redux/slices/billingSlice'

export const Billing = () => {
  const { isError, isLoading, isSuccess, PageData = [], invoiceData = [], total, page, take } = useSelector((state: any) => state.billing);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadInvoices({ searchValue: "" }))
  }, [])

  return (
    <div className="dashboard__wrapper">
      <SideBar />
      <div className="dashboard__content">
        <div className="content__header">
          <BreadCrums data={breadCrums.BILLING} />
          <PageSearch searchFn={searchData} />
        </div>
        <InfoCard />
        <DataTable pageAction={ChangePageBilling} Total={total} page={page} take={take} TableData={dataTables.BILLING(PageData)} />
      </div>
    </div>
  )
}

export default Billing



