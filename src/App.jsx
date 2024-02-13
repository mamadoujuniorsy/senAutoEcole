// App.jsx
import React, { useState } from 'react';
import SeriesSelector from './SeriesSelector';
import QuestionContainer from './QuestionContainer';
import SummaryTable from './SummaryTable';
import calculateScore from './calculateScore';
import './App.css';
const App = () => {
  const series = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12'];
  const [selectedSeries, setSelectedSeries] = useState(series[0]);
  const [userAnswers, setUserAnswers] = useState(Array(25).fill(''));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [redirectToResults, setRedirectToResults] = useState(false);

  const handleChangeSeries = (e) => {
    setSelectedSeries(e.target.value);
    setUserAnswers(Array(25).fill(''));
    setSubmitted(false);
    setCurrentQuestion(0);
  };

  const handleInputChange = (index, choice) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] += choice;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < 24) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Réponses de l\'utilisateur:', userAnswers);
    const score = calculateScore(userAnswers, selectedSeries);
    console.log('Score:', score);
    const seriesCorrectAnswers = {
      B1: ['BD', 'AD', 'B', 'BC', 'B', 'A', 'B', 'B', 'AD', 'B', 'C', 'BC', 'AD', 'AC', 'B', 'B', 'B', 'A', 'B', 'B', 'A', 'B', 'A', 'B', 'B'],
      B2: ['AD', 'BD', 'BD', 'B', 'AD', 'A', 'AD', 'B', 'BD', 'B', 'B', 'BD', 'A', 'B', 'A', 'B', 'B', 'BC', 'A', 'B', 'A', 'A', 'AC', 'BD', 'BC'],
      B3: ['BD', 'BC', 'B', 'BD', 'B', 'A', 'BC', 'B', 'A', 'BC', 'A', 'AD', 'B', 'BC', 'B', 'A', 'BC', 'A', 'B', 'B', 'A', 'A', 'AC', 'BD', 'B'],
      B4: ['BD', 'AD', 'B', 'AD', 'AC', 'A', 'B', 'A', 'B', 'BC', 'B', 'B', 'A', 'B', 'A', 'B', 'B', 'A', 'BC', 'AD', 'C', 'A', 'BC', 'BD', 'BC'],
      B5: ['AD', 'BD', 'BD', 'BC', 'AD', 'B', 'B', 'B', 'C', 'B', 'B', 'A', 'A', 'B', 'B', 'B', 'A', 'A', 'BD', 'B', 'A', 'A', 'BC', 'AD', 'AD'],
      B6: ['AD', 'BD', 'B', 'A', 'B', 'A', 'B', 'B', 'AD', 'A', 'B', 'B', 'A', 'B', 'A', 'A', 'BD', 'AC', 'BC', 'AD', 'AC', 'A', 'A', 'A', 'AD'],
      B7: ['AD', 'BD', 'BD', 'A', 'A', 'B', 'BD', 'B', 'B', 'A', 'B', 'B', 'B', 'BC', 'A', 'A', 'BC', 'B', 'A', 'A', 'B', 'B', 'B', 'AD', 'AC'],
      B8: ['BD', 'A', 'BC', 'BC', 'AD', 'B', 'A', 'B', 'B', 'A', 'AD', 'A', 'BC', 'A', 'A', 'B', 'B', 'B', 'B', 'BC', 'A', 'BD', 'A', 'B', 'B'],
      B9: ['AC', 'BD', 'AC', 'B', 'BD', 'A', 'A', 'A', 'B', 'B', 'BC', 'A', 'AD', 'B', 'AD', 'B', 'AD', 'BC', 'B', 'A', 'B', 'BC', 'A', 'BC', 'B'],
      B10: ['AD', 'B', 'BD', 'B', 'BC', 'BC', 'AD', 'B', 'B', 'B', 'BC', 'B', 'BC', 'BD', 'BC', 'B', 'BD', 'B', 'BC', 'B', 'B', 'B', 'BC', 'A', 'BD'],
      B11: ['AD', 'BD', 'BD', 'AD', 'A', 'B', 'A', 'B', 'BC', 'B', 'B', 'B', 'AC', 'A', 'B', 'AC', 'A', 'BC', 'A', 'BC', 'B', 'A', 'AD', 'B', 'A'],
      B12: ['AD', 'BD', 'B', 'BC', 'B', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'BC', 'AD', 'B', 'BC', 'BC', 'A', 'A', 'B', 'A', 'A', 'B', 'BC', 'B'],
    };
    setRedirectToResults(true);
  };

  return (
    <div className="code-route-app">
      <h1>Mini Application de Code de la Route</h1>
      <SeriesSelector
        series={series}
        selectedSeries={selectedSeries}
        onChangeSeries={handleChangeSeries}
      />
      <QuestionContainer
        series={selectedSeries}
        currentQuestion={currentQuestion}
        userAnswers={userAnswers}
        onChangeAnswer={handleInputChange}
        onNext={handleNext}
        onPrev={handlePrev}
        onSubmit={handleSubmit}
        submitted={submitted}
      />
      {submitted && <SummaryTable userAnswers={userAnswers} series={selectedSeries} />}
    </div>
  );
};

export default App;
