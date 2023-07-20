import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';

const FormularioFooter = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMensajeChange = (e) => {
    setMensaje(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);
    setFormularioEnviado(true)
  };

  if (formularioEnviado) {
    return (
      <Box
      className="bordeTodo"
      display='flex'
      justifyContent='center'>
        <p>Gracias por enviar el formulario.</p>
      </Box>
    );
  }

  return (
    <Box>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          className="bordeBottom"
          type="text"
          value={nombre}
          onChange={handleNombreChange}
          placeholder="Cómo te llamás?"
        />
        <input
          className="bordeBottom"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Tu correo electrónico?"
        />
        <input
          className="bordeTodo"
          type="text"
          value={mensaje}
          onChange={handleMensajeChange}
          placeholder="Escribe un mensaje..."
        />
        <div className="divBtnFormulario">
          <button type="submit">Enviar email</button>
        </div>
      </form>
    </Box>
  );
};

export { FormularioFooter };
