import React from 'react'
import './Pagination.css';
import ReactPaginate from 'react-paginate';

const Pagination = ({ issues, setCurrentPage, issuePerPage }) => {

    const pageCount = Math.ceil(issues?.data?.articles?.length / issuePerPage);

    const changePage = ({ selected }) => {
        setCurrentPage(selected);
    };
    return (
        <div className='pagination'>
            <ReactPaginate
                previousLabel={"Previous"}
                nextAriaLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationbtns"}
                previousLinkClassName={"previousbtn"}
                nextLinkClassName={"nextbtn"}
                disabledClassName={"paginationdisabled"}
                activeClassName={"paginationactive"}
            />
        </div>
    )
}

export default Pagination