import React from "react";
import FaqCard from "./ui/FaqCard";
import faqblob from "../assets/faq-blob.svg"
import faqblob2 from "../assets/faq-blob2.svg"


function Faqs() {
  return (
    <section id="faqs">
				<img src={faqblob} alt="" className="faq__blob--svg"/>
				<img src={faqblob2} alt="" className="faq__blob2--svg"/>
      <div className="container">
        <div className="row">
          <h3 className="section__sub-title">Frequently Ask Question</h3>
          <h2 className="section__title">
            Some of our frequently asked questions
          </h2>
          <div className="faq__container">
            <FaqCard
              question="What are the services provided to customers?"
              answer="Hello, we provide various services to help your business 
							grow and develop. We help provide ideas, create designs, develop websites 
							and mobile applications, provide support for the growth of business ideas, 
							to help customers market their products online through the marketplace."
            />
						<FaqCard
              question="How can I submit a proposal for cooperation?"
              answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, 
							tenetur? Necessitatibus voluptates nam velit est."
            />
						<FaqCard
              question="I come from a faraway place, can collaboration be done full time online 
							through several meeting applications?"
              answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, 
							tenetur? Necessitatibus voluptates nam velit est."
            />
						<FaqCard
              question="How do I get the payment complete?"
              answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, 
							tenetur? Necessitatibus voluptates nam velit est."
            />
						<FaqCard
              question="How long can the collaboration last?"
              answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, 
							tenetur? Necessitatibus voluptates nam velit est."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
