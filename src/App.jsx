import { useEffect, useState } from "react";
import MessageList from "./components/MessageList/MessageList";
import { randomColor } from "./randomColor";
import { randomName } from "./randomName";
import { v4 as uuidv4 } from "uuid";
import Input from "./components/Input/Input";
import "./App.css";

function App() {
  const channelId = import.meta.env.VITE_CHANNEL_ID;
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [name, setName] = useState(randomName());
  const [drone, setDrone] = useState(null);

  useEffect(() => {
    const newDroneInstance = new window.Scaledrone(channelId, {
      data: { name: name, color: randomColor() },
    });
    setDrone(newDroneInstance);
  }, [name, channelId]);

  useEffect(() => {
    if (drone) {
      drone.on("open", (error) => {
        if (error) {
          console.log(error);
        } else {
          setCurrentUser(drone.clientId);
        }
      });
      const chatRoom = drone.subscribe("observable-chatRoom");
      chatRoom.on("data", (data, member) => {
        setMessages((previous) => {
          const currentMessages = [...previous];
          currentMessages.push({
            text: data,
            member: member,
            uuid: uuidv4(),
          });
          return currentMessages;
        });
      });
    }
    return () => {
      if (drone) drone.close();
    };
  }, [drone]);

  const onSendChange = (messageText) => {
    drone.publish({
      room: "observable-chatRoom",
      message: messageText,
    });
  };

  return (
    <div className="app">
      <div className="chat-container">
        <div className="chat-inner-container">
          <MessageList
            messages={messages}
            currentUser={currentUser}
            name={name}
          />
          <Input onSendChange={onSendChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
