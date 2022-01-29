const quizContainer = document.querySelector('.quiz')
const form = document.querySelector('.quiz-form')
const correctAnswers = ['B', 'B', 'B', 'A', 'B']

const showScore = score => {

    document.querySelector('.feedbackDiv') 
    ? document.querySelector('.feedbackDiv').remove()
    : ''
    
    const scoreDiv = document.createElement('div')

    const colorClass = score >= 60 
    ? 'bg-success'
    : 'bg-danger'

    const feedbackMessage = score >= 60 
    ? `Score: ${score} | Eis aqui um verdadeiro amante do lolzinho. Parabéns =)`
    : `Score: ${score} | Quem sabe na próxima... Vá praticar nos campos da justiça! =(`

    scoreDiv.classList.add('feedbackDiv', 'py-2', 'text-center',
     'text-white', 'lead', 'font-weight-normal', colorClass)
    scoreDiv.textContent = feedbackMessage

    quizContainer.prepend(scoreDiv)
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