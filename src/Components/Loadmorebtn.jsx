





const Loadmorebtn = ({ loadmoreHandler }) => {
    return (
        <button onClick={loadmoreHandler}
            className="px-6 py-2.5 bg-purple-600 text-white font-medium rounded-2 hover:bg-purple-700 transition">
            Load More
        </button>
    );
};

export default Loadmorebtn;