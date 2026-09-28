



const  Contactinput = (props) => {
    return (
        <>
          <div className="mb-3">
                            <label htmlFor="fullName" className="form-label fw-semibold">
                                {props.name}
                            </label>

                            <input
                                type="text"
                                id="fullName"
                                name="name"
                                className="form-control"
                                placeholder="Enter your full name"
                                autoComplete="name"
                                required
                            />
                        </div>

        </>
    );  
};  

export default Contactinput;  