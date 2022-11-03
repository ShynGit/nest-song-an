import background from "../assets/images/background-image.jpg";
import "@fontsource/dancing-script";
import { Footer } from "../components/Footer/Footer";
export const Introduction = () => {
    return (
        <>
            <div
                className="pt-40 bg-fixed relative bg-cover h-[32rem] bg-no-repeat bg-center text-right text-white"
                style={{
                    backgroundImage: `url(${background})`,
                }}
            >
                <h1 className="mr-48 font-ds text-8xl text-[#295F2D]">
                    Yến sào Song Ân
                </h1>

                <p className="mr-52 mt-1 font-ds pl-[60rem] text-gray-700 font-[600] text-[22px]">
                    Nỗ lực hết mình vì sứ mệnh đem đến sản phẩm Yến Sào chất
                    lượng nhất cho người Việt
                </p>
            </div>
            <div className="text-center">
                <div>
                    <div className="text-3xl font-bold mt-16">
                        Đặc điểm, lợi ích của yến sào
                    </div>
                    <div className="border p-[0.7px] mt-1.5 w-4/12 m-auto border-cyan-700" />
                    <div className="p-10 px-48 font-sans flex">
                        <img
                            src="https://s3-ap-southeast-1.amazonaws.com/malaysiaserver/temp/images/20191014101813_201910141018131163714168.jpg?fbclid=IwAR3tIIPTPoOANjVw25G4YdlVOcyLXa9S4HrhW164KPHo6NURXRK6n1KhVOs"
                            alt="benefit of nest"
                            className="w-full h-[24rem] rounded-md shadow-lg shadow-gray-500"
                        />
                        <div className="text-left ml-16 text-lg">
                            <p>
                                Sử dụng yến sào thường xuyên giúp bồi bổ cơ thể,
                                chống suy nhược, giúp ăn ngon miệng, ngủ sâu
                                giấc, giải tỏa căng thẳng, tăng cường trí nhớ.
                                Đặc biệt giúp phục hồi chức năng phổi, tốt cho
                                tim mạch, gan, thận sau khi nhiễm bệnh.
                            </p>
                            <p className="mt-5">
                                Theo nghiên cứu của Trung tâm Công nghệ Sinh học
                                Đại học Thủy Sản và Viện Công nghệ Sinh học,
                                trong thành phần của yến sào chứa 18 mẫu acid
                                amin trong đấy có một số loại có hàm lượng cao
                                như Aspartic acid, Serine, Tyrosine, Valine,
                                Leucine,… Hàm lượng acid Syalic chiếm 8,6% và
                                Tyrosine có tác dụng làm phục hồi các tổn thương
                                lúc bị nhiễm độc, kích thích phát triển hồng
                                cầu. Rất nhiều kết quả gần đây cho rằng, việc
                                dùng tổ yến với cơ thể nhiễm độc còn khiến hạn
                                chế mức độ sút cân, ổn định một số chỉ tiêu về
                                huyết học cũng như giúp cơ thể phục hồi một cách
                                mau chóng.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-3xl font-bold mt-16">
                        Quy trình sản xuất
                    </div>
                    <div className="border p-[0.7px] mt-1.5 w-4/12 m-auto border-cyan-700" />
                    <div className="p-10 px-48 font-sans flex">
                        <div className="text-left mr-16 text-lg">
                            <p className="">
                                Với kinh nghiệm làm việc lâu năm trong ngành Yến
                                Sào, chúng tôi tự hào tạo ra 100% Yến Sào tinh
                                khiết, không dùng chất tẩy rửa, không trộn phụ
                                gia, sử dụng công nghệ vô trùng bằng tia cực tím
                                (UV) để khử khuẩn, giúp giữ trọn thành phần dinh
                                dưỡng và màu sắc của tổ Yến.
                            </p>
                        </div>
                        <img
                            src="https://www.sieuthimiennam.vn/upload/files/yen-sao-tinh-che-la-gi.png?fbclid=IwAR3j093_tF0iWwIgXUMVc6KfHvkmgz0graICQR8mf-vBq4gATYn1TI_GDxE"
                            alt="benefit of nest"
                            className="h-[30rem] rounded-md shadow-lg shadow-gray-500"
                        />
                        {/* <p className="p-10 px-36 font-sans">
                        Với kinh nghiệm làm việc lâu năm trong ngành Yến Sào,
                        chúng tôi tự hào tạo ra 100% Yến Sào tinh khiết, không
                        dùng chất tẩy rửa, không trộn phụ gia, sử dụng công nghệ
                        vô trùng bằng tia cực tím (UV) để khử khuẩn, giúp giữ
                        trọn thành phần dinh dưỡng và màu sắc của tổ Yến.
                    </p> */}
                    </div>
                </div>
                <div>
                    <div className="text-3xl font-bold mt-16">
                        Giá trị cốt lõi
                    </div>
                    <div className="border p-[0.7px] mt-1.5 w-4/12 m-auto border-cyan-700" />
                    <div className="p-10 px-36 flex gap-5 font-sans">
                        <img
                            src="https://cdn.dribbble.com/users/249558/screenshots/15083466/media/14485069a18ab8f37aa0f9d024bab6ce.png?compress=1&resize=450x338&vertical=top&fbclid=IwAR3tIIPTPoOANjVw25G4YdlVOcyLXa9S4HrhW164KPHo6NURXRK6n1KhVOs"
                            alt="benefit of nest"
                            className=" rounded-md shadow-lg shadow-gray-500"
                        />
                        <div>
                            <p>
                                Chất lượng: Tổ yến sào Song Ân có nguồn gốc từ
                                yến nuôi và yến đảo Nha Trang 100% nguyên chất.
                                Chúng tôi cam kết các sản phẩm đều được làm sạch
                                và chưng theo phương pháp thủ công, không chất
                                tạo mùi, bảo quản.
                            </p>
                            <p>
                                Tâm huyết: Song Ân đảm bảo thu hoạch yến nhân
                                đạo, đảm bảo môi trường sống cho yến, phát triển
                                mở rộng khu vực nuôi yến.
                            </p>
                            <p>
                                Khách hàng là số 1: Thân thiện và nồng ấm trong
                                giao tiếp với khách hàng. Lắng nghe tâm tư,
                                nguyện vọng của khách để thỏa mãn tối đa nhu cầu
                                về yến
                            </p>
                            <p>
                                Phát triển bền vững: Song Ân cam kết tạo ra giá
                                trị bền vững, đặt trọng tâm và lợi ích lâu dài
                                cho quý khách hàng và đối tác.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};
