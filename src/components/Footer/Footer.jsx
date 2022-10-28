import GitHubIcon from "@mui/icons-material/GitHub";
import { Box } from "@mui/system";
import logo from "./../../assets/icons/SongAnLogo.png";
export const Footer = () => {
    return (
        <Box className="w-full flex justify-between text-2xl bg-[#000000CC]/75 text-[#fff] px-20 items-center h-[15vh]">
            <Box>
                <GitHubIcon sx={{ width: "35px", height: "35px" }} />
            </Box>
            <Box className="flex">
                <img
                    src={logo}
                    style={{ filter: "brightness(0) invert(1)" }}
                    className="w-8 mr-2.5"
                />
                Song Ân
            </Box>
            <div className="text-xl">&copy; 2022</div>
        </Box>
    );
};
