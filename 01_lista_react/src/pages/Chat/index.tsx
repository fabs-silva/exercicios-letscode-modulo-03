import style from './styles.module.css';

type ChatBaloonProps = {
  type: 'sender' | 'receiver';
  imageUrl?: string;
  text?: string;
};

function Chat({ type, imageUrl, text }: ChatBaloonProps) {
  return (
    <div
      className={`${style.chatBallon} ${
        type === 'sender' ? style.sender : style.receiver
      }`}
    >
      {text ? text : 'Texto Padrão'}
      {imageUrl && (
        <img src={imageUrl} alt="image" className={style.imageSize} />
      )}
    </div>
  );
}

export default Chat;
