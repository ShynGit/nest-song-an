import { Link } from "react-router-dom";
export const HeaderBottom = () => {
    return (
        <nav className="flex md:justify-center md:gap-8 items-center justify-around text-sm text-white py-4">
            <Link
                to="/"
                className="transition-colors duration-300 hover:text-sky-300"
                onClick={() => window.scrollTo(0, 0)}
            >
                Trang chủ
            </Link>
            <Link
                to="/introduction"
                className="hover:text-sky-300"
                onClick={() => window.scrollTo(0, 0)}
            >
                Giới thiệu
            </Link>
            <Link
                to="/production"
                className="hover:text-sky-300"
                onClick={() => window.scrollTo(0, 0)}
            >
                Sản phẩm
            </Link>
            <Link
                to="/new"
                className="hover:text-sky-300"
                onClick={() => window.scrollTo(0, 0)}
            >
                Tin tức
            </Link>
            <a href="" className="hover:text-sky-300">
                Liên hệ
            </a>
        </nav>
    );
};
