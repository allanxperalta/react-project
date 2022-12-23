import "./pagination.css";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../features/Customer/CustomerSlice";

export const Pagination = () => {
    let page = useSelector(state => state.customer.page);
    const total_pages = useSelector(state => state.customer.total_pages);
    const dispatch = useDispatch();

    const handlePrevious = () => {
        page -= 1;
        dispatch(setPage(page));
    }

    const handleNext = () => {
        page += 1;
        dispatch(setPage(page));
    }
    
    return(
        <section className="pagination">
            <button className="pagination-btn" onClick={() => handlePrevious()} disabled={page === 1}>PREV</button>
            <button className="pagination-btn" onClick={() => handleNext()} disabled={total_pages === page}>NEXT</button>
        </section>
    )
}