import styles from "./feedbackOptons.module.css"
import PropTypes from 'prop-types'
import { memo } from "react"

const FeedbackOptions  = ({onLeaveFeedback,options})=>{

  const elements = Object.keys(options).map(option => <li key={option}><button style={{ backgroundColor:getColor()}} className={styles.button}  onClick={()=>onLeaveFeedback(option)}>{option}</button></li>)
  return (
    <div>
    <ul className={styles.buttonsList}>
    {elements}</ul>
    </div>
    
  );}
  

export default memo(FeedbackOptions);
  
function getColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
      }

      FeedbackOptions.defaultProps ={
        options:[]
      }
  FeedbackOptions.propTypes ={
    onLeaveFeedback: PropTypes.func.isRequired,
    options:PropTypes.shape({
      Good:PropTypes.number.isRequired,
      Neutral:PropTypes.number.isRequired,
      Bad:PropTypes.number.isRequired,
    }).isRequired,
}