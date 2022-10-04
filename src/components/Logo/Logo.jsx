import { Fragment } from "react";

export const Logo = () => {
    return (
        <div className="text-center">
            <div>
                <img src="SongAnLogo.png" className="w-40 mr-10" />
            </div>
            <div>
                <p
                    className="text-3xl font-bold mr-6"
                    style={{
                        fontFamily: '"Brush Script MT", cursive',
                        color: "rgba(90, 54, 20, 255)",
                    }}
                >
                    Song Ân
                </p>
            </div>
        </div>
    );
};
