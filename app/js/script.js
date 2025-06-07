const stepOne = document.getElementById('step__one')
const stepTwo = document.getElementById('step__two')
const stepThree = document.getElementById('step__three')
const stepFour = document.getElementById('step__four')
const stepFive = document.getElementById('step__five')

const selectedStepsOne = document.getElementById('selected-steps-one')
const selectedStepsTwo = document.getElementById('selected-steps-two')
const selectedStepsThree = document.getElementById('selected-steps-three')
const selectedStepsFour = document.getElementById('selected-steps-four')

/* NEXT STEP BUTTONS */
const stepOneBtn = document.getElementById('step-one-btn')
const stepTwoBtn = document.getElementById('step-two-btn')
const stepThreeBtn = document.getElementById('step-three-btn')
const stepFourBtn = document.getElementById('step-four-btn')

/* GO BACK BUTTONS */
const previousStepTwoBtn = document.getElementById('back-two-btn')
const previousStepThreeBtn = document.getElementById('back-three-btn')
const previousStepFourBtn = document.getElementById('back-four-btn')

/* INPUT */
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email-address')
const numberInput = document.getElementById('phone-number')

/* EVENT LISTENERS */
stepOneBtn.addEventListener('click', () => {
    stepOne.classList.add('hidden')
    stepTwo.classList.remove('hidden')
    selectedStepsOne.classList.remove('selected-steps')
    selectedStepsTwo.classList.add('selected-steps')
})

stepTwoBtn.addEventListener('click', () => {
    stepTwo.classList.add('hidden')
    stepThree.classList.remove('hidden')
    selectedStepsTwo.classList.remove('selected-steps')
    selectedStepsThree.classList.add('selected-steps')
})

stepThreeBtn.addEventListener('click', () => {
    stepThree.classList.add('hidden')
    stepFour.classList.remove('hidden')
    selectedStepsThree.classList.remove('selected-steps')
    selectedStepsFour.classList.add('selected-steps')
})

stepFourBtn.addEventListener('click', () => {
    stepFour.classList.add('hidden')
    stepFive.classList.remove('hidden')
})

previousStepTwoBtn.addEventListener('click', () => {
    stepTwo.classList.add('hidden')
    stepOne.classList.remove('hidden')
    selectedStepsTwo.classList.remove('selected-steps')
    selectedStepsOne.classList.add('selected-steps')
})

previousStepThreeBtn.addEventListener('click', () => {
    stepThree.classList.add('hidden')
    stepTwo.classList.remove('hidden')
    selectedStepsThree.classList.remove('selected-steps')
    selectedStepsTwo.classList.add('selected-steps')
})

previousStepFourBtn.addEventListener('click', () => {
    stepFour.classList.add('hidden')
    stepThree.classList.remove('hidden')
    selectedStepsFour.classList.remove('selected-steps')
    selectedStepsThree.classList.add('selected-steps')
})
