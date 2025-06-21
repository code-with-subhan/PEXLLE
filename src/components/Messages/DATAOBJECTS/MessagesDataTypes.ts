export enum MessageType  {
    Send = "Send",
    Receive = "Receive"
}

interface EachUserMessage {
    id : number ,
    MessageType : MessageType.Send | MessageType.Receive,
    title : string,
    doc? : string,
    MessageTime : string,
    Images? : string,
}
interface Users {
    id : number
    userName : string,
    images : string,
    Usermessages : EachUserMessage[]
}

export default interface MessagesUserType {
    id : number,
    title : string,
    image : string,
    onLine : boolean,
    LastMessageTime : null | string,
    LastMessage : null | string,
    UnreadMessage : null | number,
    Email : string,
    Phone : string,
    location : string,
    Messages : Users[],
}

