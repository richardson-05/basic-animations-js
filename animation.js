const DEFAULTVALUES = {
    // Global functions parameters
    unit: "px",
    duration: 1000,
    delay: 0,

    // move function parameters
    x: 0,
    y: 0,
    transitionMode: "ease",

    // comeFrom function parameters
    fromX: 0,
    toX: 100,
    fromY: 0,
    toY: 0,

    // stepsAnimation function parameters
    stepsTransitionMode: "linear",

    // jump function parameters
    jumpTimes: 2,
    jumpSize: 30

    // rotate function parameters
    // ...
    
    // vibration function parameters
    // ...
    
    // flip function parameters
    // ...
    
    // opacity
    // ...
    
    // scale
    // ...
}

/**
 * 
 * @param {HTMLElement} element - Element to animate
 * @param {{Object}} options - Options to animate the selected element
 * @param {option} ... - Write the others posible parameters
 */
function move(element, options) { // options = {} : x, y, duration, delay
    setTimeout(() => {
        console.log("Ahora que se acabó el delay")
        element.style.translate = `${options.x}${options.unit ?? DEFAULTVALUES.unit}
        ${options.y}${options.unit ?? DEFAULTVALUES.unit}`

        element.style.transition = `translate ${options.duration ?? DEFAULTVALUES.duration}ms
        ${options.transitionMode ?? DEFAULTVALUES.transitionMode}`
    }, options.delay ?? DEFAULTVALUES.delay);
}

/**
 * 
 * @param {HTMLElement} element - Element to animate
 * @param {{Object}} options - Options to animate the selected element
 * @param {option} fromX - Origin position to animate the element
 * @param {option} ... - Write the others posible parameters
 */
function comeFrom(element, options) {
    element.style.translate = `${options.fromX ?? DEFAULTVALUES.fromX}${options.unit ?? DEFAULTVALUES.unit}
    ${options.fromY ?? DEFAULTVALUES.fromY}${options.unit ?? DEFAULTVALUES.unit}`

    console.log(`Form: ${element.style.translate} : X Y`)

    setTimeout(() => {
        element.style.translate = `${options.toX ?? DEFAULTVALUES.toX}${options.unit ?? DEFAULTVALUES.unit}
        ${options.toY ?? DEFAULTVALUES.toY}${options.unit ?? DEFAULTVALUES.unit}`

        console.log(`To: ${element.style.translate} : X Y`)

        element.style.transition = `translate ${options.duration ?? DEFAULTVALUES.duration}ms
        ${options.transitionMode ?? DEFAULTVALUES.transitionMode}`
    }, options.delay ?? DEFAULTVALUES.delay);
}

/**
 * 
 * @param {HTMLElement} element - Element to animate
 * @param {{Object}} options - Options to animate the selected element
 */
function stepsAnimation(element, steps) {
    const stepList = Object.keys(steps)
    //console.log(Object.values(steps))

    console.log("Steps:")
    console.log(stepList)
    //console.log(`timeBetweenSteps = ${timeBetweenSteps}ms`)

    const totalSteps = stepList.length
    console.log(`totalSteps = ${totalSteps}`)

    console.log(steps)

    //console.log('\n\n')

    //const workingStep = 0
    //console.log(steps[stepList[workingStep]])

    //console.log(steps[stepList[workingStep]].move)

    function executeStep(actualStep) {
        if (actualStep === totalSteps) return

        console.log(`\n\nStep name: "${stepList[actualStep]}" - only for debugging`)

        console.log(`actualStep = ${actualStep}`)


        if (actualStep < totalSteps) {

            //const stepName = stepList[index];
            //const stepFunction = steps[stepName];

            //console.log(`Executing step: ${stepName}`);
            //stepFunction(element);

            console.log("aki = ")
            console.log(steps[stepList[actualStep]])

            if (steps[stepList[actualStep]].hasOwnProperty("move")) {
                console.log("Tiene la función move")

                console.log("Parámetros de la función move:")
                console.log(steps[stepList[actualStep]].move)
                move(element, {
                    x: steps[stepList[actualStep]].move.x,
                    y: steps[stepList[actualStep]].move.y,
                    transitionMode: steps[stepList[actualStep]].move.transitionMode
                        ?? DEFAULTVALUES.stepsTransitionMode,
                    delay: steps[stepList[actualStep]].move.delay,
                    duration: steps[stepList[actualStep]].move.duration,
                })
                //alert(steps[stepList[actualStep]].move.duration)
            }

            //alert(steps[stepList[actualStep]].move.duration)
            setTimeout(() => executeStep(actualStep + 1), steps[stepList[actualStep]].move.duration ?? DEFAULTVALUES.duration);
        }
    }
    executeStep(0) // Execute the first step
}

function jump(element, options) {
    
}

function rotate(element, options) {

}

function vibration(element, options) {

}

function flip(element, options) {

}

function opacity (element, options) {

}

function scale(element, options) {

}