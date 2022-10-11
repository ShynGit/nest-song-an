export const CheckBox = ({ value, handleCheck }) => {
    return (
        <div>
            <span className="flex items-center m-1 text-sm">
                <input
                    type="checkbox"
                    className="mr-2 w-5 h-5 accent-emerald-600"
                    onChange={() => handleCheck(value)}
                />
                {value}
            </span>
        </div>
    );
};
