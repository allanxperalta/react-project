import { useEffect } from "react";
import { fetchData } from "../../features/Customer/CustomerSlice";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import "./content.css";

export const Content = () => {
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customer.customers);
    const page = useSelector(state => state.customer.page);
    const pending = useSelector(state => state.customer.pending);
    const error = useSelector(state => state.customer.error);
    
    useEffect(() => {
        dispatch(fetchData(page));
    }, [page]);

    if(error) {
        return error;
    }
    
    if(pending) {
        return "Loading...";
    }
    
    return(
        <section className="content">
            <section>
            {
                Boolean(customers.length) && customers.map(
                    customer => <Card key={customer.id} data={customer} />
                )
            }
            </section>
        </section>
    )
}