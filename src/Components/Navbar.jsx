import React, { useState, useEffect } from "react";
import logo from "../assets/long-logo.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "./ProfileMenu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeLink, setActiveLink] = useState("Stays");

	// Track scroll event
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleSearchPopup = () => {
		setIsSearchOpen(!isSearchOpen);
	};

	const handleLinkClick = (link) => {
		setActiveLink(link);
	};

	return (
		<div
			className={`flex flex-col sticky top-0 p-4 px-12 bg-white z-50 shadow-md transition-all duration-300 ease-in-out ${
				isScrolled || isSearchOpen ? "h-20 py-2" : "h-auto py-4"
			}`}
		>
			<nav className="flex justify-between items-center w-full">
				<div className="flex-1 flex justify-start">
					<img
						src={logo}
						alt="Airbnb Logo"
						className="h-8 cursor-pointer"
					/>
				</div>

				{/* Center Links or Search bar */}
				<div className="flex-grow flex justify-center">
					{isScrolled ? (
						<div
							className="flex justify-center items-center py-1 px-2 border border-gray-300 rounded-full shadow-md hover:shadow-lg cursor-pointer max-w-md mx-auto"
							onClick={toggleSearchPopup}
						>
							<div className="text-sm font-semibold px-4">
								Anywhere
							</div>
							<div className="text-sm font-semibold border-l border-gray-300 px-4">
								Any Week
							</div>
							<div className="text-sm font-semibold border-l border-gray-300 px-4 text-gray-600">
								Add Guests
							</div>
							<div className="bg-rose-500 p-2 rounded-full text-white ml-2">
								<SearchRoundedIcon />
							</div>
						</div>
					) : (
						<div className="flex gap-2 text-sm font-semibold">
							<div
								className={`text-sm cursor-pointer transition duration-200 hover:bg-gray-100 p-3 rounded-full ${
									activeLink === "Stays"
										? "text-black"
										: "text-gray-600"
								}`}
								onClick={() => handleLinkClick("Stays")}
							>
								Stays
							</div>
							<div
								className={`text-sm cursor-pointer transition duration-200 hover:bg-gray-100 p-3 rounded-full ${
									activeLink === "Experiences"
										? "text-black"
										: "text-gray-600"
								}`}
								onClick={() => handleLinkClick("Experiences")}
							>
								Experiences
							</div>
							<div
								className={`text-sm cursor-pointer transition duration-200 hover:bg-gray-100 p-3 rounded-full ${
									activeLink === "Online Experiences"
										? "text-black"
										: "text-gray-600"
								}`}
								onClick={() =>
									handleLinkClick("Online Experiences")
								}
							>
								Online Experiences
							</div>
						</div>
					)}
				</div>

				{/* Profile and Menu section with equal width */}
				<div className="flex-1 flex justify-end items-center gap-4">
					<div className="text-sm cursor-pointer transition duration-200 hover:bg-gray-100 p-3 rounded-full">
						Airbnb your home
					</div>
					<div className="cursor-pointer transition duration-200 hover:bg-gray-100 p-3 rounded-full">
						<LanguageIcon sx={{ fontSize: "1.3rem" }} />
					</div>
					<BasicMenu />
				</div>
			</nav>

			{/* Search Bar below links when at the top */}
			{!isScrolled && (
				<div
					className="flex justify-center items-center mt-4 py-1 px-2 border border-gray-300 rounded-full shadow-md hover:shadow-lg cursor-pointer max-w-md mx-auto"
					onClick={toggleSearchPopup}
				>
					<div className="text-sm font-semibold px-4">Anywhere</div>
					<div className="text-sm font-semibold border-l border-gray-300 px-4">
						Any Week
					</div>
					<div className="text-sm font-semibold border-l border-gray-300 px-4 text-gray-600">
						Add Guests
					</div>
					<div className="bg-rose-500 p-2 rounded-full text-white ml-2">
						<SearchRoundedIcon />
					</div>
				</div>
			)}

			{/* Search Popup */}
			{isSearchOpen && (
				<div className="absolute top-20 left-0 right-0 mx-auto w-[90%] max-w-4xl bg-white shadow-lg rounded-lg p-6 z-50">
					{/* Close button */}
					<div className="flex justify-end">
						<CloseIcon
							className="cursor-pointer"
							onClick={toggleSearchPopup}
						/>
					</div>

					{/* Search options */}
					<div className="grid grid-cols-4 gap-4 mt-4">
						{/* Where */}
						<div className="flex flex-col border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200">
							<span className="text-xs font-semibold text-gray-400">
								Where
							</span>
							<span className="text-sm font-medium">
								Search destinations
							</span>
						</div>

						{/* Check-in */}
						<div className="flex flex-col border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200">
							<span className="text-xs font-semibold text-gray-400">
								Check-in
							</span>
							<span className="text-sm font-medium">
								Add dates
							</span>
						</div>

						{/* Check-out */}
						<div className="flex flex-col border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200">
							<span className="text-xs font-semibold text-gray-400">
								Check-out
							</span>
							<span className="text-sm font-medium">
								Add dates
							</span>
						</div>

						{/* Who */}
						<div className="flex flex-col border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200">
							<span className="text-xs font-semibold text-gray-400">
								Who
							</span>
							<span className="text-sm font-medium">
								Add guests
							</span>
						</div>
					</div>

					{/* Search Button */}
					<div className="flex justify-center mt-6">
						<button className="bg-rose-500 text-white py-2 px-6 rounded-full">
							Search
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
