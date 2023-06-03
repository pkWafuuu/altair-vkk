import ReactPlayer from "react-player";
import video from "../assets/video.mp4";

function Documentation() {

  return (
    <section id="documentation">
      <div className="container">
        <div className="row">
          <h3 className="section__sub-title">Our Documentation</h3>
          <h2 className="section__title">
            See what our profile is like and how we work for your business
          </h2>
          <div className="doc__player">
            <ReactPlayer
              url={video}
							height="100%"
              width="100%"
              controls={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Documentation;
