export default function ResponsiveBodyContainer({
	ContentBody,
}: {
	ContentBody: () => JSX.Element;
}) {
	return (
		<div className="bg-transparent mx-auto max-w-4xl px-5">
			<ContentBody />
		</div>
	);
}
