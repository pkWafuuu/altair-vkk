import AchievementCard from "./ui/AchievementCard";
import check from "../assets/check-mark.svg";

function Achievement() {
  return (
    <section id="achievement">
      <div className="container">
        <div className="row">
          <div className="flex">
            <div className="achievement__card--container">
              <AchievementCard
                title="70K+"
                color="#4C40F7"
                para="We have more than customers"
              />
              <AchievementCard
                title="100+"
                color="#FF6800"
                para="Projects we have completed"
              />
              <AchievementCard
                title="10M+"
                color="#FF2D59"
                para="People who are helped because of our hard work"
              />
              <AchievementCard
                title="200+"
                color="#4ADB61"
                para="Support from world-renowned companies"
              />
            </div>
            <div className="achievement__text--container">
              <h1 className="section__title--achievement">
                Customer satisfaction is our first priority
              </h1>
              <p className="achievement__text--para">
                We serve many customers, ranging from small businesses, medium
                entrepreneurs, to world-renowned companies. Their satisfaction
                is our pleasure. We strive to provide the best service by:
              </p>
              <ul className="achievement__provide--list">
                <li className="achievement__provide">
                  <div className="achieve__icon--wrapper">
                    <img src={check} alt="" className="achieve__icon" />
                  </div>
                  <p>Provide idea support from our creative team</p>
                </li>
                <li className="achievement__provide">
                  <div className="achieve__icon--wrapper">
                    <img src={check} alt="" className="achieve__icon" />
                  </div>
                  <p>Provide attractive and professional design services</p>
                </li>
                <li className="achievement__provide">
                  <div className="achieve__icon--wrapper">
                    <img src={check} alt="" className="achieve__icon" />
                  </div>
                  <p>Support for service 24 hours a week</p>
                </li>
                <li className="achievement__provide">
                  <div className="achieve__icon--wrapper">
                    <img src={check} alt="" className="achieve__icon" />
                  </div>
                  <p>Helping our customers to grow their business</p>
                </li>
                <li className="achievement__provide">
                  <div className="achieve__icon--wrapper">
                    <img src={check} alt="" className="achieve__icon" />
                  </div>
                  <p>
                    Provide support to market products through online
                    marketplace
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievement;
