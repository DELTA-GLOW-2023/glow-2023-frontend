import React, { FC } from "react";
import { DeleteImage } from "../services/deleteImageService";

export const PanicPage: FC = () => {
	const handlePanic = React.useCallback(async () => {
		if (confirm("Press okay to delete the current prompt") == true) {
			await DeleteImage();
		}
	}, [])

	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<button onClick={handlePanic} className="bg-red-500 text-white px-20 py-2 rounded-md shadow-lg">
				Panic
			</button>
		</div>
	)
};