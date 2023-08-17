import React from "react";
import { Audio, FallingLines } from "react-loader-spinner";

const SkeletonLoading = () => {
	return (
		<div className="flex justify-center items-center h-full">
			<FallingLines
				color="#c1e8ff"
				width="100"
				visible={true}
				ariaLabel="falling-lines-loading"
			/>
		</div>
	);
};

export default SkeletonLoading;
