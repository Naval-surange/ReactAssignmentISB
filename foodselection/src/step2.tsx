import React from 'react'
import data from './dishes.json';
import { FormWrapper } from './fromwrapper';



type step2Data = {
    catagory: string;
    restraunts: string[];
    restraunt: string;
}

type step2Props = step2Data & {
    updateData: (data: Partial<step2Data>) => void;
}


export function Step2({ catagory, restraunts, restraunt, updateData }: step2Props) {

    // make a state variable for catagory
    // make a state variable for number of people
    React.useEffect(() => {
        async function filter() {
            let availablerestraunts = data["dishes"].filter((dish) => {
                return dish.availableMeals.includes(catagory);
            })

            const uniqueRestraunts = new Set<string>();
            for (let index = 0; index < availablerestraunts.length; index++) {
                const element = availablerestraunts[index];
                uniqueRestraunts.add(element.restaurant);
            }
            updateData({ restraunt:Array.from(uniqueRestraunts)[0], restraunts: Array.from(uniqueRestraunts) });
        }
        filter();
    }, [])


    return (
        <>
            <FormWrapper title='Step 2: Select Resturant '>
            <label className='block mb-2 text-xl font-medium text-gray-900 dark:text-white'>Restaurant: </label>
                
                <select value={restraunt} onChange={(e) => { updateData({ restraunt: e.target.value }) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {restraunts.map((restraunt) => {
                        return <option key={restraunt} value={restraunt}>{restraunt}</option>
                    })}
                </select>
                
            </FormWrapper>
        </>
    )
}
