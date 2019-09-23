import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import Recipes from "./components/Recipes";

// const API_ID = "c5da39b4";
// const API_KEY = "5350b072c90deef413b5f573ed35ed89";

class App extends Component {

  state = {

     recipes: []
  }


	getRecipe = async (e) => {

	    const recipeName = e.target.elements.recipeName.value;
	    e.preventDefault();
      const response = await fetch('https://api.edamam.com/search?q='+ recipeName +'&app_id=c5da39b4&app_key=5350b072c90deef413b5f573ed35ed89&from=0&to=24&calories=591-722&health=alcohol-free');
      const data = await response.json();
      this.setState({ recipes: data.hits });
      console.log(this.state.recipes);
      // console.log(data);
  }

  componentDidMount = async (e) => {
      const response = await fetch('https://api.edamam.com/search?q=cake&app_id=c5da39b4&app_key=5350b072c90deef413b5f573ed35ed89&from=0&to=24&calories=591-722&health=alcohol-free');
      const data = await response.json();
      this.setState({ recipes: data.hits });
      console.log(this.state.recipes);
      // console.log(data);



    
  }

     

  
  

render(){
  return (

              <div className ="App">
                <header className="App-header">
                  <h1 className="App-title">Cooking King</h1>
                  <h6 className="App-subtitle">We Provide Thousands of Recipes</h6>              
                </header>
                    < Form getRecipe={this.getRecipe} />
                  <Recipes recipes={ this.state.recipes}/>
                
              </div>

    );
  }

}

export default App;
