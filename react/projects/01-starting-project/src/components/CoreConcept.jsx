/* Object destructuring from props - which allows us to extract values from props and we don't need 
to access them via props (props.title, props.image, props.description); instead we can use the variable 
names directly */
export default function CoreConcept({ image, title, description }) {
	return (
		<li>
			<img src={image} alt={title}></img>
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
}