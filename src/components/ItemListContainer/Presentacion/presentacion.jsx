import "./Presentacion.css"

export const Presentacion = ( { MensajeBienvenida } ) => {

    return (
        <article className="welcome">
            <p className="welcome-message">
            {MensajeBienvenida}
            </p>
            
        

        </article>
    )
}