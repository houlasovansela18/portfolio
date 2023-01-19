export default function MainPageContainer({
	MainContent,
}: {
	MainContent: () => JSX.Element;
}) {
	return (
		<main className="flex flex-1 flex-col fixed  lg:relative text-black dark:text-white">
			<MainContent />
		</main>
	);
}
