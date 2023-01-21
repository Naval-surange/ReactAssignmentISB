import React from 'react'
import data from './dishes.json';
import { FormWrapper } from './fromwrapper';

type step3Data = {
  catagory: string;
  restraunt: string;
  foodItems: string[];
  chosenFoodItems: string[];
  servingSizes: string[];
}

type step3Props = step3Data & {
  updateData: (data: Partial<step3Data>) => void;
}


export function Step3({ catagory, restraunt, foodItems, chosenFoodItems, servingSizes, updateData }: step3Props,) {

  React.useEffect(() => {
    async function filter() {

      let availablerestraunts = data["dishes"].filter((dish) => {
        return dish.availableMeals.includes(catagory);
      })
      let availablefoodItems = availablerestraunts.filter((dish) => {
        return dish.restaurant === restraunt;
      }
      )
      const uniqueFoodItems = new Set<string>();
      for (let index = 0; index < availablefoodItems.length; index++) {
        const element = availablefoodItems[index];
        uniqueFoodItems.add(element.name);
      }
      updateData({ foodItems: Array.from(uniqueFoodItems) });

    }
    filter();
  }, [])

  function AddDish() {
    let dishName = document.getElementById("foodSelector") as HTMLInputElement;
    let servingSize = document.getElementById("servingSelector") as HTMLInputElement;

    let dishNameValue = dishName.value;
    let servingSizeValue = servingSize.value;

    if (chosenFoodItems.includes(dishNameValue)) {
      let index = chosenFoodItems.indexOf(dishNameValue);
      servingSizes[index] = (parseInt(servingSizes[index]) + parseInt(servingSizeValue)).toString();
      updateData({ servingSizes: servingSizes });
    }
    else {
      updateData({ chosenFoodItems: chosenFoodItems.concat(dishNameValue), servingSizes: servingSizes.concat(servingSizeValue) });
    }
  }

  let [firstFoodItem, setfirstFoodItem] = React.useState(foodItems[0]);
  let [firstServingSize, setfirstServingSize] = React.useState("1");
  return (
    <FormWrapper title='Step 3: Add dishes '>
      <div>
        <div>
          <label className='block mb-2 text-xl font-medium text-gray-900 dark:text-white'>Please select a dish: </label>
          <select id="foodSelector" value={firstFoodItem} onChange={(e) => { setfirstFoodItem(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {foodItems.map((foodItem, index) => {
              return <option key={foodItem} value={foodItem}>{foodItem}</option>
            })}
          </select>
        </div>

        <br />

        <div>
          <label className='block mb-2 text-xl font-medium text-gray-900 dark:text-white'>Please select number of survings: </label>
          <input type="number" min="1" value={firstServingSize} id="servingSelector" onChange={(e) => { setfirstServingSize(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

        <br />
        <div className="grid justify-items-center ...">
          <button type="submit" onClick={(e) => { e.preventDefault(); AddDish() }} className="px-10 py-2 text-m font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
        </div>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      </div>
      <br />
      <div>
        {
          chosenFoodItems.length === 0 &&
          <>
            <blockquote className=" text-center text-xl italic font-semibold text-gray-900 dark:text-white">
              <p>No dishes added yet</p>
            </blockquote>
          </>
        }

        {
          chosenFoodItems.map((foodItem, index) => {
            return <div key={index}>
              <label className="text-2xl font-semibold text-gray-900 dark:text-white"> - {foodItem}: </label>
              <label className="text-2xl font-semibold text-gray-900 dark:text-white">{servingSizes[index]}x</label>
            </div>
          })
        }
      </div>
    </FormWrapper>
  )
}
