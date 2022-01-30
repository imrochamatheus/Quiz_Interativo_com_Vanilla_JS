const quizContainer = document.querySelector('.quiz')
const feedback = document.querySelector('.feedback')
const button = document.querySelector('.try_again')
const form = document.querySelector('.quiz-form')

const correctAnswers = ['B', 'B', 'B', 'A', 'B']

const displayToggle = element => {
    element.classList.toggle('d-none')
}

const showScore = score => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    setTimeout(() => {
        let scoreCount = 0
        const scoreAnimation =  setInterval(() => {
            
            if (scoreCount === score ) {
                clearInterval(scoreAnimation)
            } 
            
            feedback.querySelector('span').textContent = `${scoreCount}%`
            scoreCount++    

        }, 10)

        displayToggle(feedback)
    },500)
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

button.addEventListener('click', () => {

    const radioButtons = document.querySelectorAll('[type=radio]')
    displayToggle(feedback)
    
    radioButtons.forEach(button => {
        button.checked
        ? button.checked = 0
        : ''
    })
})
