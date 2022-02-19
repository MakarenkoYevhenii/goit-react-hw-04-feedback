import PropTypes from 'prop-types'

const resultFeedback = ({ Good,Neutral,Bad, total, positivePercentage }) => {
  return (
    <div>
        <ul>
          <li>
            <p>Good:{Good}</p>
          </li>
          <li>
            <p>Neutral: {Neutral}</p>
          </li>
          <li>
            <p>Bad: {Bad}</p>
          </li>
          <li>
            <p>Total:{total}</p>
          </li>
          <li>
            <p>Positive feedback:{positivePercentage}%</p>
          </li>
        </ul>
    </div>)
};

export default resultFeedback;

resultFeedback.propTypes ={
  Good: PropTypes.number.isRequired,
  Neutral: PropTypes.number.isRequired,
  Bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}