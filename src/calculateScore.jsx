const calculateScore = (userResponses, correctResponses) => {
  let score = 0;
  for (let i = 0; i < userResponses.length; i++) {
    if (userResponses[i] === correctResponses[i]) {
      score += 1;
    }
  }
  return score;
};

export default calculateScore;