import { Link } from "react-router-dom";

export const SignUp = () => {
    return (
        <section className="h-screen">
            <div
                className="h-full w-full text-gray-800 bg-fixed"
                style={{
                    backgroundImage: "url(bg-image.jpg)",
                    backgroundSize: "100%",
                    backgroundPosition: "100%",
                }}
            >
                <div className="flex flex-col xl:justify-center lg:justify-center justify-center items-center flex-wrap h-full">
                    <div className="md:w-fit w-11/12 border border-gray-300 bg-white flex blocks rounded-lg p-10 pb-7 shadow-2xl shadow-gray-800">
                        <div className="lg:w-80 w-full px-4 md:px-0">
                            <form>
                                <div className="text-center font-bold text-xl my-3 ">
                                    ĐĂNG KÝ
                                </div>
                                <div>
                                    <div className="flex">
                                        <input
                                            className="p-1.5 pl-3 focus:ring-1 focus:ring-blue-500 focus:outline-none appearance-none w-7/12 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-sm ring-1 ring-gray-300 mt-3"
                                            type="text"
                                            aria-label="Filter projects"
                                            placeholder="Họ"
                                            maxLength={70}
                                            minLength={1}
                                            required
                                        />
                                        <input
                                            className="p-1.5 pl-3 ml-4 focus:ring-1 focus:ring-blue-500 focus:outline-none appearance-none w-5/12 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-sm ring-1 ring-gray-300 mt-3"
                                            type="text"
                                            aria-label="Filter projects"
                                            placeholder="Tên"
                                            maxLength={70}
                                            minLength={1}
                                            required
                                        />
                                    </div>
                                    <input
                                        className="p-1.5 pl-3 focus:ring-1 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-sm ring-1 ring-gray-300 mt-3"
                                        type="text"
                                        aria-label="Filter projects"
                                        placeholder="Tên đăng nhập"
                                        maxLength={70}
                                        minLength={1}
                                        required
                                    />
                                    <input
                                        className="p-1.5 pl-3 focus:ring-1 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-sm ring-1 ring-gray-300 mt-3"
                                        type="password"
                                        aria-label="Filter projects"
                                        placeholder="Mật khẩu"
                                        maxLength={70}
                                        minLength={1}
                                        required
                                    />
                                    <input
                                        className="p-1.5 pl-3 focus:ring-1 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-sm ring-1 ring-gray-300 mt-3"
                                        type="text"
                                        aria-label="Filter projects"
                                        placeholder="Địa chỉ"
                                        maxLength={70}
                                        minLength={1}
                                        required
                                    />
                                    <input
                                        className="p-1.5 pl-3 focus:ring-1 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-sm ring-1 ring-gray-300 mt-3"
                                        type="text"
                                        aria-label="Filter projects"
                                        placeholder="Số điện thoại"
                                        pattern="[0-9]{10}"
                                        maxLength={70}
                                        minLength={1}
                                        required
                                        ggdfgfj
                                    />
                                </div>
                                <button className="w-full mt-5 inline-block p-2.5 hover:bg-gray-700 text-white font-medium text-xs leading-snug uppercase rounded shadow-gray-400 bg-gray-500 transition duration-100 ease-in-out">
                                    Đăng ký
                                </button>
                                <div className="flex items-center my-4">
                                    <div className="flex-1 border-t border-gray-300 mt-0.5" />
                                </div>

                                <div className="text-sm text-center opacity-60 mt-4">
                                    Bạn đã có tài khoản?&nbsp;
                                    <Link to="/sign-in">
                                        <span className="text-blue-600 font-bold active:text-blue-400">
                                            Đăng nhập
                                        </span>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
