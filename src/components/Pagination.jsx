import React from 'react'

export const Pagination = ({ projects, currentPage, onPageChange }) => {
    const totalPages = projects.length;
  return (
    <div className='pagination'>
      <button className='arrow-button' disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
      <svg width="27" height="23" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className='arrow-button-fill' d="M21.8264 25.7314L0.987751 13.5L21.8264 1.26863L15.979 13.2812L15.8725 13.5L15.979 13.7188L21.8264 25.7314Z" fill="#C7F5F5" fillOpacity="0.6" stroke="#C7F5F5"/>
</svg>

      </button>
      <span>{`Project ${currentPage} of ${totalPages}`}</span>
      <button className='arrow-button' disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
      <svg width="27" height="23" viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className='arrow-button-fill' d="M1.18103 1.25921L30.5 18.1865L1.18102 35.1138L9.44813 18.4083L9.55787 18.1865L9.44813 17.9648L1.18103 1.25921Z" fill="#C7F5F5" fillOpacity="0.6" stroke="#C7F5F5"/>
    </svg>
      </button>
    </div>
  )
}
