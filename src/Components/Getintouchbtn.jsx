



const Getintouchbtn = (props) => {
    return (
        <>

                     <div className="contact-item d-flex align-items-start  gap-3 mb-4">
                        <div className="contact-icon flex-shrink-0">
                            <i className={props.icon}></i>
                        </div>

                        <div className="contact-details d-flex gap-3">
                            <span className="contact-line"></span>

                            <div>
                                <h3 className="fw-semibold fs-6 mb-1">
                                    {props.title}
                                </h3>
                                <p className="text-muted mb-0 text-break">
                                    {props.para}
                                </p>
                            </div>
                        </div>
                    </div>

      
        </>
    );
};

export default Getintouchbtn;   