import React from "react";
import { Link } from "react-router-dom";

class Recipe extends React.Component{
	state ={
		
		activeRecipe: []
	}
	componentDidMount = async () =>
		{
			const title = this.props.location.state.recipe;

		const req = await fetch
		('https://api.edamam.com/search?q='+ title +'&app_id=c5da39b4&app_key=5350b072c90deef413b5f573ed35ed89');
		const res = await req.json();
		
		this.setState({ activeRecipe: res.hits[0] });
		console.log(this.state.activeRecipe);
		
		} 
	render(){
		const recipe = this.state.activeRecipe;
				return(
					<div className="container">
						<div className="active-recipe">
							<img className="active-recipe__img" src={recipe.image}/>
							<h3 className="active-recipe__title">{recipe.title}</h3>
							<h4 className= "active-recipe__website">Publisher:
								<span><a href={recipe.source}>{recipe.source}</a></span>
							</h4>
							<p className= "active-recipe__website">Website:
								<span><a href={recipe.url}>{recipe.url}</a></span>
							</p>
							<button className="active-recipe__button">
								<Link to="/">Go Home</Link>
							</button>
						</div>
					</div>
				);
	}

};


export default Recipe;