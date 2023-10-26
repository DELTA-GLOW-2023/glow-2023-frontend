import React, { FC } from "react";
import { Button } from "../components/core/Button";
import { DeleteImage } from "../services/deleteImageService";

export const PanicPage: FC = () => {
	const handlePanic = React.useCallback(async () => {
		await DeleteImage();
	}, [])

	return (
		<Button onClick={handlePanic}>
			Panic
		</Button>
	)
};
