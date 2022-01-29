const quizContainer = document.querySelector('.quiz')
const feedback = document.querySelector('.feedback')
const form = document.querySelector('.quiz-form')
const correctAnswers = ['B', 'B', 'B', 'A', 'B']

const showScore = score => {
    feedback.querySelector('span').textContent = `${score}%`
    feedback.setAttribute('display', 'block')

    window.scrollTo({ top: 0, behavior: 'smooth' })
}

form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
    ]

    userAnswers.forEach((userAnswer, index) => {
        userAnswer === correctAnswers[index] 
        ? score += 20
        : ''
    })
    
    showScore(score)
})