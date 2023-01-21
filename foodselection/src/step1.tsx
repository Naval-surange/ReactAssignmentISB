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
            <div>
                <label className='block mb-2 text-xl font-medium text-gray-900 dark:text-white'>Catagory: </label>
                <select value={catagory} onChange={(e) => { updateData({ catagory: e.target.value }) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {catagories.map((catagory) => {
                        return <option key={catagory} value={catagory}>{catagory}</option>
                    })}
                </select>
            </div>
            <br />
            <label className='block mb-2 text-xl font-medium text-gray-900 dark:text-white' >Number of people: </label>
            <input type="number" max="10" min="1" value={numberOfPeople} onChange={(e) => { updateData({ numberOfPeople: e.target.value }) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

        </FormWrapper>
    )
}
