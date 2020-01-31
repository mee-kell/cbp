import React from 'react';
import { motion } from 'framer-motion';
import styles from '../checkup/checkup.module.css'
  
class Checkup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideNumber: 0,
      score: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.scoreAddOne = this.scoreAddOne.bind(this);
    this.scoreAddTwo = this.scoreAddTwo.bind(this);
    this.scoreAddThree = this.scoreAddThree.bind(this);
    this.scoreAddFour = this.scoreAddFour.bind(this);
    this.returnFeedback = this.returnFeedback.bind(this);
  };

  nextSlide() {
    this.setState({ slideNumber: this.state.slideNumber + 1 })
  }

  scoreAddOne() {
    this.setState({ score: this.state.score + 0 })
    this.setState({ slideNumber: this.state.slideNumber + 1 })
  }

  scoreAddTwo() {
    this.setState({ score: this.state.score + 1 })
    this.setState({ slideNumber: this.state.slideNumber + 1 })
  }

  scoreAddThree() {
    this.setState({ score: this.state.score + 2 })
    this.setState({ slideNumber: this.state.slideNumber + 1 })
  }

  scoreAddFour() {
    this.setState({ score: this.state.score + 3 })
    this.setState({ slideNumber: this.state.slideNumber + 1 })
  }

  returnFeedback(score) {
    switch (true) {
      case (26 <= score && score <= 36):
        return <p><b>Are you OK?</b><br /><br />Your responses strongly suggest that your mental health could be in trouble. We strongly suggest that you talk to a friend or family member, and make an appointment with a school counsellor.</p>;
      case (13 <= score && score < 26):
        return <p><b>You're under some pressure.</b><br /><br />While it's normal to feel stressed, anxious or sad sometimes, watch out. Remember to reach out to others if it starts to affect your daily life.</p>;
      case (0 <= score && score < 13):
        return <p><br /><b>Keep it up!</b><br /><br />Your mental health is in a good state right now. If you can support those around you who are stressed, that would be even better.</p>;
      default: return <p>Sorry, something went wrong!</p>
    }
  }
      
  render() {

    const slideNumber = this.state.slideNumber;
    const score = this.state.score;

    if (slideNumber === 0) 
    {
      return (
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          exit = {{ opacity: 0 }}
          className = {styles.motionDiv}
        >
          <h1>It's important to check up on your mental health regularly.</h1>
          <p style={{padding: 10, marginBottom: 0}}>This short assessment, based on the NHS Mood Assessment test, might help you monitor your well-being.</p>
          <motion.button 
            whileTap={{scale: 1.3}}
            onClick = {this.nextSlide} 
            className = {styles.start}>
            start
          </motion.button>
        </motion.div>
      );
    } 
    else if (slideNumber === 1) 
    {
      return (
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          exit={{ opacity: 0 }}
          className={styles.motionDiv}
        >
          <h1>1</h1>
          <p>Have you found little pleasure or interest in doing things?</p>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddOne}
            className={styles.press}
          >
            Not at all
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddTwo}
            className={styles.press}
          >
            Several days
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddThree}
            className={styles.press}
          >
            Often
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddFour}
            className={styles.press}
          >
            Nearly every day
          </motion.button>

        </motion.div>
      );
    } else if (slideNumber === 2) {
      return (
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          exit={{ opacity: 0 }}
          className={styles.motionDiv}
        >
          <h1>2</h1>
          <p>Have you found yourself feeling down, depressed or hopeless? </p>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddOne}
            className={styles.press}
          >
            Not at all
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddTwo}
            className={styles.press}
          >
            Several days
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddThree}
            className={styles.press}
          >
            Often
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddFour}
            className={styles.press}
          >
            Nearly every day
          </motion.button>

        </motion.div>
      );
    } else if (slideNumber === 3) {
      return (
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          exit={{ opacity: 0 }}
          className={styles.motionDiv}
        >
          <h1>3</h1>
          <p>Have you had trouble falling or staying asleep, or sleeping too much?</p>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddOne}
            className={styles.press}
          >
            Not at all
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddTwo}
            className={styles.press}
          >
            Several days
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddThree}
            className={styles.press}
          >
            Often
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddFour}
            className={styles.press}
          >
            Nearly every day
          </motion.button>

        </motion.div>
      );
    } else if (slideNumber === 4) {
      return (
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          exit={{ opacity: 0 }}
          className={styles.motionDiv}
        >
          <h1>4</h1>
          <p>Have you been feeling tired or had little energy?</p>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddOne}
            className={styles.press}
          >
            Not at all
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddTwo}
            className={styles.press}
          >
            Several days
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddThree}
            className={styles.press}
          >
            Often
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddFour}
            className={styles.press}
          >
            Nearly every day
          </motion.button>

        </motion.div>
      );
    } else if (slideNumber === 5) {
      return (
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          exit={{ opacity: 0 }}
          className={styles.motionDiv}
        >
          <h1>5</h1>
          <p>Have you had a poor appetite or been overeating?</p>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddOne}
            className={styles.press}
          >
            Not at all
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddTwo}
            className={styles.press}
          >
            Several days
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddThree}
            className={styles.press}
          >
            Often
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddFour}
            className={styles.press}
          >
            Nearly every day
          </motion.button>

        </motion.div>
      );
    } else if (slideNumber === 6) {
      return (
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          exit={{ opacity: 0 }}
          className={styles.motionDiv}
        >
          <h1>6</h1>
          <p>Have you felt that you're a failure or let yourself or your family down?</p>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddOne}
            className={styles.press}
          >
            Not at all
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddTwo}
            className={styles.press}
          >
            Several days
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddThree}
            className={styles.press}
          >
            Often
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddFour}
            className={styles.press}
          >
            Nearly every day
          </motion.button>

        </motion.div>
      );
    } else if (slideNumber === 7) {
      return (
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          exit={{ opacity: 0 }}
          className={styles.motionDiv}
        >
          <h1>7</h1>
          <p>Have you had some trouble concentrating on reading or assignments?</p>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddOne}
            className={styles.press}
          >
            Not at all
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddTwo}
            className={styles.press}
          >
            Several days
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddThree}
            className={styles.press}
          >
            Often
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddFour}
            className={styles.press}
          >
            Nearly every day
          </motion.button>

        </motion.div>
      );
    } else if (slideNumber === 8) {
      return (
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          exit={{ opacity: 0 }}
          className={styles.motionDiv}
        >
          <h1>8</h1>
          <p>How often have you been bothered by having trouble relaxing?</p>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddOne}
            className={styles.press}
          >
            Not at all
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddTwo}
            className={styles.press}
          >
            Several days
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddThree}
            className={styles.press}
          >
            Often
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddFour}
            className={styles.press}
          >
            Nearly every day
          </motion.button>

        </motion.div>
      );
    } else if (slideNumber === 9) {
      return (
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          exit={{ opacity: 0 }}
          className={styles.motionDiv}
        >
          <h1>9</h1>
          <p>How often have you been bothered by becoming easily annoyed or irritable?</p>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddOne}
            className={styles.press}
          >
            Not at all
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddTwo}
            className={styles.press}
          >
            Several days
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddThree}
            className={styles.press}
          >
            Often
          </motion.button>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={this.scoreAddFour}
            className={styles.press}
          >
            Nearly every day
          </motion.button>

        </motion.div>
      );
    } else if (slideNumber === 10) {
      return (
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          exit={{ opacity: 0 }}
          className={styles.motionDiv}
        >
          <h1>Your mental wellbeing score is { 27 - score } out of 27.</h1>
          <div className="feedback">
            {this.returnFeedback(score)}
          </div>

          <style>{`
            .feedback {
              font-size: 4.3vw;
              padding: 5px;
              padding-top: 0px;
            }
          `}</style>

        </motion.div>
      );
    }

  }
};


export default Checkup