import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs"

import "../styles/components/reviewForm.sass"

const emojiReview = [
  { name: "insatisfated", value: "Insatisfated", icon: <BsFillEmojiFrownFill /> },
  { name: "neutral", value: "Could be better", icon: <BsFillEmojiNeutralFill /> },
  { name: "satisfated", value: "Satisfated", icon: <BsFillEmojiSmileFill /> },
  { name: "very_satisfated", value: "Very satisfated", icon: <BsFillEmojiHeartEyesFill /> },
]

const ReviewForm = ({ data , updateFieldHandler }) => {
  return (
    <div className='review-form'>
      <div className="form-control score-container">
        {emojiReview.map((emoji)=> (
          <label className="radio-container" key={emoji.name}>
            <input type="radio" 
              name="review" 
              value={emoji.name} 
              required 
              checked={data.review === emoji.name || ""}
              onChange={(e)=> updateFieldHandler("review", e.target.value)}
            />
            {emoji.icon}
            <p>{emoji.value}</p>
          </label>
        ))}
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comment:</label>
        <textarea 
        name="comment" 
        id="comment" 
        placeholder="Tell us about your experience with the produt..."
        required
        value={data.comment || ""}
        onChange={(e)=> updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default ReviewForm
