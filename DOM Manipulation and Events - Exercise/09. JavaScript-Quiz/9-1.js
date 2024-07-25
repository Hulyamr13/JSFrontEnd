function solve() {
  const correctAnswers = [0, 1, 0];
  const sections = document.querySelectorAll('section');
  let correctAnswersCount = 0;

  document.querySelectorAll('section li').forEach(li => {
    li.addEventListener('click', () => {
      const section = li.closest('section');
      const sectionIndex = Array.from(sections).indexOf(section);
      const liIndex = Array.from(section.querySelectorAll('.quiz-answer')).indexOf(li);

      if (correctAnswers[sectionIndex] === liIndex) correctAnswersCount++;

      section.style.display = 'none';

      if (sectionIndex < sections.length - 1) {
        const nextSection = sections[sectionIndex + 1];
        nextSection.classList.remove('hidden');
        nextSection.style.display = 'block';
      } else {
        const resultUl = document.querySelector('#quizzie #results');
        resultUl.style.display = 'block';
        document.querySelector('#results h1').textContent =
          correctAnswersCount === correctAnswers.length
          ? 'You are recognized as top JavaScript fan!'
          : `You have ${correctAnswersCount} right answers`;
      }
    });
  });
}
