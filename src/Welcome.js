import Message from './Message';

function Welcome(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <Message message="How Are You" />
    </div>
  );
}

export default Welcome;
