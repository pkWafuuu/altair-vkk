import Grid from "@mui/material/Grid";
import work1 from "../assets/Imagework1.png";
import work2 from "../assets/Imagework2.png";
import work3 from "../assets/Imagework3.png";
import work4 from "../assets/Imagework4.png";
import work5 from "../assets/Imagework5.png";
import work6 from "../assets/Imagework6.png";

function WorkSpace() {
  return (
    <section id="workspace">
      <div className="container">
        <div className="row">
          <h3 className="section__sub-title">Working Space</h3>
          <h2 className="section__title">
            Let’s meet our interior room decoration
          </h2>
          <Grid container justifyContent="center" alignItems="stretch" >
            <Grid>
              <img src={work1} alt="alt" />
            </Grid>
            <Grid>
              <img src={work2} alt="alt" />
            </Grid>
            <Grid>
              <img src={work3} alt="alt" />
            </Grid>
            <Grid>
              <img src={work4} alt="alt" />
            </Grid>
            <Grid>
              <img src={work5} alt="alt" />
            </Grid>
            <Grid>
              <img src={work6} alt="alt" />
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}

export default WorkSpace;
