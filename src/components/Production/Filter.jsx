import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    FILTER_ADD,
    FILTER_REMOVE,
    selectFilter,
} from "../../features/production/filterSlice";
import { CheckBox } from "../CheckBox/CheckBox";

const FILTER_CARD = [
    { cate: "price", name: "Filter 1" },
    { cate: "price", name: "Filter 2" },
    { cate: "price", name: "Filter 3" },
    { cate: "price", name: "Filter 4" },
    { cate: "price", name: "Filter 5" },
];

export const Filter = () => {
    const filter = useSelector(selectFilter);
    console.log(filter);
    const dispatch = useDispatch();

    const handleCheck = (value) => {
        const isChecked = filter.includes(value);
        //console.log(isChecked);
        isChecked
            ? dispatch(FILTER_REMOVE(value))
            : dispatch(FILTER_ADD(value));
    };

    useEffect(() => {
        console.log("Render product again");
    }, [filter]);

    return (
        <div>
            <div className="md:mt-28 mt-6 ml-14">
                <div className="md:m-10 m-2 flex flex-col md:text-base text-xs">
                    <div>Filter</div>
                    {FILTER_CARD.map((item, index) => (
                        <CheckBox
                            value={item.name}
                            handleCheck={handleCheck}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
