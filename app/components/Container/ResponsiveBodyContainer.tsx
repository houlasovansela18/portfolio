import React from "react";

type ResponsiveBodyContainerProps = {
	children: React.ReactNode;
};
export default function ResponsiveBodyContainer(
	props: ResponsiveBodyContainerProps
): JSX.Element {
	return (
		<div className="bg-transparent mx-auto max-w-4xl px-5">
			{props.children}
		</div>
	);
}
