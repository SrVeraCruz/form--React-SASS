import { GrFormNext, GrFormPrevious } from "react-icons/gr"

import { FiSend } from "react-icons/fi"

import UserForm from "./components/UserForm"
import ReviewForm from "./components/ReviewForm"
import Thanks from "./components/Thanks"
import Steps from "./components/Steps"

//Hooks
import { useForm } from "./hooks/useForm"

import "./styles/components/app.sass"

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];
  
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents)

  return (
    <div className="app">
      <div className="header">
        <h2>Leave your review</h2>
        <p>
          We are happy with your purchase, use the form below to rate the product
        </p>
      </div>
      <div className='form-container'>
        <Steps currentStep={currentStep} />
        <form onSubmit={(e)=> changeStep(currentStep + 1, e)}>
          <div className="inputs-Container">
            {currentComponent}
          </div>
          <div className="actions">
            {isFirstStep ? "" : (
              <button type='button' onClick={()=> changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Previous</span>
              </button>
            )}
            
            {isLastStep ?
              (
              <button type="submit">
                <span>Submit</span>
                <FiSend />
              </button>
              ) : (
              <button type="submit">
                <span>Next</span>
                <GrFormNext />
              </button>
              )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
