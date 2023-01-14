import Image from "next/image";
import profilePic from "../../public/profile.png";

export default function ProfilePicture({
	width,
	height,
}: {
	width: number;
	height: number;
}) {
	return (
		<div className={`w-${width} h-${height}`}>
			<Image
				className={`rounded-full w-${width} h-${height} shadow-lg object-fill`}
				src={profilePic}
				alt="Picture of the author"
				// width={500} automatically provided
				// height={500} automatically provided
				// blurDataURL="data:..." automatically provided
				placeholder="blur" // Optional blur-up while loading
			/>
		</div>
	);
}
