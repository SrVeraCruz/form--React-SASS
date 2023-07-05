import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs"

import "../styles/components/thanks.sass"

const emojiReview = {
  insatisfated: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfated: <BsFillEmojiSmileFill />,
  very_satisfated: <BsFillEmojiHeartEyesFill />,
}

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Not long...</h2>
      <p>Your opnion is very important, you will soon receive a 10% descount coupon for your next purchase.</p>
      <p>To complete your review click the send button bellow</p>
      <h3>Here is the summary of your review: {data.name}</h3>
      <div className="review-data">
        <span>Satisfation with product:{emojiReview[data.review]}</span>
        
      </div>
      <div className="review-data">
        <span>Comment: </span>{data.comment}
      </div>
    </div>
  )
}

export default Thanks
