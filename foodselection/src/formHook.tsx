import { ReactElement, useState } from 'react'

export function useMultistepForm(steps: ReactElement[]) {
    const [currentStep, setCurrentSetp] = useState(0);

    function next() {
        setCurrentSetp(i => {
            if (i + 1 >= steps.length) {
                return i;
            }
            return i + 1;
        });
    }

    function prev() {
        setCurrentSetp(i => {
            if (i - 1 < 0) {
                return i;
            }
            return i - 1;
        });
    }

    function goTo(step: number) {
        setCurrentSetp(step);
    }

    return {
        currentStep,
        step: steps[currentStep],
        steps,
        next,
        prev,
        goTo
    }

}

