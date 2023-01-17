import Image from "next/image";
import profilePic from "../../public/profile.png";


export default function ProfilePicture({
	width,
	height,
}: {
	width: string;
	height: string;
}) {
	
	return (
		<div className={`w-${width} h-${height}`}>
			<Image
				className={`rounded-full w-${width} h-${height} shadow-lg object-fill`}
				src={profilePic}
				alt="Picture of the author"
				// width={200}
				// height={200}
				// blurDataURL="data:..."
				placeholder="blur" // Optional blur-up while loading
				
			/>
		</div>
	);
}
