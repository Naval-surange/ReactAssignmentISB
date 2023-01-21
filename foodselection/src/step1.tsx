import React from 'react'
import { FormWrapper } from './fromwrapper';

type step1Data = {
    catagory: string;
    catagories: string[];
    numberOfPeople: string;
}

type step1Props = step1Data & {
    updateData: (data: Partial<step1Data>) => void;
}


export function Step1({ catagory, catagories, numberOfPeople, updateData }: step1Props) {

    return (
        <FormWrapper title='Step 1: Select catagory and number of people'>
            <label>Catagory: </label>

            <select value={catagory} onChange={(e) => { updateData({ catagory: e.target.value }) }}>
                {catagories.map((catagory) => {
                    return <option key={catagory} value={catagory}>{catagory}</option>
                })}
            </select>

            <label>Number of people: </label>
            <input type="number" max="10" min="1" value={numberOfPeople} onChange={(e) => { updateData({ numberOfPeople: e.target.value }) }} />

        </FormWrapper>
    )
}
