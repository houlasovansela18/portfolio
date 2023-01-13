import Image from "next/image";
import profilePic from "../../public/profile.png";

export default function ProfilePicture() {
	return (
		<div className="relative">
			<Image
				className="rounded-full w-60 h-60"
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
