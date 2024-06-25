//install fontawsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome'; 
function AddService({children}) {
    return (
        <section className="event-services-1 vh-100">
        <div className="main-caption m-4">
            <h2 className="fw-bolder">Add Your Services</h2>
            <p className="text-muted">What services would your event include?</p>
        </div>
        <div className="page-content mx-auto position-relative">
            <div className="services-box mb-5">
                <h3 className="fw-bold">Event Services</h3>
                {children}
                <div className="services-card-add rounded-2 w-100  d-flex justify-content-center align-items-center flex-column">
                    <a href="" className="text-decoration-none text-white mb-2"><div className="icon-circle rounded-circle d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon className="fa-solid fa-plus" icon="fa-solid fa-plus" />
                    </div></a>
                    <h5>Add Services</h5>
                </div>
            </div>
            {/* add button component */}
            {!children?<button className="countinue-btn rounded-pill text-white px-2 position-absolute start-100 bottom-0">Countinue</button>:
                <div className="footer-caption d-flex justify-content-center align-items-center g-3">
                    <p className="fw-light">This is a recommended services based on the info you provided.</p>
                    <button className="select-manual-btn rounded-pill px-2 mx-3">Select Manualy</button>
                    <button className="countinue-btn rounded-pill text-white px-2">Countinue</button>
                </div>}
        </div>
    </section>
    )
}

export default AddService
