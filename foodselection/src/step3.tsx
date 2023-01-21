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
          <label>please select a dish: </label>
          <select id="foodSelector" value={firstFoodItem} onChange={(e) => { setfirstFoodItem(e.target.value) }}>
            {foodItems.map((foodItem, index) => {
              return <option key={foodItem} value={foodItem}>{foodItem}</option>
            })}
          </select>
        </div>
        <br />
        <div>
          <label>please select a serving size: </label>
          <input type="number" min="1" value={firstServingSize} id="servingSelector" onChange={(e) => { setfirstServingSize(e.target.value) }} />
        </div>

        {/* Add button */}
        <div>
          <button onClick={(e) => { e.preventDefault(); AddDish() }}>Add</button>
        </div>
      </div>
      <br />
      <div>
        {chosenFoodItems.map((foodItem, index) => {
          return <div key={index}>
            <label>{foodItem}: </label>
            <label>{servingSizes[index]}
            </label>
          </div>
        })
        }
      </div>
    </FormWrapper>
  )
}
