/* VARIABLES */

/* Steps (1-5) */
/* const stepOne = document.getElementById('step__one')
const stepTwo = document.getElementById('step__two')
const stepThree = document.getElementById('step__three')
const stepFour = document.getElementById('step__four')
const stepFive = document.getElementById('step__five') */
/* Selected Steps */
/* const selectedStepsOne = document.getElementById('selected-steps-one')
const selectedStepsTwo = document.getElementById('selected-steps-two')
const selectedStepsThree = document.getElementById('selected-steps-three')
const selectedStepsFour = document.getElementById('selected-steps-four') */
/* Next Step Buttons */
/* const stepOneBtn = document.getElementById('step-one-btn')
const stepTwoBtn = document.getElementById('step-two-btn')
const stepThreeBtn = document.getElementById('step-three-btn')
const stepFourBtn = document.getElementById('step-four-btn') */
/* Previous Step Buttons */
/* const changePlan = document.getElementById('change-plan')
const previousStepTwoBtn = document.getElementById('back-two-btn')
const previousStepThreeBtn = document.getElementById('back-three-btn')
const previousStepFourBtn = document.getElementById('back-four-btn') */
/* Input Fields (Step 1) */
/* const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email-address')
const numberInput = document.getElementById('phone-number') */

/* EVENT LISTENERS */
/* stepOneBtn.addEventListener('click', () => {
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
}) */
const steps = document.querySelectorAll('.steps')
const stepsBtn = document.querySelectorAll('.steps-btn')

/* stepsBtn.forEach(stepBtn => {
    stepBtn.addEventListener('click', () => {
        steps.forEach(step => {
            if (step.classList.contains('hidden')) {
                step.classList.add('hidden')
                step.nextElementSibling.classList.remove('hidden')
            }
        });
    })
}) */

stepsBtn.forEach((stepBtn, index) => {
    stepBtn.addEventListener('click', () => {
        setTimeout(() => {
            // Hide current step
            steps[index].classList.add('hidden');

            // Show the next step if it exists
            if (steps[index + 1]) {
                steps[index + 1].classList.remove('hidden');
            }
        }, 1000)
    })
})

const plansSelected = document.querySelectorAll('.plan__monthly-cards')

plansSelected.forEach(planSelected => {
    planSelected.addEventListener('click', () => {
        plansSelected.forEach(planSel => {
            planSel.classList.remove('card-selected')
        })
        planSelected.classList.add('card-selected')

    })
});

/* Monthly/Yearly Toggle */
const toggleInput = document.querySelector('.toggle-input')
const plans = document.querySelectorAll('.subscription__text')
const extraMonths = document.querySelectorAll('.plan-text3')
const planPrice1 = document.getElementById('price_one')
const planPrice2 = document.getElementById('price_two')
const planPrice3 = document.getElementById('price_three')

const addOnsPrice1 = document.getElementById('add-ons-one')
const addOnsPrice2 = document.getElementById('add-ons-two')
const addOnsPrice3 = document.getElementById('add-ons-three')



toggleInput.addEventListener('change', () => {
    plans.forEach(plan => plan.classList.remove('subscription-selected'))

    if (toggleInput.checked) {
        plans[1].classList.add('subscription-selected')
        extraMonths.forEach(extraMonth => extraMonth.classList.remove('hidden'))
        planPrice1.textContent = `$90/yr`
        planPrice2.textContent = `$120/yr`
        planPrice3.textContent = `$150/yr`

        addOnsPrice1.textContent = `$10/yr`
        addOnsPrice2.textContent = `$20/yr`
        addOnsPrice3.textContent = `$20/yr`
    } else {
        plans[0].classList.add('subscription-selected')
        extraMonths.forEach(extraMonth => extraMonth.classList.add('hidden'))
        planPrice1.textContent = `$9/mo`
        planPrice2.textContent = `$12/mo`
        planPrice3.textContent = `$15/mo`

        addOnsPrice1.textContent = `$1/mo`
        addOnsPrice2.textContent = `$2/mo`
        addOnsPrice3.textContent = `$2/mo`
    }
})


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
