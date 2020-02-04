import React, { Component } from 'react';
import StarRating from './rating';
import CodeBlueRef from '../../firebase';
import firebase from 'firebase';
import 'firebase/firestore';
import { motion } from 'framer-motion';

class RatingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
  }

  setRating = rating => {
    this.setState({ rating: rating });
  };

  saveRating = () => {
    CodeBlueRef.collection("Ratings").add({
      rating: this.state.rating
    })

  };

  render() {

    firebase.auth().signInAnonymously();

    return (
      <div>

        <div>
          <h4>Rating:</h4>
          <StarRating
            numberOfStars="5"
            currentRating="0"
            onClick={this.setRating}
          />
        </div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }}>
          <div className="actions">
            <button type="submit" onClick={this.saveRating}>
              Submit
            </button>
          </div>
        </motion.div>

        <style>{`
        
          h4 {
            text-align: center;
            font-size: 18px;
            font-weight: normal;
            margin: 0 auto;
          }

          .actions {
            text-align: center;
          }

          button {
            width: 100px;
            height: 30px;
            font-size: 13px;
            border: 0;
            margin: 0 auto;
            background: #26A8E2;
            color: white;
            border-radius: 5px;
          }

          button:hover, button:active {
            background: black;
          }

        `}</style>
      </div>
    );
  }
}


export default RatingPage;