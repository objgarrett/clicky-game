import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import imagecards from "./imagecards.json";
import "./App.css";

class App extends Component {
    state = {
        imagecards,
        score: 0,
        topScore: 0,
    };

    removeCard = id => {
        const imagecards = this.state.imagecards.filter(card => card.id !== id);
        this.setState({ imagecards, score: this.state.score + 1 });
      };

    render() {
        return (
            <div className="container">    
                <Navbar 
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <Wrapper>
                    <Title>Clicky Game - Dawson's Creek Edition</Title>
                        {imagecards
                            .sort((a, b) => 0.5 - Math.random())
                            .map(card => (
                            <ImageCard
                                removeCard={this.removeCard}
                                id={card.id}
                                key={card.id}
                                name={card.name}
                                image={card.image}      
                        />))}
                </Wrapper>    
            </div>
        );
    }
}

export default App;