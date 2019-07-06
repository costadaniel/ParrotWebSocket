import React from 'react';

import PropTypes from 'prop-types';

import {
  UserMessage, ParrotMessage, MessageText, MessageTime,
} from './styles';

export default function Message({ message }) {
  /*
    Caso a mensagem seja do usuário, ele vai retornar uma mensagem do tipo usuário,
    caso ela seja do papagaio ele vai retornar ma mensagem do tipo papagaio
  */
  return message.sender === 'user' ? (
    <UserMessage>
      <MessageText>{message.data}</MessageText>
      <MessageTime>{message.time}</MessageTime>
    </UserMessage>
  ) : (
    <ParrotMessage>
      <MessageText>{message.data}</MessageText>
      <MessageTime>{message.time}</MessageTime>
    </ParrotMessage>
  );
}

/*
  Validação de Tipos utilizando PropTypes
  Veja mais em: https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
*/

Message.propTypes = {
  message: PropTypes.shape({
    timeStamp: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
  }).isRequired,
};
