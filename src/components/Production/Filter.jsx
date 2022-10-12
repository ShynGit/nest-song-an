import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    FILTER_ADD,
    FILTER_REMOVE,
    selectFilter,
} from "../../features/production/filterSlice";
import { Accordion } from "./Accordion";

export const Filter = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    console.log(filter);
    const handleCheck = (value) => {
        const isChecked = filter.includes(value);
        isChecked
            ? dispatch(FILTER_REMOVE(value))
            : dispatch(FILTER_ADD(value));
    };

    const handleRange = (low, hight) => {};

    useEffect(() => {
        // const fetchAccount = async () => {
        //     try {
        //         const response = await accountApi.getAllAccount();
        //         setUser(response);
        //     } catch (error) {
        //         if (error.response) console.log(error.response.data);
        //     }
        // };
        // fetchAccount();
    }, [filter]);

    return (
        <div>
            <div className="md:mt-14 mt-6 ml-10">
                <div className="m-1 flex flex-col md:text-base text-xs">
                    {/* <div className="flex mb-4 border-b-2 pb-1"> */}
                    {/* <div className="mr-3 font-semibold text-zinc-500">
                            &#43;
                        </div>
                        <div>Khối lượng</div> */}
                    <Accordion
                        handleCheck={handleCheck}
                        handleRange={handleRange}
                    />
                    {/* </div> */}
                    {/* {FILTER_CARD.map((item, index) => (
                        <CheckBox
                            value={item}
                            handleCheck={handleCheck}
                            key={index}
                        />
                    ))} */}
                    {/* <div className="flex mt-10 mb-4 border-b-2 pb-1">
                        <div className="mr-3 font-semibold text-zinc-500">
                            &#43;
                        </div>
                        <div>Giá</div>
                    </div>
                    <input type="range" /> */}
                </div>
            </div>
        </div>
    );
};
