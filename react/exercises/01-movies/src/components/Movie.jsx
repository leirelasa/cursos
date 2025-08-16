export default function Movie({
	title,
	description,
	image,
	onClick,
	isFavorite,
}) {
	return (
		<li>
			<img src={image} alt={title}></img>
			<h3>{title}</h3>
			<p>{description}</p>
			<button
				className={isFavorite ? "active" : undefined}
				onClick={onClick}
			>
				{isFavorite ? "Added" : "Add to favorites"}
			</button>
		</li>
	);
}
