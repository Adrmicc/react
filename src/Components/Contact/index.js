import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {Container,Form,Input,Textarea,Button,ContainerButton} from './styles'

const Result=()=>{
    return(
        <p>Wiadomosc została wysłana pomyślnie </p>
    )
}

const Contact = () => {
  const [result, setResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cxz702a",
        "template_t99hzwg",
        e.target,
        "GCgIdHIyKkShK6CFk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
      setResult(true);
  };

  return (
    <Form action="" onSubmit={sendEmail}>
     <Container>
        <label htmlFor={"name"}>Imie&nbsp;</label>
        <Input type="text" name="name"  placeholder="Jan" />
     </Container>
     <Container>
        <label htmlFor={"email"}>Email&nbsp;</label>
        <Input type="email" name="email" placeholder="jan@gmail.com"/>
     </Container>
     <Container>
        <label> Wiadomosc&nbsp;</label>
        <Textarea name="message" placeholder="Wiadomosc" />
      </Container>
      <ContainerButton>
        <Button type="submit">Wyslij</Button>
      <>{result ? <Result/> : null}</>
      </ContainerButton>
    </Form>
  );
};

export default Contact;
