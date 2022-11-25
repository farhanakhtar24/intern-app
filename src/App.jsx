import React, { useState } from "react";
import { IoClose as CrossIcon } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown as DownArrow } from "react-icons/md";
import { HiOutlineMinus as MinusIcon } from "react-icons/hi";
import { GrFormClose as SmallCrossIcon } from "react-icons/gr";

let colors = [
	{
		name: "Purple",
		bgColor: "bg-purple-100",
		textColor: "text-purple-500",
		hoverBgColor: "hover:bg-purple-100",
		hoverTextColor: "hover:text-purple-500",
	},
	{
		name: "Red",
		bgColor: "bg-red-100",
		textColor: "text-red-500",
		hoverBgColor: "hover:bg-red-100",
		hoverTextColor: "hover:text-red-500",
	},
	{
		name: "Yellow",
		bgColor: "bg-yellow-100",
		textColor: "text-yellow-500",
		hoverBgColor: "hover:bg-yellow-100",
		hoverTextColor: "hover:text-yellow-500",
	},
	{
		name: "Green",
		bgColor: "bg-green-100",
		textColor: "text-green-500",
		hoverBgColor: "hover:bg-green-100",
		hoverTextColor: "hover:text-green-500",
	},
	{
		name: "Slate",
		bgColor: "bg-slate-100",
		textColor: "text-slate-500",
		hoverBgColor: "hover:bg-slate-100",
		hoverTextColor: "hover:text-slate-500",
	},
	{
		name: "Blue",
		bgColor: "bg-blue-100",
		textColor: "text-blue-500",
		hoverBgColor: "hover:bg-blue-100",
		hoverTextColor: "hover:text-blue-500",
	},
	{
		name: "Indigo",
		bgColor: "bg-indigo-100",
		textColor: "text-indigo-500",
		hoverBgColor: "hover:bg-indigo-100",
		hoverTextColor: "hover:text-indigo-500",
	},
	{
		name: "Pink",
		bgColor: "bg-pink-100",
		textColor: "text-pink-500",
		hoverBgColor: "hover:bg-pink-100",
		hoverTextColor: "hover:text-pink-500",
	},
	{
		name: "Gray",
		bgColor: "bg-gray-100",
		textColor: "text-gray-500",
		hoverBgColor: "hover:bg-gray-100",
		hoverTextColor: "hover:text-gray-500",
	},
];

const App = () => {
	const [selectedColors, setSelectedColors] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="flex flex-col justify-center items-center gap-2 w-screen h-screen">
			<div className="flex justify-between border-2 border-blue-500 w-80 rounded-md px-2 py-1">
				<div
					className={`${
						selectedColors.length > 3 ? "grid grid-cols-3" : "flex"
					} gap-1 items-center`}>
					{selectedColors?.map((item) => {
						return (
							<div
								className={`flex items-center justify-between gap-1 py-1 px-2 text-sm ${item.bgColor} ${item.textColor} rounded`}>
								{item.name}
								<SmallCrossIcon
									className={`cursor-pointer`}
									onClick={() => {
										setSelectedColors(
											selectedColors.filter(
												(color) =>
													color.name !== item.name
											)
										);
										colors.push(item);
									}}
								/>
							</div>
						);
					})}
				</div>
				<div className="flex gap-1 items-center">
					<CrossIcon
						className="text-xl cursor-pointer text-gray-500/80"
						onClick={() => {
							// ADD COLORS FROM SELECTEDCOLORS TO COLORS ARRAY
							colors = [...colors, ...selectedColors];

							// CLEAR SELECTEDCOLORS ARRAY
							setSelectedColors([]);
						}}
					/>
					<MinusIcon className="rotate-90 text-xl text-gray-500/20" />
					<DownArrow
						className="text-xl cursor-pointer text-gray-500/80"
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					/>
				</div>
			</div>
			<div
				className={`flex flex-col w-80 border-2 rounded shadow-md ${
					isOpen ? "opacity-1" : "opacity-0"
				}`}>
				{/* MAP THROUGH 5 colors of COLORS ARRAY */}

				{colors.slice(0, 3).map((item) => {
					return (
						<div
							className={`flex items-center gap-2 px-2 py-1 ${item.hoverBgColor} ${item.hoverTextColor} hover:cursor-pointer`}
							onClick={() => {
								setIsOpen(false);
								setSelectedColors((prev) => {
									if (prev) {
										return [...prev, item];
									} else {
										return [item];
									}
								});

								// remove item from colors array
								const index = colors.indexOf(item);
								if (index > -1) {
									colors.splice(index, 1);
								}
							}}>
							<div>{item.name}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default App;
