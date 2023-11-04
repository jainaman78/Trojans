import React, { useEffect, useState } from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
const FAQS = (value) => {

    const [faqs, setfaqs] = useState([]);
    const [x, setx] = useState(0);
    
  const getdata = () => {
    fetch("faqs.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((mydata) => {
        setfaqs(mydata);
      });
  };
  useEffect(() => {
    getdata();
    setx(value);
  }, []);

  return (
    <div className='container'>
    {
        faqs &&
        faqs.slice(setx).map((val) =>{
            return (
                <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle={val.Title}>
        {val.Answer}
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle={val.Title}>
        {val.Answer}
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle={val.Title}>
        {val.Answer}
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle={val.Title}>
        {val.Answer}
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={5} headerTitle={val.Title}>
        {val.Answer}
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={6} headerTitle={val.Title}>
            {val.Answer}
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
            )
        })}
    </div>
  )
}

export default FAQS
