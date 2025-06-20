/* VARIABLES */

/* Steps (1-5) */
const stepOne = document.getElementById('step__one')
const stepTwo = document.getElementById('step__two')
const stepThree = document.getElementById('step__three')
const stepFour = document.getElementById('step__four')
const stepFive = document.getElementById('step__five')
/* Selected Steps */
const selectedStepsOne = document.getElementById('selected-steps-one')
const selectedStepsTwo = document.getElementById('selected-steps-two')
const selectedStepsThree = document.getElementById('selected-steps-three')
const selectedStepsFour = document.getElementById('selected-steps-four')
/* Next Step Buttons */
const stepOneBtn = document.getElementById('step-one-btn')
const stepTwoBtn = document.getElementById('step-two-btn')
const stepThreeBtn = document.getElementById('step-three-btn')
const stepFourBtn = document.getElementById('step-four-btn')
/* Previous Step Buttons */
const changePlan = document.getElementById('change-plan')
const previousStepTwoBtn = document.getElementById('back-two-btn')
const previousStepThreeBtn = document.getElementById('back-three-btn')
const previousStepFourBtn = document.getElementById('back-four-btn')
/* Input Fields (Step 1) */
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email-address')
const numberInput = document.getElementById('phone-number')

/* EVENT LISTENERS */
stepOneBtn.addEventListener('click', () => {
    setTimeout(() => {
        stepOne.classList.add('hidden')
        stepTwo.classList.remove('hidden')
        selectedStepsOne.classList.remove('selected-steps')
        selectedStepsTwo.classList.add('selected-steps')
    }, 1000)

})

stepTwoBtn.addEventListener('click', () => {
    setTimeout(() => {
        stepTwo.classList.add('hidden')
        stepThree.classList.remove('hidden')
        selectedStepsTwo.classList.remove('selected-steps')
        selectedStepsThree.classList.add('selected-steps')
    }, 1000)
})

stepThreeBtn.addEventListener('click', () => {
    setTimeout(() => {
        stepThree.classList.add('hidden')
        stepFour.classList.remove('hidden')
        selectedStepsThree.classList.remove('selected-steps')
        selectedStepsFour.classList.add('selected-steps')
    }, 1000);
})

stepFourBtn.addEventListener('click', () => {
    setTimeout(() => {
        stepFour.classList.add('hidden')
        stepFive.classList.remove('hidden')
    }, 1000);
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

/*  */
/* const selectedCard1 = document.getElementById('card-selected1')
const selectedCard2 = document.getElementById('card-selected2')
const selectedCard3 = document.getElementById('card-selected3')

const summaryPlan1 = document.getElementById('summary__plan-text1')
const summaryPlan3 = document.getElementById('summary__plan-text3')


selectedCard1.addEventListener('click', () => {
    selectedCard1.classList.add('card-selected')
    selectedCard2.classList.remove('card-selected') || selectedCard3.classList.remove('card-selected')

    summaryPlan1.innerText = 'Arcade (Monthly)'
    summaryPlan3.innerText = '$9/mo'
})

selectedCard2.addEventListener('click', () => {
    selectedCard2.classList.add('card-selected')
    selectedCard1.classList.remove('card-selected') || selectedCard3.classList.remove('card-selected')

    summaryPlan1.innerText = 'Advanced (Monthly)'
    summaryPlan3.innerText = '$12/mo'
})

selectedCard3.addEventListener('click', () => {
    selectedCard3.classList.add('card-selected')
    selectedCard1.classList.remove('card-selected') || selectedCard2.classList.remove('card-selected')

    summaryPlan1.innerText = 'Pro (Monthly)'
    summaryPlan3.innerText = '$15/mo'
}) */

const plansSelected = document.querySelectorAll('.plan__monthly-cards')

plansSelected.forEach(planSelected => {
    planSelected.addEventListener('click', () => {
        plansSelected.forEach(planSel => {
            planSel.classList.remove('card-selected')
        })
        planSelected.classList.add('card-selected')
    })
});


/* ADD ONS */
const addOnsSelected = document.querySelectorAll('.input__checkbox')

addOnsSelected.forEach(addOnSelected => {
    addOnSelected.addEventListener('click', () => {
        if (addOnSelected.classList.contains('input__checkbox-selected')) {
            addOnSelected.classList.remove('input__checkbox-selected')
            addOnSelected.parentElement.classList.remove('add__ons-selected')
        } else {
            addOnSelected.classList.add('input__checkbox-selected')
            addOnSelected.parentElement.classList.add('add__ons-selected')
        }
    })
})
