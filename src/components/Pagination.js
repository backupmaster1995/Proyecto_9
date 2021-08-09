import React from 'react'
import PropTypes from 'prop-types';

export default function Pagination({direction,symbol,currentPage,setCurrentPage,totalPages}) {

    const previousPage = () => {
        if(currentPage < 2) {
            return
        }
        setCurrentPage(currentPage - 1 )
    }

    const nextPage = () => {
        if(currentPage === totalPages) {
            return
        }
        setCurrentPage(currentPage + 1)
    }

    const handleFunctions = () => {
        if(direction === "Anterior") {
            return previousPage()
        } 
        return nextPage() 
    }

    if(direction === "Anterior" && currentPage < 2) {
        return null
    }

    if(direction === "Siguiente" && currentPage == totalPages) {
        return null
    }

    return (
        <button
            type="button"
            className="bbtn btn-info mr-1 mb-4"
            onClick={handleFunctions}
        >{direction} {symbol}</button>
    )
}

Pagination.propTypes = {
    direction : PropTypes.string.isRequired,
    symbol : PropTypes.string.isRequired,
    currentPage : PropTypes.number.isRequired,
    setCurrentPage : PropTypes.func.isRequired,
    totalPages : PropTypes.number.isRequired
}

