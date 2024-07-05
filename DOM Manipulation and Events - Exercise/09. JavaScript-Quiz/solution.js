function solve() {
  const correctAnswers = [0, 1, 0]; // Index corresponds to section, value corresponds to correct answer index
  const allSections = document.querySelectorAll('section');
  let correctAnswersCount = 0;

  const allLi = document.querySelectorAll('section li');
  Array.from(allLi).forEach((li) => {
    li.addEventListener('click', function(e) {
      const section = li.parentElement.parentElement;
      const sectionIndex = Array.from(allSections).indexOf(section);
      const sectionLi = section.querySelectorAll('.quiz-answer');
      const liIndex = Array.from(sectionLi).indexOf(li);

      if (correctAnswers[sectionIndex] === liIndex) {
        correctAnswersCount++;
      }

      section.style.display = 'none';

      if (sectionIndex < 2) {
        const nextSection = allSections[sectionIndex + 1];
        nextSection.classList.remove('hidden');
        nextSection.style.display = 'block';
      } else {
        const resultUl = document.querySelector('#quizzie #results');
        resultUl.style.display = 'block';
        const result = document.querySelector('#results h1');
        result.textContent = (correctAnswersCount === 3) ? 'You are recognized as top JavaScript fan!' : `You have ${correctAnswersCount} right answers`;
      }
    });
  });
}
