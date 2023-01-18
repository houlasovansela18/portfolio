export default function MainPageContainer({
	MainContent,
}: {
	MainContent: () => JSX.Element;
}) {
	return (
		<main className="flex flex-1 flex-col w-screen h-full mx-0 absolute text-black dark:text-white">
			<MainContent />
		</main>
	);
}
