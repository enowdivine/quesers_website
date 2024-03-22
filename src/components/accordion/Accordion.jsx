import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import styles from "./Accordion.module.css";
import { FaRegCircleQuestion } from "react-icons/fa6";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      className={styles.headerBtn}
      onClick={decoratedOnClick}
    >
      <span>
        <FaRegCircleQuestion />
      </span>
      {children}
    </button>
  );
}
const AccordionHandler = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">What is Quesers?</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            Quesers is a mobile app that serves as a search Engine for past
            questions and answers. Our Goal is to assist students perform better
            in their academics by providing them with necessary study material
            such as past questions and answers.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">
            How long does it take to get Paid for providing content?
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            Content provides are paid immidiatley one of their items are bought
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="2">Is Quesers app free?</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Quesers app is FREE on appstore and playstore.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="3">
            How much does a question/answer cost?
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            The average cost of a paper of 200 XAF. The cost may vary depending
            on the provider.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default AccordionHandler;
