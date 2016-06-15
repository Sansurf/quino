var link = [
	{
		title: "Посмотреть трейлер",
		href: "#1"
	},
	{
		title: "Показать ещё",
		href: "#2"
	},
	{
		title: "Это всё не то",
		href: "#3"
	},
	{
		title: "Что ещё посмотреть",
		href: "#4"
	}		
];

var Button = React.createClass({
	propTypes: {
		link: React.PropTypes.shape ({
			title: React.PropTypes.string.isRequired,
			href: React.PropTypes.string.isRequired
		})
	},

	render: function() {
		var title = this.props.data.title,
			href = this.props.data.href;

		var butSet = this.props.data.map(function(item, index) {
			return (
				<div key={index}>
					<a href={item.href}>{item.title}</a>
				</div>
			)
		});

		// this.props.data.some(function(item, index) {
		// 	return (
		// 		<div key={index}>
		// 			<a href={item.href}>{item.title}</a>
		// 		</div>
		// 	)
		// });

		// switch(title) {
		// 		case "Посмотреть трейлер":
		// 		return href = "#1";
		// 		break;
		// 		case "Показать ещё":
		// 		return href = "#2";
		// 		break;
		// 		case "Это всё не то":
		// 		return href = "#3";
		// 		break;
		// 		case "Что ещё посмотреть":
		// 		return href = "#4";
		// 		break;
		// 	}

		return (
			<div className="button">
				{butSet}
			</div>
		)
	}
});


ReactDOM.render(

	<Button data={link} />,
	document.getElementById('button')
);