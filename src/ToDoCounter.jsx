function TodoCounter(props) {
    return(
    <>
        <h1 className="title-counter">
            Completaste {props.completados} de {props.totales} TODOs
        </h1>
    </>
    );
}

export {TodoCounter};