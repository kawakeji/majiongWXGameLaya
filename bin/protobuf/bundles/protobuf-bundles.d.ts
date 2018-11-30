type Long = protobuf.Long;
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace message. */
declare namespace message {

    /** Properties of a LoginCMsg. */
    interface ILoginCMsg {

        /** LoginCMsg username */
        username: string;

        /** LoginCMsg roomId */
        roomId: number;
    }

    /** Represents a LoginCMsg. */
    class LoginCMsg implements ILoginCMsg {

        /**
         * Constructs a new LoginCMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.ILoginCMsg);

        /** LoginCMsg username. */
        public username: string;

        /** LoginCMsg roomId. */
        public roomId: number;

        /**
         * Creates a new LoginCMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginCMsg instance
         */
        public static create(properties?: message.ILoginCMsg): message.LoginCMsg;

        /**
         * Encodes the specified LoginCMsg message. Does not implicitly {@link message.LoginCMsg.verify|verify} messages.
         * @param message LoginCMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.ILoginCMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LoginCMsg message, length delimited. Does not implicitly {@link message.LoginCMsg.verify|verify} messages.
         * @param message LoginCMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.ILoginCMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginCMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginCMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.LoginCMsg;

        /**
         * Decodes a LoginCMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginCMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.LoginCMsg;

        /**
         * Verifies a LoginCMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a LoginSuccessEndSMsg. */
    interface ILoginSuccessEndSMsg {

        /** LoginSuccessEndSMsg reconnect */
        reconnect: boolean;

        /** LoginSuccessEndSMsg systemTime */
        systemTime: (number|Long);
    }

    /** Represents a LoginSuccessEndSMsg. */
    class LoginSuccessEndSMsg implements ILoginSuccessEndSMsg {

        /**
         * Constructs a new LoginSuccessEndSMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.ILoginSuccessEndSMsg);

        /** LoginSuccessEndSMsg reconnect. */
        public reconnect: boolean;

        /** LoginSuccessEndSMsg systemTime. */
        public systemTime: (number|Long);

        /**
         * Creates a new LoginSuccessEndSMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginSuccessEndSMsg instance
         */
        public static create(properties?: message.ILoginSuccessEndSMsg): message.LoginSuccessEndSMsg;

        /**
         * Encodes the specified LoginSuccessEndSMsg message. Does not implicitly {@link message.LoginSuccessEndSMsg.verify|verify} messages.
         * @param message LoginSuccessEndSMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.ILoginSuccessEndSMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LoginSuccessEndSMsg message, length delimited. Does not implicitly {@link message.LoginSuccessEndSMsg.verify|verify} messages.
         * @param message LoginSuccessEndSMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.ILoginSuccessEndSMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginSuccessEndSMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginSuccessEndSMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.LoginSuccessEndSMsg;

        /**
         * Decodes a LoginSuccessEndSMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginSuccessEndSMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.LoginSuccessEndSMsg;

        /**
         * Verifies a LoginSuccessEndSMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a LoginSuccessSMsg. */
    interface ILoginSuccessSMsg {

        /** LoginSuccessSMsg playerId */
        playerId?: (number|Long|null);
    }

    /** Represents a LoginSuccessSMsg. */
    class LoginSuccessSMsg implements ILoginSuccessSMsg {

        /**
         * Constructs a new LoginSuccessSMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.ILoginSuccessSMsg);

        /** LoginSuccessSMsg playerId. */
        public playerId: (number|Long);

        /**
         * Creates a new LoginSuccessSMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginSuccessSMsg instance
         */
        public static create(properties?: message.ILoginSuccessSMsg): message.LoginSuccessSMsg;

        /**
         * Encodes the specified LoginSuccessSMsg message. Does not implicitly {@link message.LoginSuccessSMsg.verify|verify} messages.
         * @param message LoginSuccessSMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.ILoginSuccessSMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LoginSuccessSMsg message, length delimited. Does not implicitly {@link message.LoginSuccessSMsg.verify|verify} messages.
         * @param message LoginSuccessSMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.ILoginSuccessSMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginSuccessSMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginSuccessSMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.LoginSuccessSMsg;

        /**
         * Decodes a LoginSuccessSMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginSuccessSMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.LoginSuccessSMsg;

        /**
         * Verifies a LoginSuccessSMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ResultTypeSMsg. */
    interface IResultTypeSMsg {

        /** ResultTypeSMsg type */
        type: number;
    }

    /** Represents a ResultTypeSMsg. */
    class ResultTypeSMsg implements IResultTypeSMsg {

        /**
         * Constructs a new ResultTypeSMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IResultTypeSMsg);

        /** ResultTypeSMsg type. */
        public type: number;

        /**
         * Creates a new ResultTypeSMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResultTypeSMsg instance
         */
        public static create(properties?: message.IResultTypeSMsg): message.ResultTypeSMsg;

        /**
         * Encodes the specified ResultTypeSMsg message. Does not implicitly {@link message.ResultTypeSMsg.verify|verify} messages.
         * @param message ResultTypeSMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IResultTypeSMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ResultTypeSMsg message, length delimited. Does not implicitly {@link message.ResultTypeSMsg.verify|verify} messages.
         * @param message ResultTypeSMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IResultTypeSMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResultTypeSMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResultTypeSMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.ResultTypeSMsg;

        /**
         * Decodes a ResultTypeSMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResultTypeSMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.ResultTypeSMsg;

        /**
         * Verifies a ResultTypeSMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PlayerOperationRoomMsg. */
    interface IPlayerOperationRoomMsg {

        /** PlayerOperationRoomMsg isEnter */
        isEnter: boolean;

        /** PlayerOperationRoomMsg player */
        player?: (message.IPlayerBMsg[]|null);
    }

    /** Represents a PlayerOperationRoomMsg. */
    class PlayerOperationRoomMsg implements IPlayerOperationRoomMsg {

        /**
         * Constructs a new PlayerOperationRoomMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IPlayerOperationRoomMsg);

        /** PlayerOperationRoomMsg isEnter. */
        public isEnter: boolean;

        /** PlayerOperationRoomMsg player. */
        public player: message.IPlayerBMsg[];

        /**
         * Creates a new PlayerOperationRoomMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerOperationRoomMsg instance
         */
        public static create(properties?: message.IPlayerOperationRoomMsg): message.PlayerOperationRoomMsg;

        /**
         * Encodes the specified PlayerOperationRoomMsg message. Does not implicitly {@link message.PlayerOperationRoomMsg.verify|verify} messages.
         * @param message PlayerOperationRoomMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IPlayerOperationRoomMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerOperationRoomMsg message, length delimited. Does not implicitly {@link message.PlayerOperationRoomMsg.verify|verify} messages.
         * @param message PlayerOperationRoomMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IPlayerOperationRoomMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerOperationRoomMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerOperationRoomMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.PlayerOperationRoomMsg;

        /**
         * Decodes a PlayerOperationRoomMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerOperationRoomMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.PlayerOperationRoomMsg;

        /**
         * Verifies a PlayerOperationRoomMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PlayerBMsg. */
    interface IPlayerBMsg {

        /** PlayerBMsg playerId */
        playerId: number;

        /** PlayerBMsg nickName */
        nickName: string;

        /** PlayerBMsg roomId */
        roomId: number;

        /** PlayerBMsg position */
        position: number;
    }

    /** Represents a PlayerBMsg. */
    class PlayerBMsg implements IPlayerBMsg {

        /**
         * Constructs a new PlayerBMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IPlayerBMsg);

        /** PlayerBMsg playerId. */
        public playerId: number;

        /** PlayerBMsg nickName. */
        public nickName: string;

        /** PlayerBMsg roomId. */
        public roomId: number;

        /** PlayerBMsg position. */
        public position: number;

        /**
         * Creates a new PlayerBMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerBMsg instance
         */
        public static create(properties?: message.IPlayerBMsg): message.PlayerBMsg;

        /**
         * Encodes the specified PlayerBMsg message. Does not implicitly {@link message.PlayerBMsg.verify|verify} messages.
         * @param message PlayerBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IPlayerBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerBMsg message, length delimited. Does not implicitly {@link message.PlayerBMsg.verify|verify} messages.
         * @param message PlayerBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IPlayerBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerBMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.PlayerBMsg;

        /**
         * Decodes a PlayerBMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.PlayerBMsg;

        /**
         * Verifies a PlayerBMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AllPlayerCMJBMsg. */
    interface IAllPlayerCMJBMsg {

        /** AllPlayerCMJBMsg pos1 */
        pos1: message.ICMJBMsg;

        /** AllPlayerCMJBMsg pos2 */
        pos2: message.ICMJBMsg;

        /** AllPlayerCMJBMsg pos3 */
        pos3: message.ICMJBMsg;

        /** AllPlayerCMJBMsg pos4 */
        pos4: message.ICMJBMsg;
    }

    /** Represents an AllPlayerCMJBMsg. */
    class AllPlayerCMJBMsg implements IAllPlayerCMJBMsg {

        /**
         * Constructs a new AllPlayerCMJBMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IAllPlayerCMJBMsg);

        /** AllPlayerCMJBMsg pos1. */
        public pos1: message.ICMJBMsg;

        /** AllPlayerCMJBMsg pos2. */
        public pos2: message.ICMJBMsg;

        /** AllPlayerCMJBMsg pos3. */
        public pos3: message.ICMJBMsg;

        /** AllPlayerCMJBMsg pos4. */
        public pos4: message.ICMJBMsg;

        /**
         * Creates a new AllPlayerCMJBMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AllPlayerCMJBMsg instance
         */
        public static create(properties?: message.IAllPlayerCMJBMsg): message.AllPlayerCMJBMsg;

        /**
         * Encodes the specified AllPlayerCMJBMsg message. Does not implicitly {@link message.AllPlayerCMJBMsg.verify|verify} messages.
         * @param message AllPlayerCMJBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IAllPlayerCMJBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AllPlayerCMJBMsg message, length delimited. Does not implicitly {@link message.AllPlayerCMJBMsg.verify|verify} messages.
         * @param message AllPlayerCMJBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IAllPlayerCMJBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AllPlayerCMJBMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllPlayerCMJBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.AllPlayerCMJBMsg;

        /**
         * Decodes an AllPlayerCMJBMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AllPlayerCMJBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.AllPlayerCMJBMsg;

        /**
         * Verifies an AllPlayerCMJBMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CMJBMsg. */
    interface ICMJBMsg {

        /** CMJBMsg mMyPAIVec */
        mMyPAIVec?: (message.IIntListMsg[]|null);

        /** CMJBMsg mDealer */
        mDealer: boolean;
    }

    /** Represents a CMJBMsg. */
    class CMJBMsg implements ICMJBMsg {

        /**
         * Constructs a new CMJBMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.ICMJBMsg);

        /** CMJBMsg mMyPAIVec. */
        public mMyPAIVec: message.IIntListMsg[];

        /** CMJBMsg mDealer. */
        public mDealer: boolean;

        /**
         * Creates a new CMJBMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMJBMsg instance
         */
        public static create(properties?: message.ICMJBMsg): message.CMJBMsg;

        /**
         * Encodes the specified CMJBMsg message. Does not implicitly {@link message.CMJBMsg.verify|verify} messages.
         * @param message CMJBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.ICMJBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CMJBMsg message, length delimited. Does not implicitly {@link message.CMJBMsg.verify|verify} messages.
         * @param message CMJBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.ICMJBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CMJBMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMJBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.CMJBMsg;

        /**
         * Decodes a CMJBMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMJBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.CMJBMsg;

        /**
         * Verifies a CMJBMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AddPaiBMsg. */
    interface IAddPaiBMsg {

        /** AddPaiBMsg playerId */
        playerId: number;

        /** AddPaiBMsg addPai */
        addPai: message.IStPAIBMsg;
    }

    /** Represents an AddPaiBMsg. */
    class AddPaiBMsg implements IAddPaiBMsg {

        /**
         * Constructs a new AddPaiBMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IAddPaiBMsg);

        /** AddPaiBMsg playerId. */
        public playerId: number;

        /** AddPaiBMsg addPai. */
        public addPai: message.IStPAIBMsg;

        /**
         * Creates a new AddPaiBMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddPaiBMsg instance
         */
        public static create(properties?: message.IAddPaiBMsg): message.AddPaiBMsg;

        /**
         * Encodes the specified AddPaiBMsg message. Does not implicitly {@link message.AddPaiBMsg.verify|verify} messages.
         * @param message AddPaiBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IAddPaiBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AddPaiBMsg message, length delimited. Does not implicitly {@link message.AddPaiBMsg.verify|verify} messages.
         * @param message AddPaiBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IAddPaiBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AddPaiBMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.AddPaiBMsg;

        /**
         * Decodes an AddPaiBMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.AddPaiBMsg;

        /**
         * Verifies an AddPaiBMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DelPaiBMsg. */
    interface IDelPaiBMsg {

        /** DelPaiBMsg playerId */
        playerId: number;

        /** DelPaiBMsg delPai */
        delPai: message.IStPAIBMsg;
    }

    /** Represents a DelPaiBMsg. */
    class DelPaiBMsg implements IDelPaiBMsg {

        /**
         * Constructs a new DelPaiBMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IDelPaiBMsg);

        /** DelPaiBMsg playerId. */
        public playerId: number;

        /** DelPaiBMsg delPai. */
        public delPai: message.IStPAIBMsg;

        /**
         * Creates a new DelPaiBMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelPaiBMsg instance
         */
        public static create(properties?: message.IDelPaiBMsg): message.DelPaiBMsg;

        /**
         * Encodes the specified DelPaiBMsg message. Does not implicitly {@link message.DelPaiBMsg.verify|verify} messages.
         * @param message DelPaiBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IDelPaiBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DelPaiBMsg message, length delimited. Does not implicitly {@link message.DelPaiBMsg.verify|verify} messages.
         * @param message DelPaiBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IDelPaiBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DelPaiBMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.DelPaiBMsg;

        /**
         * Decodes a DelPaiBMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.DelPaiBMsg;

        /**
         * Verifies a DelPaiBMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ChiPaiBMsg. */
    interface IChiPaiBMsg {

        /** ChiPaiBMsg playerId */
        playerId: number;

        /** ChiPaiBMsg stChi */
        stChi: message.IStCHIBMsg;
    }

    /** Represents a ChiPaiBMsg. */
    class ChiPaiBMsg implements IChiPaiBMsg {

        /**
         * Constructs a new ChiPaiBMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IChiPaiBMsg);

        /** ChiPaiBMsg playerId. */
        public playerId: number;

        /** ChiPaiBMsg stChi. */
        public stChi: message.IStCHIBMsg;

        /**
         * Creates a new ChiPaiBMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChiPaiBMsg instance
         */
        public static create(properties?: message.IChiPaiBMsg): message.ChiPaiBMsg;

        /**
         * Encodes the specified ChiPaiBMsg message. Does not implicitly {@link message.ChiPaiBMsg.verify|verify} messages.
         * @param message ChiPaiBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IChiPaiBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ChiPaiBMsg message, length delimited. Does not implicitly {@link message.ChiPaiBMsg.verify|verify} messages.
         * @param message ChiPaiBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IChiPaiBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChiPaiBMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChiPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.ChiPaiBMsg;

        /**
         * Decodes a ChiPaiBMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChiPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.ChiPaiBMsg;

        /**
         * Verifies a ChiPaiBMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PengPaiBMsg. */
    interface IPengPaiBMsg {

        /** PengPaiBMsg playerId */
        playerId: number;

        /** PengPaiBMsg stPai */
        stPai: message.IStPAIBMsg;
    }

    /** Represents a PengPaiBMsg. */
    class PengPaiBMsg implements IPengPaiBMsg {

        /**
         * Constructs a new PengPaiBMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IPengPaiBMsg);

        /** PengPaiBMsg playerId. */
        public playerId: number;

        /** PengPaiBMsg stPai. */
        public stPai: message.IStPAIBMsg;

        /**
         * Creates a new PengPaiBMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PengPaiBMsg instance
         */
        public static create(properties?: message.IPengPaiBMsg): message.PengPaiBMsg;

        /**
         * Encodes the specified PengPaiBMsg message. Does not implicitly {@link message.PengPaiBMsg.verify|verify} messages.
         * @param message PengPaiBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IPengPaiBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PengPaiBMsg message, length delimited. Does not implicitly {@link message.PengPaiBMsg.verify|verify} messages.
         * @param message PengPaiBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IPengPaiBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PengPaiBMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PengPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.PengPaiBMsg;

        /**
         * Decodes a PengPaiBMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PengPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.PengPaiBMsg;

        /**
         * Verifies a PengPaiBMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GangPaiBMsg. */
    interface IGangPaiBMsg {

        /** GangPaiBMsg playerId */
        playerId: number;

        /** GangPaiBMsg stPai */
        stPai: message.IStPAIBMsg;
    }

    /** Represents a GangPaiBMsg. */
    class GangPaiBMsg implements IGangPaiBMsg {

        /**
         * Constructs a new GangPaiBMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IGangPaiBMsg);

        /** GangPaiBMsg playerId. */
        public playerId: number;

        /** GangPaiBMsg stPai. */
        public stPai: message.IStPAIBMsg;

        /**
         * Creates a new GangPaiBMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GangPaiBMsg instance
         */
        public static create(properties?: message.IGangPaiBMsg): message.GangPaiBMsg;

        /**
         * Encodes the specified GangPaiBMsg message. Does not implicitly {@link message.GangPaiBMsg.verify|verify} messages.
         * @param message GangPaiBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IGangPaiBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GangPaiBMsg message, length delimited. Does not implicitly {@link message.GangPaiBMsg.verify|verify} messages.
         * @param message GangPaiBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IGangPaiBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GangPaiBMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GangPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.GangPaiBMsg;

        /**
         * Decodes a GangPaiBMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GangPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.GangPaiBMsg;

        /**
         * Verifies a GangPaiBMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HuPaiBMsg. */
    interface IHuPaiBMsg {

        /** HuPaiBMsg playerId */
        playerId: number;

        /** HuPaiBMsg goodInfo */
        goodInfo?: (message.IStGoodInfoBMsg|null);

        /** HuPaiBMsg stPai */
        stPai?: (message.IStPAIBMsg|null);
    }

    /** Represents a HuPaiBMsg. */
    class HuPaiBMsg implements IHuPaiBMsg {

        /**
         * Constructs a new HuPaiBMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IHuPaiBMsg);

        /** HuPaiBMsg playerId. */
        public playerId: number;

        /** HuPaiBMsg goodInfo. */
        public goodInfo?: (message.IStGoodInfoBMsg|null);

        /** HuPaiBMsg stPai. */
        public stPai?: (message.IStPAIBMsg|null);

        /**
         * Creates a new HuPaiBMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HuPaiBMsg instance
         */
        public static create(properties?: message.IHuPaiBMsg): message.HuPaiBMsg;

        /**
         * Encodes the specified HuPaiBMsg message. Does not implicitly {@link message.HuPaiBMsg.verify|verify} messages.
         * @param message HuPaiBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IHuPaiBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HuPaiBMsg message, length delimited. Does not implicitly {@link message.HuPaiBMsg.verify|verify} messages.
         * @param message HuPaiBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IHuPaiBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HuPaiBMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HuPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.HuPaiBMsg;

        /**
         * Decodes a HuPaiBMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HuPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.HuPaiBMsg;

        /**
         * Verifies a HuPaiBMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an OperationBMsg. */
    interface IOperationBMsg {

        /** OperationBMsg playerId */
        playerId: number;

        /** OperationBMsg operationType */
        operationType: number;

        /** OperationBMsg stPai */
        stPai?: (message.IStPAIBMsg|null);

        /** OperationBMsg isSelfHand */
        isSelfHand?: (boolean|null);
    }

    /** Represents an OperationBMsg. */
    class OperationBMsg implements IOperationBMsg {

        /**
         * Constructs a new OperationBMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IOperationBMsg);

        /** OperationBMsg playerId. */
        public playerId: number;

        /** OperationBMsg operationType. */
        public operationType: number;

        /** OperationBMsg stPai. */
        public stPai?: (message.IStPAIBMsg|null);

        /** OperationBMsg isSelfHand. */
        public isSelfHand: boolean;

        /**
         * Creates a new OperationBMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OperationBMsg instance
         */
        public static create(properties?: message.IOperationBMsg): message.OperationBMsg;

        /**
         * Encodes the specified OperationBMsg message. Does not implicitly {@link message.OperationBMsg.verify|verify} messages.
         * @param message OperationBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IOperationBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OperationBMsg message, length delimited. Does not implicitly {@link message.OperationBMsg.verify|verify} messages.
         * @param message OperationBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IOperationBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an OperationBMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OperationBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.OperationBMsg;

        /**
         * Decodes an OperationBMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OperationBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.OperationBMsg;

        /**
         * Verifies an OperationBMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a StPAIBMsg. */
    interface IStPAIBMsg {

        /** StPAIBMsg mType */
        mType: number;

        /** StPAIBMsg mValue */
        mValue: number;

        /** StPAIBMsg isGang */
        isGang?: (boolean|null);
    }

    /** Represents a StPAIBMsg. */
    class StPAIBMsg implements IStPAIBMsg {

        /**
         * Constructs a new StPAIBMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IStPAIBMsg);

        /** StPAIBMsg mType. */
        public mType: number;

        /** StPAIBMsg mValue. */
        public mValue: number;

        /** StPAIBMsg isGang. */
        public isGang: boolean;

        /**
         * Creates a new StPAIBMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StPAIBMsg instance
         */
        public static create(properties?: message.IStPAIBMsg): message.StPAIBMsg;

        /**
         * Encodes the specified StPAIBMsg message. Does not implicitly {@link message.StPAIBMsg.verify|verify} messages.
         * @param message StPAIBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IStPAIBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified StPAIBMsg message, length delimited. Does not implicitly {@link message.StPAIBMsg.verify|verify} messages.
         * @param message StPAIBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IStPAIBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a StPAIBMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StPAIBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.StPAIBMsg;

        /**
         * Decodes a StPAIBMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StPAIBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.StPAIBMsg;

        /**
         * Verifies a StPAIBMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a StCHIBMsg. */
    interface IStCHIBMsg {

        /** StCHIBMsg mType */
        mType: number;

        /** StCHIBMsg mValue1 */
        mValue1: number;

        /** StCHIBMsg mValue2 */
        mValue2: number;

        /** StCHIBMsg mValue3 */
        mValue3: number;

        /** StCHIBMsg byChiIndex */
        byChiIndex: number;
    }

    /** Represents a StCHIBMsg. */
    class StCHIBMsg implements IStCHIBMsg {

        /**
         * Constructs a new StCHIBMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IStCHIBMsg);

        /** StCHIBMsg mType. */
        public mType: number;

        /** StCHIBMsg mValue1. */
        public mValue1: number;

        /** StCHIBMsg mValue2. */
        public mValue2: number;

        /** StCHIBMsg mValue3. */
        public mValue3: number;

        /** StCHIBMsg byChiIndex. */
        public byChiIndex: number;

        /**
         * Creates a new StCHIBMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StCHIBMsg instance
         */
        public static create(properties?: message.IStCHIBMsg): message.StCHIBMsg;

        /**
         * Encodes the specified StCHIBMsg message. Does not implicitly {@link message.StCHIBMsg.verify|verify} messages.
         * @param message StCHIBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IStCHIBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified StCHIBMsg message, length delimited. Does not implicitly {@link message.StCHIBMsg.verify|verify} messages.
         * @param message StCHIBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IStCHIBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a StCHIBMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StCHIBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.StCHIBMsg;

        /**
         * Decodes a StCHIBMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StCHIBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.StCHIBMsg;

        /**
         * Verifies a StCHIBMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a StGoodInfoBMsg. */
    interface IStGoodInfoBMsg {

        /** StGoodInfoBMsg goodTypes */
        goodTypes?: (number[]|null);

        /** StGoodInfoBMsg goodValue */
        goodValue: number;
    }

    /** Represents a StGoodInfoBMsg. */
    class StGoodInfoBMsg implements IStGoodInfoBMsg {

        /**
         * Constructs a new StGoodInfoBMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IStGoodInfoBMsg);

        /** StGoodInfoBMsg goodTypes. */
        public goodTypes: number[];

        /** StGoodInfoBMsg goodValue. */
        public goodValue: number;

        /**
         * Creates a new StGoodInfoBMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StGoodInfoBMsg instance
         */
        public static create(properties?: message.IStGoodInfoBMsg): message.StGoodInfoBMsg;

        /**
         * Encodes the specified StGoodInfoBMsg message. Does not implicitly {@link message.StGoodInfoBMsg.verify|verify} messages.
         * @param message StGoodInfoBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IStGoodInfoBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified StGoodInfoBMsg message, length delimited. Does not implicitly {@link message.StGoodInfoBMsg.verify|verify} messages.
         * @param message StGoodInfoBMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IStGoodInfoBMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a StGoodInfoBMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StGoodInfoBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.StGoodInfoBMsg;

        /**
         * Decodes a StGoodInfoBMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StGoodInfoBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.StGoodInfoBMsg;

        /**
         * Verifies a StGoodInfoBMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an IntMsg. */
    interface IIntMsg {

        /** IntMsg value */
        value: number;
    }

    /** Represents an IntMsg. */
    class IntMsg implements IIntMsg {

        /**
         * Constructs a new IntMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IIntMsg);

        /** IntMsg value. */
        public value: number;

        /**
         * Creates a new IntMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IntMsg instance
         */
        public static create(properties?: message.IIntMsg): message.IntMsg;

        /**
         * Encodes the specified IntMsg message. Does not implicitly {@link message.IntMsg.verify|verify} messages.
         * @param message IntMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IIntMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified IntMsg message, length delimited. Does not implicitly {@link message.IntMsg.verify|verify} messages.
         * @param message IntMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IIntMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an IntMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IntMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.IntMsg;

        /**
         * Decodes an IntMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IntMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.IntMsg;

        /**
         * Verifies an IntMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an IntListMsg. */
    interface IIntListMsg {

        /** IntListMsg value */
        value?: (number[]|null);
    }

    /** Represents an IntListMsg. */
    class IntListMsg implements IIntListMsg {

        /**
         * Constructs a new IntListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IIntListMsg);

        /** IntListMsg value. */
        public value: number[];

        /**
         * Creates a new IntListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IntListMsg instance
         */
        public static create(properties?: message.IIntListMsg): message.IntListMsg;

        /**
         * Encodes the specified IntListMsg message. Does not implicitly {@link message.IntListMsg.verify|verify} messages.
         * @param message IntListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IIntListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified IntListMsg message, length delimited. Does not implicitly {@link message.IntListMsg.verify|verify} messages.
         * @param message IntListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IIntListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an IntListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IntListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.IntListMsg;

        /**
         * Decodes an IntListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IntListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.IntListMsg;

        /**
         * Verifies an IntListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a LongListMsg. */
    interface ILongListMsg {

        /** LongListMsg value */
        value?: (number[]|null);
    }

    /** Represents a LongListMsg. */
    class LongListMsg implements ILongListMsg {

        /**
         * Constructs a new LongListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.ILongListMsg);

        /** LongListMsg value. */
        public value: number[];

        /**
         * Creates a new LongListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LongListMsg instance
         */
        public static create(properties?: message.ILongListMsg): message.LongListMsg;

        /**
         * Encodes the specified LongListMsg message. Does not implicitly {@link message.LongListMsg.verify|verify} messages.
         * @param message LongListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.ILongListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LongListMsg message, length delimited. Does not implicitly {@link message.LongListMsg.verify|verify} messages.
         * @param message LongListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.ILongListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LongListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LongListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.LongListMsg;

        /**
         * Decodes a LongListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LongListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.LongListMsg;

        /**
         * Verifies a LongListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BoolMsg. */
    interface IBoolMsg {

        /** BoolMsg value */
        value: number;
    }

    /** Represents a BoolMsg. */
    class BoolMsg implements IBoolMsg {

        /**
         * Constructs a new BoolMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IBoolMsg);

        /** BoolMsg value. */
        public value: number;

        /**
         * Creates a new BoolMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BoolMsg instance
         */
        public static create(properties?: message.IBoolMsg): message.BoolMsg;

        /**
         * Encodes the specified BoolMsg message. Does not implicitly {@link message.BoolMsg.verify|verify} messages.
         * @param message BoolMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IBoolMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BoolMsg message, length delimited. Does not implicitly {@link message.BoolMsg.verify|verify} messages.
         * @param message BoolMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IBoolMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BoolMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BoolMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.BoolMsg;

        /**
         * Decodes a BoolMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BoolMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.BoolMsg;

        /**
         * Verifies a BoolMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a LongMsg. */
    interface ILongMsg {

        /** LongMsg value */
        value: number;
    }

    /** Represents a LongMsg. */
    class LongMsg implements ILongMsg {

        /**
         * Constructs a new LongMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.ILongMsg);

        /** LongMsg value. */
        public value: number;

        /**
         * Creates a new LongMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LongMsg instance
         */
        public static create(properties?: message.ILongMsg): message.LongMsg;

        /**
         * Encodes the specified LongMsg message. Does not implicitly {@link message.LongMsg.verify|verify} messages.
         * @param message LongMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.ILongMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LongMsg message, length delimited. Does not implicitly {@link message.LongMsg.verify|verify} messages.
         * @param message LongMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.ILongMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LongMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LongMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.LongMsg;

        /**
         * Decodes a LongMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LongMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.LongMsg;

        /**
         * Verifies a LongMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an Int2Msg. */
    interface IInt2Msg {

        /** Int2Msg value1 */
        value1: number;

        /** Int2Msg value2 */
        value2: number;
    }

    /** Represents an Int2Msg. */
    class Int2Msg implements IInt2Msg {

        /**
         * Constructs a new Int2Msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IInt2Msg);

        /** Int2Msg value1. */
        public value1: number;

        /** Int2Msg value2. */
        public value2: number;

        /**
         * Creates a new Int2Msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Int2Msg instance
         */
        public static create(properties?: message.IInt2Msg): message.Int2Msg;

        /**
         * Encodes the specified Int2Msg message. Does not implicitly {@link message.Int2Msg.verify|verify} messages.
         * @param message Int2Msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IInt2Msg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Int2Msg message, length delimited. Does not implicitly {@link message.Int2Msg.verify|verify} messages.
         * @param message Int2Msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IInt2Msg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Int2Msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Int2Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.Int2Msg;

        /**
         * Decodes an Int2Msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Int2Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.Int2Msg;

        /**
         * Verifies an Int2Msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a StringMsg. */
    interface IStringMsg {

        /** StringMsg value */
        value: string;
    }

    /** Represents a StringMsg. */
    class StringMsg implements IStringMsg {

        /**
         * Constructs a new StringMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IStringMsg);

        /** StringMsg value. */
        public value: string;

        /**
         * Creates a new StringMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StringMsg instance
         */
        public static create(properties?: message.IStringMsg): message.StringMsg;

        /**
         * Encodes the specified StringMsg message. Does not implicitly {@link message.StringMsg.verify|verify} messages.
         * @param message StringMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IStringMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified StringMsg message, length delimited. Does not implicitly {@link message.StringMsg.verify|verify} messages.
         * @param message StringMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IStringMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a StringMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StringMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.StringMsg;

        /**
         * Decodes a StringMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StringMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.StringMsg;

        /**
         * Verifies a StringMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a StringListMsg. */
    interface IStringListMsg {

        /** StringListMsg value */
        value?: (string[]|null);
    }

    /** Represents a StringListMsg. */
    class StringListMsg implements IStringListMsg {

        /**
         * Constructs a new StringListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IStringListMsg);

        /** StringListMsg value. */
        public value: string[];

        /**
         * Creates a new StringListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StringListMsg instance
         */
        public static create(properties?: message.IStringListMsg): message.StringListMsg;

        /**
         * Encodes the specified StringListMsg message. Does not implicitly {@link message.StringListMsg.verify|verify} messages.
         * @param message StringListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IStringListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified StringListMsg message, length delimited. Does not implicitly {@link message.StringListMsg.verify|verify} messages.
         * @param message StringListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IStringListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a StringListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StringListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.StringListMsg;

        /**
         * Decodes a StringListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StringListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.StringListMsg;

        /**
         * Verifies a StringListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BytesMsg. */
    interface IBytesMsg {

        /** BytesMsg value */
        value: Uint8Array;
    }

    /** Represents a BytesMsg. */
    class BytesMsg implements IBytesMsg {

        /**
         * Constructs a new BytesMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IBytesMsg);

        /** BytesMsg value. */
        public value: Uint8Array;

        /**
         * Creates a new BytesMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BytesMsg instance
         */
        public static create(properties?: message.IBytesMsg): message.BytesMsg;

        /**
         * Encodes the specified BytesMsg message. Does not implicitly {@link message.BytesMsg.verify|verify} messages.
         * @param message BytesMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IBytesMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BytesMsg message, length delimited. Does not implicitly {@link message.BytesMsg.verify|verify} messages.
         * @param message BytesMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IBytesMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BytesMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BytesMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.BytesMsg;

        /**
         * Decodes a BytesMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BytesMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.BytesMsg;

        /**
         * Verifies a BytesMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}
