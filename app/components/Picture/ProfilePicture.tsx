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
		<Image
			className={`rounded-full w-${width} h-${height} object-contain`}
			src={profilePic}
			alt="Picture of the author"
			placeholder="blur"
		/>
	);
}
