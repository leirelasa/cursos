// Wrapper component
export default function Tabs({ children, buttons, ButtonsContainer }) {
    // If it's a string React will search for a built-in element
    // Otherwise will render a created component
	return (
		<>
			<ButtonsContainer>{buttons}</ButtonsContainer>
			{children}
		</>
	);
}
