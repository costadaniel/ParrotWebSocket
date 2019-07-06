import React, { Component } from 'react';

// Biblioteca para icones
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Os componentes da aplicação são construidos utilizando Styled Components
import {
  Container, Chat, InputContainer, MessageInput, SendButton,
} from './styles';

// Componentes que podem se repetir durante toda a aplicação, ou componentes mais complexos
import Header from '~/components/Header';
import Message from '~/components/Message';

class Main extends Component {
  constructor() {
    super();

    // Conectando com o WebSocket
    // eslint-disable-next-line no-undef
    this.ws = new WebSocket('wss://echo.websocket.org');
  }

  state = {
    messages: [
      {
        timeStamp: '1234',
        time: '12:34',
        sender: 'user',
        data: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae et accusantium deleniti dolorem quia ullam ab vel debitis veritatis alias.',
      },
      {
        timeStamp: '1235',
        time: '12:34',
        sender: 'parrot',
        data: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae et accusantium deleniti dolorem quia ullam ab vel debitis veritatis alias.',
      },
    ],
    messageText: '',
  };

  componentDidMount() {
    this.ws.onopen = () => {};

    this.ws.onmessage = ({ data }) => {
      this.receiveMessage(data);
    };
  }

  sendMessage = () => {
    const { messageText } = this.state;
    const date = new Date();

    const message = {
      // Configurando o timestamp que vai ser utilizado como id dentro da FlatList
      timeStamp: date.toJSON(),
      time:
        date.getHours() < 10
          ? `0${date.getHours()}:${
            date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
          }`
          : `${date.getHours()}:${
            date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
          }`,
      sender: 'user',
      data: messageText,
    };

    this.ws.send(messageText);

    this.setState(prevState => ({
      messages: [...prevState.messages, message],
      messageText: '',
    }));
  };

  receiveMessage = (data) => {
    const date = new Date();

    const message = {
      timeStamp: date.toJSON(),
      time:
        date.getHours() < 10
          ? `0${date.getHours()}:${
            date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
          }`
          : `${date.getHours()}:${
            date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
          }`,
      sender: 'parrot',
      data,
    };

    this.setState(prevState => ({
      messages: [...prevState.messages, message],
    }));
  };

  render() {
    const { messages, messageText } = this.state;

    return (
      <Container>
        <Header title="Parrot Web Socket" />
        <Chat
          data={messages}
          keyExtractor={message => String(message.timeStamp)}
          renderItem={({ item: message }) => <Message message={message} />}
        />
        <InputContainer>
          <MessageInput
            multiline
            placeholder="Digite sua mensagem aqui..."
            value={messageText}
            onChangeText={text => this.setState({ messageText: text })}
          />
          <SendButton onPress={messageText !== '' ? this.sendMessage : null}>
            <Icon name="send" size={18} color="#FFF" />
          </SendButton>
        </InputContainer>
      </Container>
    );
  }
}

export default Main;
