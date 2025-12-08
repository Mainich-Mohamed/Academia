import FoldersList from '@/features/notebooks/components/FoldersList'
import Quotations from '@/features/notebooks/components/quotations'
import Header from '@/layouts/header'
import React from 'react'

function NotebookPage() {
  return (
    <>
        <Header />
        <Quotations />
        <FoldersList />
    </>
  )
}

export default NotebookPage