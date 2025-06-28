/* VARIABLES */
const steps = document.querySelectorAll('.steps')
const stepsBtn = document.querySelectorAll('.steps-btn')
const stepsSelected = document.querySelectorAll('.sidebar__circle')
const lastStepsBtn = document.querySelectorAll('.last-steps-btn')

const plansSelected = document.querySelectorAll('.plan__monthly-cards')

const toggleInput = document.querySelector('.toggle-input')
const plans = document.querySelectorAll('.subscription__text')
const extraMonths = document.querySelectorAll('.plan-text3')
const planPrice1 = document.getElementById('price_one')
const planPrice2 = document.getElementById('price_two')
const planPrice3 = document.getElementById('price_three')

const addOnsPrice1 = document.getElementById('add-ons-one')
const addOnsPrice2 = document.getElementById('add-ons-two')
const addOnsPrice3 = document.getElementById('add-ons-three')

const addOnsSelected = document.querySelectorAll('.input__checkbox')

/* Next Step */
stepsBtn.forEach((stepBtn, index) => {
    stepBtn.addEventListener('click', () => {
        setTimeout(() => {
            // Hide current step
            steps[index].classList.add('hidden')
            stepsSelected[index].classList.remove('selected-steps')

            // Show the next step if it exists
            if (steps[index + 1]) {
                steps[index + 1].classList.remove('hidden');
                stepsSelected[index + 1].classList.add('selected-steps')
            }
        }, 1000)
    })
})

/* Previous Step */
lastStepsBtn.forEach((lastStepBtn, index) => {
    lastStepBtn.addEventListener('click', () => {
        steps[index].classList.add('hidden')
        stepsSelected[index].classList.remove('selected-steps')

        if (steps[index]) {
            steps[index - 1].classList.remove('hidden')
            stepsSelected[index - 1].classList.add('selected-steps')
        }
    })
})

/* Selected Plans */
plansSelected.forEach(planSelected => {
    planSelected.addEventListener('click', () => {
        plansSelected.forEach(planSel => {
            planSel.classList.remove('card-selected')
        })
        planSelected.classList.add('card-selected')
    })
})

/* Monthly/Yearly Toggle */
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


/* Add Ons */
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
