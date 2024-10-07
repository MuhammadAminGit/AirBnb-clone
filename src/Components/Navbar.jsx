import React from "react";
import logo from "../assets/long-logo.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "./ProfileMenu";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center sticky top-0 p-4 px-12">
			<img src={logo} alt="Airbnb Logo" className="h-8" />
			<div className="SearchBar">
				<div className="flex justify-start items-center gap-2 py-1 px-4 border border-gray-300 rounded-3xl shadow hover:shadow-md transition-shadow duration-200 cursor-pointer">
					<div className="text-sm font-semibold border-r border-gray-300 pr-2">
						Anywhere
					</div>
					<div className="text-sm font-semibold border-r border-gray-300 pr-2">
						Any Week
					</div>
					<div className="text-sm font-semibold border-r border-gray-300 pr-2 text-gray-600">
						Add Guests
					</div>
					<div className="flex justify-center items-center bg-rose-500 p-1 rounded-full text-white">
						<SearchRoundedIcon />
					</div>
				</div>
			</div>
			<div className="profile-container flex justify-end items-center gap-1">
				<div className="p-4 font-semibold rounded-3xl text-sm cursor-pointer hover:bg-gray-100">
					Airbnb your home
				</div>
				<div className="p-4 font-semibold rounded-3xl text-sm cursor-pointer hover:bg-gray-100">
                <LanguageIcon sx={{ fontSize: "1.3rem" }} />
				</div>
                <BasicMenu />
			</div>
		</nav>
	);
};

export default Navbar;
