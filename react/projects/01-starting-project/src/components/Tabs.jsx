// Wrapper component
// We can use defaults, setting them directly
export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
    // If it's a string React will search for a built-in element
    // Otherwise will render a created component
	return (
		<>
			<ButtonsContainer>{buttons}</ButtonsContainer>
			{children}
		</>
	);
}
