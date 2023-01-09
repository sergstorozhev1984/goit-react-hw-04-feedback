import  PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, handleClick }) => {
  const optionsKey = Object.keys(options);

  return (
    <ul className={css.feedbackList}>
      {optionsKey.map((option) => {
        const label = option.charAt(0).toUpperCase() + option.slice(1);

        return (
          <li key={option} className={css.item}>
            <button className={css.btn} type="button" onClick={()=> handleClick(option)}>{label}</button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired,
}