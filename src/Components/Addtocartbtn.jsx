




const Addtocartbtn = ({ handleProductaddtocart, id }) => {
    return (
        <div className="mt-auto pt-1 d-flex gap-1">
            <button
                type="button"
                onClick={() => handleProductaddtocart(id)}
                className="border bg-purple-900 text-white !px-3 !py-2 !d-flex !items-center !gap-2 !rounded-full hover:!bg-white hover:!text-purple-900 !transition-colors"
            >
                <i className="bi bi-cart3"></i>
                Add to Cart
            </button>
        </div>
    );
};

export default Addtocartbtn;
