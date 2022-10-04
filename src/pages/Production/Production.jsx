import { Filter } from "../../components/Production/Filter";
import { List } from "../../components/Production/List";

export const Production = () => {
    return (
        <div>
            <div className="flex md:pt-16 pt-20">
                <div className="md:w-2/12 w-3/12 font-verda">
                    <Filter />
                </div>
                <div className="md:w-10/12 w-9/12 md:p-16 p-4">
                    <div>
                        <div className="flex flex-col">
                            <div className="font-semibold md:text-3xl text-md md:mb-8 mb-5  text-black">
                                Tất cả sản phẩm
                            </div>
                            <List />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
