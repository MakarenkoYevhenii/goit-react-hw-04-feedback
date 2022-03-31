import styles from "./feedbackOptons.module.css"
import PropTypes from 'prop-types'
import { memo } from "react"

const FeedbackOptions  = ({onLeaveFeedback,options})=>{
  console.log(options);
  const elements = options.map(option => <li key={option}><button className={styles.button}  onClick={()=>onLeaveFeedback(option)}>{option}</button></li>)
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
    options:PropTypes.arrayOf({
      Good:PropTypes.string.isRequired,
      Neutral:PropTypes.string.isRequired,
      Bad:PropTypes.string.isRequired,
    }).isRequired,
}