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

					<Grid container columnSpacing={3} justifyContent="center" className="grid__container">
						<Grid item>
							<Grid item className="column">
								<img src={work1} alt="" />
							</Grid>
							<Grid item>
								<img src={work4} alt="" />
							</Grid>
						</Grid>
						<Grid item>
							<Grid item className="column">
								<img src={work2} alt="" />
							</Grid>
							<Grid item>
								<img src={work5} alt="" />
							</Grid>
						</Grid>
						<Grid item>
							<Grid item className="column">
								<img src={work3} alt="" />
							</Grid>
							<Grid item>
								<img src={work6} alt="" />
							</Grid>
						</Grid>
					</Grid>
        </div>
      </div>
    </section>
  );
}

export default WorkSpace;
