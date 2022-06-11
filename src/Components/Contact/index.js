import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {Container,Form,Input,Textarea,Button,ContainerButton} from './styles'


const Contact = () => {

  const [result, setResult] = useState(false);
  const [nazwa, setNazwa] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();
    setResult(false);
    if(email==="")
    {
      alert("Email jest wymagany");
      }
      else
      {
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
            alert(error.message);
            console.log(error.text);
          }
        );
        e.target.reset();
        setResult(true);
      }
  };


  return (
    <Form action="" onSubmit={sendEmail}>
     <Container>
        <label htmlFor={"name"}>Imie</label>
        <Input type="text" name="name"  placeholder="Jan" value={nazwa} onChange={e=>setNazwa(e.target.value)}/>
     </Container>
     <Container>
        <label htmlFor={"email"}>Email&nbsp;</label>
        <Input type="email" name="email" placeholder="jan@gmail.com" value={email} onChange={e=>setEmail(e.target.value)}/>
     </Container>
     <Container>
        <label> Wiadomosc&nbsp;</label>
        <Textarea name="message" placeholder="Wiadomosc" value={message} onChange={e=>setMessage(e.target.value)}/>
      </Container>
      <ContainerButton>
        <Button type="submit">Wyslij</Button>
        <>{result ? "Wiadomość została wysłana" : null}</>
      </ContainerButton>
    </Form>
  );
};

export default Contact;
