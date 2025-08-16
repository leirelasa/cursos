export default function TabButton({children, onClickAction}) {
	return (
		<li>
      {/* We can use different props like onClick, we pass the value of the function but 
      don't execute it with parenthesis */}
			<button onClick={onClickAction}>
				{/* props.children refers to the content between the <TabButton></TabButton> tags 
        and its always available in any components */}
				{children}
			</button>
		</li>
	);
}
