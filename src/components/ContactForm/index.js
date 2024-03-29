import {
  faFacebook,
  faInstagram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "@rocketseat/unform";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Yup from "yup";
import { Creators as ContactFormActions } from "../../store/ducks/contactForm";
import { Creators as ErrorActions } from "../../store/ducks/error";
import { Column, Row } from "../../styles/components";
import { Button, Input, StyledSocialMedia } from "./styles";

const schema = Yup.object().shape({
  name: Yup.string().required("Qual é o seu nome?"),
  email: Yup.string()
    .email("Este email parece inválido.")
    .required("Preciso de um email válido para poder te responder."),
  message: Yup.string().required("Qual é a sua mensagem?")
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
      <>
        <Column
          bg
          absolute
          col={2}
          colsm={10}
          colmd={10}
          left={2}
          leftsm={1}
          leftmd={1}
          top={2}
          topsm={1}
          topmd={1}
        >
          <h2>Entre em contato</h2>
          <Link to={"//instagram.com/chun_fotografia/"} target="_blank">
            <StyledSocialMedia>
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </StyledSocialMedia>
          </Link>
          <Link to={"//facebook.com/Chunfotografia/"} target="_blank">
            <StyledSocialMedia>
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </StyledSocialMedia>
          </Link>
          <StyledSocialMedia>
            <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp: 19 999999
          </StyledSocialMedia>
        </Column>
        <Column
          col={4}
          absolute
          left={5}
          bg
          top={2}
          colsm={10}
          colmd={10}
          leftsm={1}
          leftmd={1}
          topsm={4}
          topmd={4}
        >
          <Form schema={schema} id="contact-form" onSubmit={this.handleSubmit}>
            <Row>
              <Column col={2}>
                <label htmlFor="name">Nome</label>
              </Column>
              <Column col={6}>
                <Input type="text" name="name" id="name" />
              </Column>
            </Row>
            <Row>
              <Column col={2}>
                <label htmlFor="exampleInputEmail1">Email</label>
              </Column>
              <Column col={6}>
                <Input type="email" name="email" id="email" />
              </Column>
            </Row>
            <Row>
              <Column col={2}>
                <label htmlFor="message">Mensagem</label>
              </Column>
              <Column col={6}>
                <Input multiline name="message" rows="5" id="message" />
                <Button type="submit">Enviar</Button>
              </Column>
            </Row>
          </Form>
        </Column>
      </>
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
