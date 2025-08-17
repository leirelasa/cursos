// We can forward other props, but we need to indicate it, otherwise props like id or className wont't be forwarded
export default function Section({ title, children, ...props }) {
	return (
		<section {...props}>
			<h2>{title}</h2>
			{children}
		</section>
	);
}
