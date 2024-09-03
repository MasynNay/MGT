import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/images/color2.PNG";
import colorSharpRight from "../assets/images/color2.PNG";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx zoom">
              <h2>Gym Closure Schedule</h2>
              <p>
                Below is the schedule of closures for holidays:
                <br />
                <br />
                <b>January 1, 2024:</b> New Year's Day
                <br />
                <b>February 19, 2024:</b> Presidents' Day
                <br />
                <b>April 7, 2024:</b> Easter Sunday
                <br />
                <b>May 27, 2024:</b> Memorial Day
                <br />
                <b>July 4, 2024:</b> Independence Day
                <br />
                <b>September 2, 2024:</b> Labor Day
                <br />
                <b>October 14, 2024:</b> Columbus Day
                <br />
                <b>November 11, 2024:</b> Veterans Day
                <br />
                <b>November 28, 2024:</b> Thanksgiving Day
                <br />
                <b>December 25, 2024:</b> Christmas Day
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Decorative Background Left" />
      <img className="background-image-right" src={colorSharpRight} alt="Decorative Background Right" />
    </section>
  );
};
