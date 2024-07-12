const Pagination = ({ page, handlePageChange }) => {
    return (
        <nav aria-label="...">
            <ul class="pagination pointer mx-1">
                <li onClick={() => handlePageChange(page - 1)} class={`page-item${page !== 1 ? '' : ' disabled'}`}>
                    <a class="page-link" tabindex="-1" aria-disabled="true">Previous</a>
                </li>
                <li onClick={() => handlePageChange(page + 1)} class="page-item">
                    <a class="page-link">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;