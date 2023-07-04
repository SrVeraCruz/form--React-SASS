import { AiOutlineUser , AiOutlineStar } from "react-icons/ai"
import { FiSend } from "react-icons/fi"

import "../styles/components/steps.sass"

// const steps = [
//   { stats: "Identification" , icon: <AiOutlineUser /> },
//   { stats: "Avaliation" , icon: <AiOutlineStar /> },
//   { stats: "Submit" , icon: <FiSend /> },
// ]

const Steps = ({currentStep}) => {

  return (
    <div className="steps">
      {/* {steps.map((step)=> (
        <div className="step" id={step.stats} key={step.stats}>
          {step.icon}
          <p>{step.stats}</p>
        </div>  
      ))} */}

      <div className="step active">
        <AiOutlineUser />
        <p>Identification</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : " "}`}>
        <AiOutlineStar />
        <p>Avaliation</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : " "}`}>
        <FiSend />
        <p>Submit</p>
      </div>

    </div>
  )
}

export default Steps
