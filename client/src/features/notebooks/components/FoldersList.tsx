import React from 'react'
import ActionButtons from './ActionButtons'
import FoldersGrid from './FoldersGrid'
import NotebooksGrid from './NotebooksGrid'

const FoldersList = () => {
  return (
    <div>
        <ActionButtons />
        <FoldersGrid />
        {/* <div className='flex justify-center m-10'>
          <hr className="h-px w-xl mt-8 bg-foreground border-0 rounded-full" />
        </div> */}
        <ActionButtons />
        <NotebooksGrid />
    </div>
  )
}

export default FoldersList