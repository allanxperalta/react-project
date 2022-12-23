import "./card.css";

export const Card = ({ data }) => {
    return(
        <main className="card">
            <section className="card-id">
                <h1>{ data.id }</h1>
            </section>
            <article className="card-body">
                <section className="card-img">
                    <img src={ data.avatar } alt="" className="card-avatar" />
                </section>
                <section className="card-details">
                    <section className="name">
                        { data.first_name } { data.last_name }          
                    </section>
                    <section>
                        { data.email }
                    </section>    
                </section>   
            </article>   
        </main>
    )
}