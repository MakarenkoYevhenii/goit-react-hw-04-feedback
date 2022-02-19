import { useState } from 'react';
import FeedbackOptions from '../Feedback/leaveFeedBack/FeedbackOptions';
import Statistics from './statistics/Statistics';
import Section from './Section/Section';
import Notification from './notification/Notification';

const initalState = {
  Good: 0,
  Neutral: 0,
  Bad: 0,
};

const Feedback = () => {
  const [state, setState] = useState({ ...initalState });
  console.log(state);
  const setFeedback = property => {
    setState(prevState => {
      const value = prevState[property];
      return {
        ...prevState,
        [property]: value + 1,
      };
    });
  };
  const countTotalFeedback = () => {
    const value = state.Good + state.Neutral + state.Bad;
    return value;
  };
  const countPositiveFeedbackPercentage = () => {
    const persent = Math.round(
      (state.Good * 100) / (state.Good + state.Neutral + state.Bad)
    );
    if (persent === 0) {
      return 0;
    }
    return persent;
  };
  const { Good, Neutral, Bad } = state;
  return (
    <>
      <Section title="Оставьте ваш отзыв">
        <FeedbackOptions onLeaveFeedback={setFeedback} options={state} />
      </Section>
      <Section title="Статистика">
        {countTotalFeedback() ? (
          <Statistics
            Good={Good}
            Neutral={Neutral}
            Bad={Bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default Feedback;
