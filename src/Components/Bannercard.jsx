




const Bannercard = (props) => {
    return (

        <div
            key={props.banner}
            className="flex-shrink-0  p-0 w-full md:w-[80%] lg:w-[40%]   mx-auto"

        >

            <img
                src={props.banner}

                className="object-fit-cover d-block"

                loading="lazy"
            />


        </div>

    )
}


export default Bannercard