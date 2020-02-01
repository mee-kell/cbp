import React, { Component } from 'react';

class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRating: this.props.currentRating
    };
  }

  componentDidMount() {
    this.setRating();
  }

  hoverHandler = ev => {
    const stars = ev.target.parentElement.getElementsByClassName('star');
    const hoverValue = ev.target.dataset.value;
    Array.from(stars).forEach(star => {
      star.style.color = hoverValue >= star.dataset.value ? '#26A8E2' : '#babab8';
    });
  };

  setRating = ev => {
    const stars = this.refs.rating.getElementsByClassName('star');
    Array.from(stars).forEach(star => {
      star.style.color =
        this.state.currentRating >= star.dataset.value ? '#26A8E2' : '#babab8';
    });
  };

  starClickHandler = ev => {
    let rating = ev.target.dataset.value;
    this.setState({ currentRating: rating }); // set state so the rating stays highlighted
    if (this.props.onClick) {
      this.props.onClick(rating); // emit the event up to the parent
    }
  };

  render() {
    return (
      <div
        className="rating"
        ref="rating"
        data-rating={this.state.currentRating}
        onMouseOut={this.setRating}
      >
        {[...Array(+this.props.numberOfStars).keys()].map(n => {
          return (
            <span
              className="star"
              key={n + 1}
              data-value={n + 1}
              onMouseOver={this.hoverHandler}
              onClick={this.starClickHandler}
            >
              &#9733;
            </span>
          );
        })}

        <style>{`
        
        .rating {
          height: 5vh;
          padding: 20px 5px 20px;
          text-align: center;
        }

        .star {
          padding: 5px;
          margin: 5px;
          font-size: 30px;
        }

        `}</style>
      </div>
    );
  }
}

export default StarRating;