export default function TabButton(props) {
	return (
		<li>
            {/* props.children refers to the content between the <TabButton></TabButton> tags 
            and its always available in any element */}
			<button>{props.children}</button>
		</li>
	);
}
