import React, { Component } from "react";
import { Creators as ContactFormActions } from "../../store/ducks/contactForm";
import { Creators as ErrorActions } from "../../store/ducks/error";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Yup from "yup";
import { Form } from "@rocketseat/unform";
import { Section, Row, Column } from "../../styles/components";

import { Input } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required("Title is required"),
  email: Yup.string()
    .email("The field needs to be filled with a valid email")
    .required("Email is required"),
  message: Yup.string().required("A description is required")
});

class ContactForm extends Component {
  resetForm = () => {
    document.getElementById("contact-form").reset();
  };

  handleSubmit = data => {
    const { getContactFormRequest } = this.props;
    getContactFormRequest(data);
    this.resetForm();
  };

  componentWillUnmount() {
    const { hideError } = this.props;
    hideError();
  }
  render() {
    return (
      <Section>
        <Row id="contato" col={8}>
          <Column col={3}>
            <h3>Entre em contato conosco</h3>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Endereço</p>
          </Column>
          <Column col={5}>
            <Form
              schema={schema}
              id="contact-form"
              onSubmit={this.handleSubmit}
            >
              <Row>
                <Column col={2}>
                  <label for="name">Name</label>
                </Column>
                <Column col={6}>
                  <Input type="text" name="name" id="name" />
                </Column>
              </Row>
              <Row>
                <Column col={2}>
                  <label for="exampleInputEmail1">Email address</label>
                </Column>
                <Column col={6}>
                  <Input type="email" name="email" id="email" />
                </Column>
              </Row>
              <Row>
                <Column col={2}>
                  <label for="message">Message</label>
                </Column>
                <Column col={6}>
                  <Input multiline name="message" rows="5" id="message" />
                </Column>
              </Row>
              <button type="submit">Submit</button>
            </Form>
          </Column>
        </Row>
      </Section>
    );
  }
}

const mapStateToProps = state => ({
  message: state.contactForm.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ContactFormActions, ...ErrorActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
