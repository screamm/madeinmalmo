import React from 'react'

type Props = {
    currentPage: number;
    lastPage: number;
    nextPageChange: ()=>void;
    previousPageChange: ()=>void;
    nextPageDisabled: boolean;
    previousPageDisabled: boolean;
}

const Pagination: React.FC<Props> = ({currentPage, lastPage, nextPageChange, previousPageChange, nextPageDisabled, previousPageDisabled}) => {
  return (
    <div>
        <button disabled={previousPageDisabled} onClick={previousPageChange}>Previous</button>
        <span>Page {currentPage} of {lastPage}</span>
        <button disabled={nextPageDisabled} onClick={nextPageChange}>Next</button>
    </div>
  )
}

export default Pagination