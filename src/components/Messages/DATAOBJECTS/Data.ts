import MessagesUserType from "./MessagesDataTypes";
import { MessageType } from "./MessagesDataTypes";

export const MessageUser: MessagesUserType[] = [
    {
        id: 0,
        title: "Subhan Hassan",
        image: 'https://i.pravatar.cc/48?img=1',
        onLine: true,
        LastMessageTime: "Hello how are you",
        LastMessage: "10:30 AM",
        UnreadMessage: 1,
        Email: "SubhanHassan@gmail.com",
        Phone: "+92-2345-2342",
        location: "Multan",
        Messages: [
            {
                id: 1,
                userName: "Hamza Liaqat",
                images: "https://i.pravatar.cc/48?img=2",
                Usermessages: [
                    {
                        id: 0,
                        title: "Hello how are you",
                        MessageType: MessageType.Send,
                        MessageTime: "10:30 AM",
                    },
                    {
                        id: 0,
                        title: "I am fine",
                        MessageType: MessageType.Receive,
                        MessageTime: "10:31 AM",
                    }
                ]
            }
        ]
    },
    {
        id: 1,
        title: "Hamza Liaqat",
        image: 'https://i.pravatar.cc/48?img=2',
        onLine: false,
        LastMessageTime: "I am fine",
        LastMessage: "10 : 31 AM",
        UnreadMessage: 0,
        Email: "HamzaLiaqat@gmail.com",
        Phone: "+92-2445-3342",
        location: "Multan",
        Messages: [
            {
                id: 0,
                userName: "Subhan Hassan",
                images: "https://i.pravatar.cc/48?img=1",
                Usermessages: [
                    {
                        id: 0,
                        title: "Hello How are you?",
                        MessageType: MessageType.Receive,
                        MessageTime: "10:30 AM",
                    },
                    {
                        id: 0,
                        title: "I am fine",
                        MessageType: MessageType.Send,
                        MessageTime: "10:31 AM",
                    }
                ]
            }
        ]
    },
]