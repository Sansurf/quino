var link = [
	{
		title: "Посмотреть трейлер",
		src: ""
	},
	{
		title: "Показать ещё",
		src: ""
	},
	{
		title: "Это всё не то",
		src: ""
	},
	{
		title: "Что ещё посмотреть",
		src: ""
	}		
];

var Button = React.createClass({
	render: function() {
		var button = this.props.link;
		var buttonTemplate = button.map(function(item, index) {
				return (
					<div key={index}>
						<p className="oneButton">{item.title}</p>
					</div>
				)
		});
				
		return (
			<div className="button">
				{buttonTemplate}
			</div>
		)
	}
});


ReactDOM.render(

	<Button link = {link} />,
	document.getElementById('button')
);
