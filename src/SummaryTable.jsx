
import React from 'react';

const SummaryTable = ({ userAnswers, series }) => {
  // Fonction pour calculer le score
  const calculateScore = (userResponses, correctResponses) => {
    let score = 0;
    for (let i = 0; i < userResponses.length; i++) {
      if (userResponses[i] === correctResponses[i]) {
        score += 1;
      }
    }
    return score;
  };

  // Récupérer les corrections pour la série sélectionnée
  const correctResponses = {
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

  // Fonction pour générer le tableau de résumé
  const generateSummaryTable = (userResponses, correctResponses) => {
    return userResponses.map((userResponse, index) => {
      const questionNumber = index + 1;
      const correctResponse = correctResponses[index];
      const result = userResponse === correctResponse ? 'Correct' : 'Incorrect';

      return {
        Question: `Q${questionNumber}`,
        Reponses_fournies: userResponse,
        Reponses_correctes: correctResponse,
        Resultats: result,
      };
    });
  };

  // Générer le tableau de résumé en utilisant les réponses de l'utilisateur et les corrections
  const summaryTable = generateSummaryTable(userAnswers, correctResponses[series]);
  const totalScore = calculateScore(userAnswers, correctResponses[series]);
  
  return (
    <div className="summary-table">
      <h3>Récapitulatif</h3>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Reponses_fournies</th>
            <th>Reponses_correctes</th>
            <th>Resultats</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {userAnswers.map((userResponse, index) => {
            const questionNumber = index + 1;
            const correctResponse = correctResponses[series][index];
            const result = userResponse === correctResponse ? 'Correct' : 'Incorrect';
            const resultClassName = result.toLowerCase();

            return (
              <tr key={index} className={resultClassName}>
                <td>{`Q${questionNumber}`}</td>
                <td>{userResponse}</td>
                <td>{correctResponse}</td>
                <td>{result}</td>
                <td>
                  <a
                    href={`/images/${series}/${questionNumber}.jpg`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir image
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Total Score: {totalScore} / 25</p>
    </div>
  );
};

export default SummaryTable;