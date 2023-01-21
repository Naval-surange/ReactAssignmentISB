import React from 'react'
import { FormWrapper } from './fromwrapper';

type step4Data = {
  catagory: string;
  restraunt: string;
  numberOfPeople: string;
  servingSizes: string[];
  chosenFoodItems: string[];
}

type step4Props = step4Data & {
  updateData: (data: Partial<step4Data>) => void;
}


export function Step4({ catagory, numberOfPeople, restraunt, chosenFoodItems, servingSizes, updateData }: step4Props) {
  return (
    <FormWrapper title="Review">

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Restraunt Name
              </th>
              <th scope="col" className="px-6 py-3">
                Maal Type
              </th>
              <th scope="col" className="px-6 py-3">
                Number of People
              </th>

            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {restraunt}
              </th>
              <td className="px-6 py-4">
                {catagory}
              </td>
              <td className="px-6 py-4">
                {numberOfPeople}
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      <h3 className="text-3xl font-bold dark:text-white">Order Details</h3>
      <br />
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Dish Name
              </th>
              <th scope="col" className="px-6 py-3">
                Servings
              </th>
            </tr>

          </thead>
          <tbody>
            {chosenFoodItems.map((item, index) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item}
                  </th>
                  <td className="px-6 py-4">
                    {servingSizes[index]}
                  </td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
      </div>


    </FormWrapper>
  )
}
