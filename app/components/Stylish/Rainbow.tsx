import React from "react";

export default function Rainbow({
	width,
	height,
}: {
	width: string;
	height: string;
}) :JSX.Element{
	return (
		<div
			className={`rounded-full z-0 l-0 w-${width} h-${height} blur-3xl rotate-45 animate-pulse bg-gradient-to-r from-cyan-500 via-slate-800  to-purple-500`}
		/>
	);
}
