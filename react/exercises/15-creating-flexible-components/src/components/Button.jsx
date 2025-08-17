export default function Button({ mode = "filled", children, Icon, ...props }) {
	// Todo: Build this component!

	// !!! Important:
	// Wrap the icon with a <span className="button-icon"> to achieve the target look
	// Also wrap the children prop with a <span>

	return (
		<button
			className={`${Icon ? "icon-button" : null} button ${mode}-button`}
			{...props}
		>
			{Icon ? (
				<span className="button-icon">
					<Icon></Icon>
				</span>
			) : null}
			<span>{children}</span>
		</button>
	);
}
