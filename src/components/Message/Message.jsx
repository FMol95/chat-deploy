import styles from "./Message.module.css";

function Message({ message, currentUser, name }) {
  const { member, text } = message;
  const messageFromMe = member?.id === currentUser;
  const className = messageFromMe
    ? `${styles.currentUser} ${styles.messages}`
    : `${styles.messages}`;

  return (
    <li className={className}>
      <div>
        <span className={styles.user}>
          {messageFromMe ? name : member.clientData.name}
        </span>
        <span style={{ backgroundColor: member.clientData.color }} />
      </div>
      <div className={styles.messageData}>
        <div
          className={styles.text}
          style={{ backgroundColor: member.clientData.color }}
        >
          {text}
        </div>
      </div>
    </li>
  );
}

export default Message;
