import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';

import css from './Feedback.module.css';

const Feedback = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const leaveFeedback = name => {
    setState(preveState => {
      return { ...state, [name]: preveState[name] + 1 };
    });
  };

  const keyState = Object.keys(state);
  const { good, neutral, bad } = state;

  const totalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (!totalFeedback) {
      return 0;
    }
    const result = ((good / totalFeedback) * 100).toFixed(2);
    return Number(result);
  };

  return (
    <div className={css.block}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={leaveFeedback} options={keyState} />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};

export default Feedback;
