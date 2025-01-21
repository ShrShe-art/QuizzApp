// Score.js

import React, { Component } from 'react';
import '../App.css'

class Score extends Component {
    render() {
        const { score, onNextQuestion } = this.props; 
        const totalQuestions = 5; // Total number of questions
        const getScoreCategory = (score, totalQuestions) => {
            const percentage = (score / totalQuestions) * 100;
        
            if (percentage >= 75) return "Well done!!";
            if (percentage >= 45) return "Good job!!";
            return "You can do better!";
          };

        const scoreCategory = getScoreCategory(score, totalQuestions);

        return (
            <div>
                <h2>Results</h2>
                <h4>Your score: {score}/{totalQuestions}</h4>
                <p>Performance: {scoreCategory}</p>
            </div>
        );
    }
}

export default Score;
