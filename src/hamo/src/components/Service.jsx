function Service({name,service,isrecommended}) {
    return (
        <div className="services-card rounded-2 d-flex my-3">
            <div className="card-img rounded-2 w-25">
            </div>
            <div className="card-data p-3 w-75">
                {isrecommended?<div className="text-pill rounded-pill p-1 px-2 ms-auto mb-1">Recommended</div>:""}
                <div className="person-data">
                    <h5>{name}</h5>
                    <p className="text-muted">{service}</p>
                </div>
            </div>
        </div>
    )
}

export default Service
