export default function Rainbow({
	width,
	height,
}: {
	width: string;
	height: string;
}) {
	return (
		<div
			className={`rounded-tl-xl rounded-br-xl opacity-70 absolute z-0 l-0 w-${width} h-${height} blur-3xl rotate-45 animate-pulse hover:animate-none bg-gradient-to-r from-cyan-500 via-lime-800  to-purple-500`}
		></div>
	);
}
