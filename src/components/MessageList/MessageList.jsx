import styles from "./MessageList.module.css";
import Message from "../Message/Message";

function MessageList({ messages, currentUser, name }) {
  return (
    <ul className={styles.list}>
      {messages?.map((message) => {
        return (
          <Message
            message={message}
            currentUser={currentUser}
            key={message.uuid}
            name={name}
          />
        );
      })}
    </ul>
  );
}

export default MessageList;
