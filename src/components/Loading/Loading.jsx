export const Loading = () => {
    return (
        <div
            className="spinner-grow inline-block w-20 h-20 bg-current rounded-full opacity-0 text-regal-blue absolute top-[50%] left-[50%] -ml-10 -mt-10"
            role="status"
        >
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};
