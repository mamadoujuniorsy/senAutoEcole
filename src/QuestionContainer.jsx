// QuestionContainer.jsx
import React from 'react';

const QuestionContainer = ({
  series,
  currentQuestion,
  userAnswers,
  onChangeAnswer,
  onNext,
  onPrev,
  onSubmit,
  submitted,
}) => {
  const choices = ['A', 'B', 'C', 'D'];

  return (
    <div key={currentQuestion} className="question-box">
      {/* Image de la question */}
      <img className="question-image"
        src={`/images/${series}/${series}-${(currentQuestion + 1).toString().padStart(2, '0')}.JPG`}
        alt={`Question ${currentQuestion + 1}`}
      />
      <div className="choices">
        {/* Options de réponse (checkboxes) */}
        {choices.map((choice) => (
          <label key={choice}>
            <input
              type="checkbox"
              value={choice}
              checked={userAnswers[currentQuestion].includes(choice)}
              onChange={() => onChangeAnswer(currentQuestion, choice)}
              disabled={submitted}
            />
            {choice}
          </label>
        ))}
      </div>
      
      {/* Boutons de navigation entre les questions */}
      <div className="navigation-buttons">
        <button type="button" onClick={onPrev} disabled={currentQuestion === 0 || submitted}>
          Précédent
        </button>
        <button type="button" onClick={onNext} disabled={currentQuestion === 24 || submitted}>
          Suivant
        </button>
      </div>

      {/* Bouton de soumission */}
      <button type="submit" onClick={onSubmit} disabled={submitted}>
        Soumettre
      </button>
    </div>
  );
};

export default QuestionContainer;
