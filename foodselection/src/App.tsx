import React from 'react';
import { useMultistepForm } from "./formHook"
import { Step1 } from './step1';
import { Step2 } from './step2';
import { Step3 } from './step3';
import { Step4 } from './step4';

type FormData = {
  catagory: string;
  catagories: string[];
  numberOfPeople: string;
  restraunts: string[];
  restraunt: string;
  foodItems: string[];
  chosenFoodItems: string[];
  servingSizes: string[];
}

let initialData: FormData = {
  catagory: "lunch",
  catagories: ["lunch", "dinner", "breakfast"],
  numberOfPeople: "1",
  restraunts: [],
  restraunt: "heheh",
  foodItems: [],
  chosenFoodItems: [],
  servingSizes: [],
}

function App() {
  const [data, setData] = React.useState(initialData);

  function updateData(data: Partial<FormData>) {
    setData(d => {
      return { ...d, ...data }});
  }


  const { steps, currentStep, step, prev, next } = useMultistepForm([
    <Step1 {...data} updateData={updateData} />,
    < Step2 {...data} updateData={updateData} />,
    < Step3 {...data} updateData={updateData} />,
    < Step4 {...data} updateData={updateData} />
  ]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    next();
  }


  return (
    <div style={{
      position: "relative",
      background: "white",
      border: "1px solid black",
      padding: "2rem",
      margin: "1rem",
      borderRadius: ".5rem",
      fontFamily: "Arial",
    }}>
      <form onSubmit={onSubmit}>
        <div style={{
          position: "absolute",
          top: "0.5rem",
          right: "0.5rem",
        }}>
          {currentStep + 1} / {steps.length}
        </div>
        {step}
        <div style={{
          marginTop: "1rem",
          display: "flex",
          gap: "0.5rem",
          justifyContent: "flex-end",
        }}>
          {currentStep !== 0 && <button type="button" onClick={() => prev()}>Prev</button>}
          <button type="submit" >{currentStep !== steps.length - 1 ? "Next" : "Finish"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
