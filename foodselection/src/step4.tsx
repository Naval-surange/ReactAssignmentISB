import React from 'react'
import { FormWrapper } from './fromwrapper';

type step4Data = {
  catagory: string;
  restraunt: string;
  numberOfPeople: string;
  chosenFoodItems: string[];
}

type step4Props = step4Data & {
  updateData: (data: Partial<step4Data>) => void;
}


export function Step4({ catagory, numberOfPeople, restraunt, chosenFoodItems, updateData }: step4Props) {
  return (
    <FormWrapper title="Review">
      <div>
        <h1>Summary</h1>
        <p>Meal: {catagory}</p>
        <p>Number of people: {numberOfPeople}</p>
        <p>Restraunt: {restraunt}</p>
        <p>Dishes: {chosenFoodItems.join(", ")}</p>
      </div>
    </FormWrapper>
  )
}
