import { GrFormNext, GrFormPrevious } from "react-icons/gr"

import { FiSend } from "react-icons/fi"

import UserFrom from "./components/UserFrom"
import ReviewForm from "./components/ReviewForm"
import Thanks from "./components/Thanks"

//Hooks
import { useForm } from "./hooks/useForm"

function App() {
  const formComponents = [<UserFrom />, <ReviewForm />, <Thanks />];
  
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
        <p>steps</p>
        <form onSubmit={(e)=> changeStep(currentStep +1, e)}>
          <div className="inputs-Container">
            {currentComponent}
          </div>
          <div className="actions">
            {isFirstStep ? "" : (
              <button type='button' onClick={()=> changeStep(currentStep -1)}>
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
