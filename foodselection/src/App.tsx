import React from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";


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
  restraunt: "",
  foodItems: [],
  chosenFoodItems: [],
  servingSizes: [],
}

function App() {
  const [data, setData] = React.useState(initialData);

  function updateData(data: Partial<FormData>) {
    setData(d => {
      return { ...d, ...data }
    });
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
    <div className="max-w-m p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
      style={{
        border: "2px solid #ccc",
        padding: "2rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "800px",
        margin: "auto",
        marginTop: "2rem",
      }}>
      <form onSubmit={onSubmit}>

        {step}
        <div style={{
          marginTop: "1rem",
          display: "flex",
          gap: "0.5rem",
          justifyContent: "flex-end",
        }}>

          {
            currentStep !== 0 &&
            <>
              <button type="button" onClick={() => prev()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke={"#ffffff"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H6M12 5l-7 7 7 7" /></svg>
                Previous
              </button>
            </>
          }

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {currentStep !== steps.length - 1 ? "Next" : "Finish"}
            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke={"#ffffff"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7" /></svg>
          </button>

        </div>
        <div style={{ marginTop: "2em" }}>
          <ProgressBar
            percent={(currentStep + 1) / steps.length * 100}
          >
            <Step>
              {({ accomplished }) => (

                <div style={{
                  color: "white",
                  width: "30px",
                  height: "30px",
                  fontSize: "12px",
                  backgroundColor: !accomplished ? "rgba(211, 211, 211, 0.8)" : "rgba(0, 116, 217, 1)",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                >
                  {1}
                </div>
              )}
            </Step>
            <Step>
              {({ accomplished }) => (

                <div style={{
                  color: "white",
                  width: "30px",
                  height: "30px",
                  fontSize: "12px",
                  backgroundColor: !accomplished ? "rgba(211, 211, 211, 0.8)" : "rgba(0, 116, 217, 1)",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                >
                  {2}
                </div>
              )}
            </Step>
            <Step>
              {({ accomplished }) => (

                <div style={{
                  color: "white",
                  width: "30px",
                  height: "30px",
                  fontSize: "12px",
                  backgroundColor: !accomplished ? "rgba(211, 211, 211, 0.8)" : "rgba(0, 116, 217, 1)",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                >
                  {3}
                </div>
              )}
            </Step>
            <Step>
              {({ accomplished }) => (

                <div style={{
                  color: "white",
                  width: "30px",
                  height: "30px",
                  fontSize: "12px",
                  backgroundColor: !accomplished ? "rgba(211, 211, 211, 0.8)" : "rgba(0, 116, 217, 1)",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                >
                  {4}
                </div>
              )}
            </Step>
          </ProgressBar>

        </div>
      </form >
    </div >
  );
}

export default App;


