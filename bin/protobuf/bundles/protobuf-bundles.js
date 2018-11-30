var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.message = (function() {

    /**
     * Namespace message.
     * @exports message
     * @namespace
     */
    var message = {};

    message.LoginCMsg = (function() {

        /**
         * Properties of a LoginCMsg.
         * @memberof message
         * @interface ILoginCMsg
         * @property {string} username LoginCMsg username
         * @property {number} roomId LoginCMsg roomId
         */

        /**
         * Constructs a new LoginCMsg.
         * @memberof message
         * @classdesc Represents a LoginCMsg.
         * @implements ILoginCMsg
         * @constructor
         * @param {message.ILoginCMsg=} [properties] Properties to set
         */
        function LoginCMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginCMsg username.
         * @member {string} username
         * @memberof message.LoginCMsg
         * @instance
         */
        LoginCMsg.prototype.username = "";

        /**
         * LoginCMsg roomId.
         * @member {number} roomId
         * @memberof message.LoginCMsg
         * @instance
         */
        LoginCMsg.prototype.roomId = 0;

        /**
         * Creates a new LoginCMsg instance using the specified properties.
         * @function create
         * @memberof message.LoginCMsg
         * @static
         * @param {message.ILoginCMsg=} [properties] Properties to set
         * @returns {message.LoginCMsg} LoginCMsg instance
         */
        LoginCMsg.create = function create(properties) {
            return new LoginCMsg(properties);
        };

        /**
         * Encodes the specified LoginCMsg message. Does not implicitly {@link message.LoginCMsg.verify|verify} messages.
         * @function encode
         * @memberof message.LoginCMsg
         * @static
         * @param {message.ILoginCMsg} message LoginCMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginCMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified LoginCMsg message, length delimited. Does not implicitly {@link message.LoginCMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.LoginCMsg
         * @static
         * @param {message.ILoginCMsg} message LoginCMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginCMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginCMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.LoginCMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.LoginCMsg} LoginCMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginCMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.LoginCMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.roomId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("username"))
                throw $util.ProtocolError("missing required 'username'", { instance: message });
            if (!message.hasOwnProperty("roomId"))
                throw $util.ProtocolError("missing required 'roomId'", { instance: message });
            return message;
        };

        /**
         * Decodes a LoginCMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.LoginCMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.LoginCMsg} LoginCMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginCMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginCMsg message.
         * @function verify
         * @memberof message.LoginCMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginCMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.username))
                return "username: string expected";
            if (!$util.isInteger(message.roomId))
                return "roomId: integer expected";
            return null;
        };

        return LoginCMsg;
    })();

    message.LoginSuccessEndSMsg = (function() {

        /**
         * Properties of a LoginSuccessEndSMsg.
         * @memberof message
         * @interface ILoginSuccessEndSMsg
         * @property {boolean} reconnect LoginSuccessEndSMsg reconnect
         * @property {number|Long} systemTime LoginSuccessEndSMsg systemTime
         */

        /**
         * Constructs a new LoginSuccessEndSMsg.
         * @memberof message
         * @classdesc Represents a LoginSuccessEndSMsg.
         * @implements ILoginSuccessEndSMsg
         * @constructor
         * @param {message.ILoginSuccessEndSMsg=} [properties] Properties to set
         */
        function LoginSuccessEndSMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginSuccessEndSMsg reconnect.
         * @member {boolean} reconnect
         * @memberof message.LoginSuccessEndSMsg
         * @instance
         */
        LoginSuccessEndSMsg.prototype.reconnect = false;

        /**
         * LoginSuccessEndSMsg systemTime.
         * @member {number|Long} systemTime
         * @memberof message.LoginSuccessEndSMsg
         * @instance
         */
        LoginSuccessEndSMsg.prototype.systemTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LoginSuccessEndSMsg instance using the specified properties.
         * @function create
         * @memberof message.LoginSuccessEndSMsg
         * @static
         * @param {message.ILoginSuccessEndSMsg=} [properties] Properties to set
         * @returns {message.LoginSuccessEndSMsg} LoginSuccessEndSMsg instance
         */
        LoginSuccessEndSMsg.create = function create(properties) {
            return new LoginSuccessEndSMsg(properties);
        };

        /**
         * Encodes the specified LoginSuccessEndSMsg message. Does not implicitly {@link message.LoginSuccessEndSMsg.verify|verify} messages.
         * @function encode
         * @memberof message.LoginSuccessEndSMsg
         * @static
         * @param {message.ILoginSuccessEndSMsg} message LoginSuccessEndSMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginSuccessEndSMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.reconnect);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.systemTime);
            return writer;
        };

        /**
         * Encodes the specified LoginSuccessEndSMsg message, length delimited. Does not implicitly {@link message.LoginSuccessEndSMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.LoginSuccessEndSMsg
         * @static
         * @param {message.ILoginSuccessEndSMsg} message LoginSuccessEndSMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginSuccessEndSMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginSuccessEndSMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.LoginSuccessEndSMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.LoginSuccessEndSMsg} LoginSuccessEndSMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginSuccessEndSMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.LoginSuccessEndSMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reconnect = reader.bool();
                    break;
                case 2:
                    message.systemTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("reconnect"))
                throw $util.ProtocolError("missing required 'reconnect'", { instance: message });
            if (!message.hasOwnProperty("systemTime"))
                throw $util.ProtocolError("missing required 'systemTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a LoginSuccessEndSMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.LoginSuccessEndSMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.LoginSuccessEndSMsg} LoginSuccessEndSMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginSuccessEndSMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginSuccessEndSMsg message.
         * @function verify
         * @memberof message.LoginSuccessEndSMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginSuccessEndSMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.reconnect !== "boolean")
                return "reconnect: boolean expected";
            if (!$util.isInteger(message.systemTime) && !(message.systemTime && $util.isInteger(message.systemTime.low) && $util.isInteger(message.systemTime.high)))
                return "systemTime: integer|Long expected";
            return null;
        };

        return LoginSuccessEndSMsg;
    })();

    message.LoginSuccessSMsg = (function() {

        /**
         * Properties of a LoginSuccessSMsg.
         * @memberof message
         * @interface ILoginSuccessSMsg
         * @property {number|Long|null} [playerId] LoginSuccessSMsg playerId
         */

        /**
         * Constructs a new LoginSuccessSMsg.
         * @memberof message
         * @classdesc Represents a LoginSuccessSMsg.
         * @implements ILoginSuccessSMsg
         * @constructor
         * @param {message.ILoginSuccessSMsg=} [properties] Properties to set
         */
        function LoginSuccessSMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginSuccessSMsg playerId.
         * @member {number|Long} playerId
         * @memberof message.LoginSuccessSMsg
         * @instance
         */
        LoginSuccessSMsg.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LoginSuccessSMsg instance using the specified properties.
         * @function create
         * @memberof message.LoginSuccessSMsg
         * @static
         * @param {message.ILoginSuccessSMsg=} [properties] Properties to set
         * @returns {message.LoginSuccessSMsg} LoginSuccessSMsg instance
         */
        LoginSuccessSMsg.create = function create(properties) {
            return new LoginSuccessSMsg(properties);
        };

        /**
         * Encodes the specified LoginSuccessSMsg message. Does not implicitly {@link message.LoginSuccessSMsg.verify|verify} messages.
         * @function encode
         * @memberof message.LoginSuccessSMsg
         * @static
         * @param {message.ILoginSuccessSMsg} message LoginSuccessSMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginSuccessSMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified LoginSuccessSMsg message, length delimited. Does not implicitly {@link message.LoginSuccessSMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.LoginSuccessSMsg
         * @static
         * @param {message.ILoginSuccessSMsg} message LoginSuccessSMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginSuccessSMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginSuccessSMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.LoginSuccessSMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.LoginSuccessSMsg} LoginSuccessSMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginSuccessSMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.LoginSuccessSMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginSuccessSMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.LoginSuccessSMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.LoginSuccessSMsg} LoginSuccessSMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginSuccessSMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginSuccessSMsg message.
         * @function verify
         * @memberof message.LoginSuccessSMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginSuccessSMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            return null;
        };

        return LoginSuccessSMsg;
    })();

    message.ResultTypeSMsg = (function() {

        /**
         * Properties of a ResultTypeSMsg.
         * @memberof message
         * @interface IResultTypeSMsg
         * @property {number} type ResultTypeSMsg type
         */

        /**
         * Constructs a new ResultTypeSMsg.
         * @memberof message
         * @classdesc Represents a ResultTypeSMsg.
         * @implements IResultTypeSMsg
         * @constructor
         * @param {message.IResultTypeSMsg=} [properties] Properties to set
         */
        function ResultTypeSMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResultTypeSMsg type.
         * @member {number} type
         * @memberof message.ResultTypeSMsg
         * @instance
         */
        ResultTypeSMsg.prototype.type = 0;

        /**
         * Creates a new ResultTypeSMsg instance using the specified properties.
         * @function create
         * @memberof message.ResultTypeSMsg
         * @static
         * @param {message.IResultTypeSMsg=} [properties] Properties to set
         * @returns {message.ResultTypeSMsg} ResultTypeSMsg instance
         */
        ResultTypeSMsg.create = function create(properties) {
            return new ResultTypeSMsg(properties);
        };

        /**
         * Encodes the specified ResultTypeSMsg message. Does not implicitly {@link message.ResultTypeSMsg.verify|verify} messages.
         * @function encode
         * @memberof message.ResultTypeSMsg
         * @static
         * @param {message.IResultTypeSMsg} message ResultTypeSMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResultTypeSMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified ResultTypeSMsg message, length delimited. Does not implicitly {@link message.ResultTypeSMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.ResultTypeSMsg
         * @static
         * @param {message.IResultTypeSMsg} message ResultTypeSMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResultTypeSMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResultTypeSMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.ResultTypeSMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.ResultTypeSMsg} ResultTypeSMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResultTypeSMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.ResultTypeSMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes a ResultTypeSMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.ResultTypeSMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.ResultTypeSMsg} ResultTypeSMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResultTypeSMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResultTypeSMsg message.
         * @function verify
         * @memberof message.ResultTypeSMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResultTypeSMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            return null;
        };

        return ResultTypeSMsg;
    })();

    message.PlayerOperationRoomMsg = (function() {

        /**
         * Properties of a PlayerOperationRoomMsg.
         * @memberof message
         * @interface IPlayerOperationRoomMsg
         * @property {boolean} isEnter PlayerOperationRoomMsg isEnter
         * @property {Array.<message.IPlayerBMsg>|null} [player] PlayerOperationRoomMsg player
         */

        /**
         * Constructs a new PlayerOperationRoomMsg.
         * @memberof message
         * @classdesc Represents a PlayerOperationRoomMsg.
         * @implements IPlayerOperationRoomMsg
         * @constructor
         * @param {message.IPlayerOperationRoomMsg=} [properties] Properties to set
         */
        function PlayerOperationRoomMsg(properties) {
            this.player = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerOperationRoomMsg isEnter.
         * @member {boolean} isEnter
         * @memberof message.PlayerOperationRoomMsg
         * @instance
         */
        PlayerOperationRoomMsg.prototype.isEnter = false;

        /**
         * PlayerOperationRoomMsg player.
         * @member {Array.<message.IPlayerBMsg>} player
         * @memberof message.PlayerOperationRoomMsg
         * @instance
         */
        PlayerOperationRoomMsg.prototype.player = $util.emptyArray;

        /**
         * Creates a new PlayerOperationRoomMsg instance using the specified properties.
         * @function create
         * @memberof message.PlayerOperationRoomMsg
         * @static
         * @param {message.IPlayerOperationRoomMsg=} [properties] Properties to set
         * @returns {message.PlayerOperationRoomMsg} PlayerOperationRoomMsg instance
         */
        PlayerOperationRoomMsg.create = function create(properties) {
            return new PlayerOperationRoomMsg(properties);
        };

        /**
         * Encodes the specified PlayerOperationRoomMsg message. Does not implicitly {@link message.PlayerOperationRoomMsg.verify|verify} messages.
         * @function encode
         * @memberof message.PlayerOperationRoomMsg
         * @static
         * @param {message.IPlayerOperationRoomMsg} message PlayerOperationRoomMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerOperationRoomMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isEnter);
            if (message.player != null && message.player.length)
                for (var i = 0; i < message.player.length; ++i)
                    $root.message.PlayerBMsg.encode(message.player[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerOperationRoomMsg message, length delimited. Does not implicitly {@link message.PlayerOperationRoomMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.PlayerOperationRoomMsg
         * @static
         * @param {message.IPlayerOperationRoomMsg} message PlayerOperationRoomMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerOperationRoomMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerOperationRoomMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.PlayerOperationRoomMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.PlayerOperationRoomMsg} PlayerOperationRoomMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerOperationRoomMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.PlayerOperationRoomMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isEnter = reader.bool();
                    break;
                case 2:
                    if (!(message.player && message.player.length))
                        message.player = [];
                    message.player.push($root.message.PlayerBMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("isEnter"))
                throw $util.ProtocolError("missing required 'isEnter'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerOperationRoomMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.PlayerOperationRoomMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.PlayerOperationRoomMsg} PlayerOperationRoomMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerOperationRoomMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerOperationRoomMsg message.
         * @function verify
         * @memberof message.PlayerOperationRoomMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerOperationRoomMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.isEnter !== "boolean")
                return "isEnter: boolean expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                if (!Array.isArray(message.player))
                    return "player: array expected";
                for (var i = 0; i < message.player.length; ++i) {
                    var error = $root.message.PlayerBMsg.verify(message.player[i]);
                    if (error)
                        return "player." + error;
                }
            }
            return null;
        };

        return PlayerOperationRoomMsg;
    })();

    message.PlayerBMsg = (function() {

        /**
         * Properties of a PlayerBMsg.
         * @memberof message
         * @interface IPlayerBMsg
         * @property {number} playerId PlayerBMsg playerId
         * @property {string} nickName PlayerBMsg nickName
         * @property {number} roomId PlayerBMsg roomId
         * @property {number} position PlayerBMsg position
         */

        /**
         * Constructs a new PlayerBMsg.
         * @memberof message
         * @classdesc Represents a PlayerBMsg.
         * @implements IPlayerBMsg
         * @constructor
         * @param {message.IPlayerBMsg=} [properties] Properties to set
         */
        function PlayerBMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerBMsg playerId.
         * @member {number} playerId
         * @memberof message.PlayerBMsg
         * @instance
         */
        PlayerBMsg.prototype.playerId = 0;

        /**
         * PlayerBMsg nickName.
         * @member {string} nickName
         * @memberof message.PlayerBMsg
         * @instance
         */
        PlayerBMsg.prototype.nickName = "";

        /**
         * PlayerBMsg roomId.
         * @member {number} roomId
         * @memberof message.PlayerBMsg
         * @instance
         */
        PlayerBMsg.prototype.roomId = 0;

        /**
         * PlayerBMsg position.
         * @member {number} position
         * @memberof message.PlayerBMsg
         * @instance
         */
        PlayerBMsg.prototype.position = 0;

        /**
         * Creates a new PlayerBMsg instance using the specified properties.
         * @function create
         * @memberof message.PlayerBMsg
         * @static
         * @param {message.IPlayerBMsg=} [properties] Properties to set
         * @returns {message.PlayerBMsg} PlayerBMsg instance
         */
        PlayerBMsg.create = function create(properties) {
            return new PlayerBMsg(properties);
        };

        /**
         * Encodes the specified PlayerBMsg message. Does not implicitly {@link message.PlayerBMsg.verify|verify} messages.
         * @function encode
         * @memberof message.PlayerBMsg
         * @static
         * @param {message.IPlayerBMsg} message PlayerBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerBMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.playerId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roomId);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.position);
            return writer;
        };

        /**
         * Encodes the specified PlayerBMsg message, length delimited. Does not implicitly {@link message.PlayerBMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.PlayerBMsg
         * @static
         * @param {message.IPlayerBMsg} message PlayerBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerBMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerBMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.PlayerBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.PlayerBMsg} PlayerBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerBMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.PlayerBMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.double();
                    break;
                case 2:
                    message.nickName = reader.string();
                    break;
                case 3:
                    message.roomId = reader.int32();
                    break;
                case 4:
                    message.position = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("nickName"))
                throw $util.ProtocolError("missing required 'nickName'", { instance: message });
            if (!message.hasOwnProperty("roomId"))
                throw $util.ProtocolError("missing required 'roomId'", { instance: message });
            if (!message.hasOwnProperty("position"))
                throw $util.ProtocolError("missing required 'position'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerBMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.PlayerBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.PlayerBMsg} PlayerBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerBMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerBMsg message.
         * @function verify
         * @memberof message.PlayerBMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerBMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.playerId !== "number")
                return "playerId: number expected";
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
            if (!$util.isInteger(message.roomId))
                return "roomId: integer expected";
            if (!$util.isInteger(message.position))
                return "position: integer expected";
            return null;
        };

        return PlayerBMsg;
    })();

    message.AllPlayerCMJBMsg = (function() {

        /**
         * Properties of an AllPlayerCMJBMsg.
         * @memberof message
         * @interface IAllPlayerCMJBMsg
         * @property {message.ICMJBMsg} pos1 AllPlayerCMJBMsg pos1
         * @property {message.ICMJBMsg} pos2 AllPlayerCMJBMsg pos2
         * @property {message.ICMJBMsg} pos3 AllPlayerCMJBMsg pos3
         * @property {message.ICMJBMsg} pos4 AllPlayerCMJBMsg pos4
         */

        /**
         * Constructs a new AllPlayerCMJBMsg.
         * @memberof message
         * @classdesc Represents an AllPlayerCMJBMsg.
         * @implements IAllPlayerCMJBMsg
         * @constructor
         * @param {message.IAllPlayerCMJBMsg=} [properties] Properties to set
         */
        function AllPlayerCMJBMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AllPlayerCMJBMsg pos1.
         * @member {message.ICMJBMsg} pos1
         * @memberof message.AllPlayerCMJBMsg
         * @instance
         */
        AllPlayerCMJBMsg.prototype.pos1 = null;

        /**
         * AllPlayerCMJBMsg pos2.
         * @member {message.ICMJBMsg} pos2
         * @memberof message.AllPlayerCMJBMsg
         * @instance
         */
        AllPlayerCMJBMsg.prototype.pos2 = null;

        /**
         * AllPlayerCMJBMsg pos3.
         * @member {message.ICMJBMsg} pos3
         * @memberof message.AllPlayerCMJBMsg
         * @instance
         */
        AllPlayerCMJBMsg.prototype.pos3 = null;

        /**
         * AllPlayerCMJBMsg pos4.
         * @member {message.ICMJBMsg} pos4
         * @memberof message.AllPlayerCMJBMsg
         * @instance
         */
        AllPlayerCMJBMsg.prototype.pos4 = null;

        /**
         * Creates a new AllPlayerCMJBMsg instance using the specified properties.
         * @function create
         * @memberof message.AllPlayerCMJBMsg
         * @static
         * @param {message.IAllPlayerCMJBMsg=} [properties] Properties to set
         * @returns {message.AllPlayerCMJBMsg} AllPlayerCMJBMsg instance
         */
        AllPlayerCMJBMsg.create = function create(properties) {
            return new AllPlayerCMJBMsg(properties);
        };

        /**
         * Encodes the specified AllPlayerCMJBMsg message. Does not implicitly {@link message.AllPlayerCMJBMsg.verify|verify} messages.
         * @function encode
         * @memberof message.AllPlayerCMJBMsg
         * @static
         * @param {message.IAllPlayerCMJBMsg} message AllPlayerCMJBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllPlayerCMJBMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.message.CMJBMsg.encode(message.pos1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            $root.message.CMJBMsg.encode(message.pos2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            $root.message.CMJBMsg.encode(message.pos3, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            $root.message.CMJBMsg.encode(message.pos4, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AllPlayerCMJBMsg message, length delimited. Does not implicitly {@link message.AllPlayerCMJBMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.AllPlayerCMJBMsg
         * @static
         * @param {message.IAllPlayerCMJBMsg} message AllPlayerCMJBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllPlayerCMJBMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AllPlayerCMJBMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.AllPlayerCMJBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.AllPlayerCMJBMsg} AllPlayerCMJBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllPlayerCMJBMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.AllPlayerCMJBMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pos1 = $root.message.CMJBMsg.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pos2 = $root.message.CMJBMsg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.pos3 = $root.message.CMJBMsg.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.pos4 = $root.message.CMJBMsg.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("pos1"))
                throw $util.ProtocolError("missing required 'pos1'", { instance: message });
            if (!message.hasOwnProperty("pos2"))
                throw $util.ProtocolError("missing required 'pos2'", { instance: message });
            if (!message.hasOwnProperty("pos3"))
                throw $util.ProtocolError("missing required 'pos3'", { instance: message });
            if (!message.hasOwnProperty("pos4"))
                throw $util.ProtocolError("missing required 'pos4'", { instance: message });
            return message;
        };

        /**
         * Decodes an AllPlayerCMJBMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.AllPlayerCMJBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.AllPlayerCMJBMsg} AllPlayerCMJBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllPlayerCMJBMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AllPlayerCMJBMsg message.
         * @function verify
         * @memberof message.AllPlayerCMJBMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AllPlayerCMJBMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.message.CMJBMsg.verify(message.pos1);
                if (error)
                    return "pos1." + error;
            }
            {
                var error = $root.message.CMJBMsg.verify(message.pos2);
                if (error)
                    return "pos2." + error;
            }
            {
                var error = $root.message.CMJBMsg.verify(message.pos3);
                if (error)
                    return "pos3." + error;
            }
            {
                var error = $root.message.CMJBMsg.verify(message.pos4);
                if (error)
                    return "pos4." + error;
            }
            return null;
        };

        return AllPlayerCMJBMsg;
    })();

    message.CMJBMsg = (function() {

        /**
         * Properties of a CMJBMsg.
         * @memberof message
         * @interface ICMJBMsg
         * @property {Array.<message.IIntListMsg>|null} [mMyPAIVec] CMJBMsg mMyPAIVec
         * @property {boolean} mDealer CMJBMsg mDealer
         */

        /**
         * Constructs a new CMJBMsg.
         * @memberof message
         * @classdesc Represents a CMJBMsg.
         * @implements ICMJBMsg
         * @constructor
         * @param {message.ICMJBMsg=} [properties] Properties to set
         */
        function CMJBMsg(properties) {
            this.mMyPAIVec = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMJBMsg mMyPAIVec.
         * @member {Array.<message.IIntListMsg>} mMyPAIVec
         * @memberof message.CMJBMsg
         * @instance
         */
        CMJBMsg.prototype.mMyPAIVec = $util.emptyArray;

        /**
         * CMJBMsg mDealer.
         * @member {boolean} mDealer
         * @memberof message.CMJBMsg
         * @instance
         */
        CMJBMsg.prototype.mDealer = false;

        /**
         * Creates a new CMJBMsg instance using the specified properties.
         * @function create
         * @memberof message.CMJBMsg
         * @static
         * @param {message.ICMJBMsg=} [properties] Properties to set
         * @returns {message.CMJBMsg} CMJBMsg instance
         */
        CMJBMsg.create = function create(properties) {
            return new CMJBMsg(properties);
        };

        /**
         * Encodes the specified CMJBMsg message. Does not implicitly {@link message.CMJBMsg.verify|verify} messages.
         * @function encode
         * @memberof message.CMJBMsg
         * @static
         * @param {message.ICMJBMsg} message CMJBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMJBMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mMyPAIVec != null && message.mMyPAIVec.length)
                for (var i = 0; i < message.mMyPAIVec.length; ++i)
                    $root.message.IntListMsg.encode(message.mMyPAIVec[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.mDealer);
            return writer;
        };

        /**
         * Encodes the specified CMJBMsg message, length delimited. Does not implicitly {@link message.CMJBMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.CMJBMsg
         * @static
         * @param {message.ICMJBMsg} message CMJBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMJBMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMJBMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.CMJBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.CMJBMsg} CMJBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMJBMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.CMJBMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.mMyPAIVec && message.mMyPAIVec.length))
                        message.mMyPAIVec = [];
                    message.mMyPAIVec.push($root.message.IntListMsg.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.mDealer = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mDealer"))
                throw $util.ProtocolError("missing required 'mDealer'", { instance: message });
            return message;
        };

        /**
         * Decodes a CMJBMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.CMJBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.CMJBMsg} CMJBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMJBMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMJBMsg message.
         * @function verify
         * @memberof message.CMJBMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMJBMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mMyPAIVec != null && message.hasOwnProperty("mMyPAIVec")) {
                if (!Array.isArray(message.mMyPAIVec))
                    return "mMyPAIVec: array expected";
                for (var i = 0; i < message.mMyPAIVec.length; ++i) {
                    var error = $root.message.IntListMsg.verify(message.mMyPAIVec[i]);
                    if (error)
                        return "mMyPAIVec." + error;
                }
            }
            if (typeof message.mDealer !== "boolean")
                return "mDealer: boolean expected";
            return null;
        };

        return CMJBMsg;
    })();

    message.AddPaiBMsg = (function() {

        /**
         * Properties of an AddPaiBMsg.
         * @memberof message
         * @interface IAddPaiBMsg
         * @property {number} playerId AddPaiBMsg playerId
         * @property {message.IStPAIBMsg} addPai AddPaiBMsg addPai
         */

        /**
         * Constructs a new AddPaiBMsg.
         * @memberof message
         * @classdesc Represents an AddPaiBMsg.
         * @implements IAddPaiBMsg
         * @constructor
         * @param {message.IAddPaiBMsg=} [properties] Properties to set
         */
        function AddPaiBMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddPaiBMsg playerId.
         * @member {number} playerId
         * @memberof message.AddPaiBMsg
         * @instance
         */
        AddPaiBMsg.prototype.playerId = 0;

        /**
         * AddPaiBMsg addPai.
         * @member {message.IStPAIBMsg} addPai
         * @memberof message.AddPaiBMsg
         * @instance
         */
        AddPaiBMsg.prototype.addPai = null;

        /**
         * Creates a new AddPaiBMsg instance using the specified properties.
         * @function create
         * @memberof message.AddPaiBMsg
         * @static
         * @param {message.IAddPaiBMsg=} [properties] Properties to set
         * @returns {message.AddPaiBMsg} AddPaiBMsg instance
         */
        AddPaiBMsg.create = function create(properties) {
            return new AddPaiBMsg(properties);
        };

        /**
         * Encodes the specified AddPaiBMsg message. Does not implicitly {@link message.AddPaiBMsg.verify|verify} messages.
         * @function encode
         * @memberof message.AddPaiBMsg
         * @static
         * @param {message.IAddPaiBMsg} message AddPaiBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddPaiBMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.playerId);
            $root.message.StPAIBMsg.encode(message.addPai, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AddPaiBMsg message, length delimited. Does not implicitly {@link message.AddPaiBMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.AddPaiBMsg
         * @static
         * @param {message.IAddPaiBMsg} message AddPaiBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddPaiBMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddPaiBMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.AddPaiBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.AddPaiBMsg} AddPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddPaiBMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.AddPaiBMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.double();
                    break;
                case 2:
                    message.addPai = $root.message.StPAIBMsg.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("addPai"))
                throw $util.ProtocolError("missing required 'addPai'", { instance: message });
            return message;
        };

        /**
         * Decodes an AddPaiBMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.AddPaiBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.AddPaiBMsg} AddPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddPaiBMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddPaiBMsg message.
         * @function verify
         * @memberof message.AddPaiBMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddPaiBMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.playerId !== "number")
                return "playerId: number expected";
            {
                var error = $root.message.StPAIBMsg.verify(message.addPai);
                if (error)
                    return "addPai." + error;
            }
            return null;
        };

        return AddPaiBMsg;
    })();

    message.DelPaiBMsg = (function() {

        /**
         * Properties of a DelPaiBMsg.
         * @memberof message
         * @interface IDelPaiBMsg
         * @property {number} playerId DelPaiBMsg playerId
         * @property {message.IStPAIBMsg} delPai DelPaiBMsg delPai
         */

        /**
         * Constructs a new DelPaiBMsg.
         * @memberof message
         * @classdesc Represents a DelPaiBMsg.
         * @implements IDelPaiBMsg
         * @constructor
         * @param {message.IDelPaiBMsg=} [properties] Properties to set
         */
        function DelPaiBMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DelPaiBMsg playerId.
         * @member {number} playerId
         * @memberof message.DelPaiBMsg
         * @instance
         */
        DelPaiBMsg.prototype.playerId = 0;

        /**
         * DelPaiBMsg delPai.
         * @member {message.IStPAIBMsg} delPai
         * @memberof message.DelPaiBMsg
         * @instance
         */
        DelPaiBMsg.prototype.delPai = null;

        /**
         * Creates a new DelPaiBMsg instance using the specified properties.
         * @function create
         * @memberof message.DelPaiBMsg
         * @static
         * @param {message.IDelPaiBMsg=} [properties] Properties to set
         * @returns {message.DelPaiBMsg} DelPaiBMsg instance
         */
        DelPaiBMsg.create = function create(properties) {
            return new DelPaiBMsg(properties);
        };

        /**
         * Encodes the specified DelPaiBMsg message. Does not implicitly {@link message.DelPaiBMsg.verify|verify} messages.
         * @function encode
         * @memberof message.DelPaiBMsg
         * @static
         * @param {message.IDelPaiBMsg} message DelPaiBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelPaiBMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.playerId);
            $root.message.StPAIBMsg.encode(message.delPai, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DelPaiBMsg message, length delimited. Does not implicitly {@link message.DelPaiBMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.DelPaiBMsg
         * @static
         * @param {message.IDelPaiBMsg} message DelPaiBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelPaiBMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelPaiBMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.DelPaiBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.DelPaiBMsg} DelPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelPaiBMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.DelPaiBMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.double();
                    break;
                case 2:
                    message.delPai = $root.message.StPAIBMsg.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("delPai"))
                throw $util.ProtocolError("missing required 'delPai'", { instance: message });
            return message;
        };

        /**
         * Decodes a DelPaiBMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.DelPaiBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.DelPaiBMsg} DelPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelPaiBMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DelPaiBMsg message.
         * @function verify
         * @memberof message.DelPaiBMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DelPaiBMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.playerId !== "number")
                return "playerId: number expected";
            {
                var error = $root.message.StPAIBMsg.verify(message.delPai);
                if (error)
                    return "delPai." + error;
            }
            return null;
        };

        return DelPaiBMsg;
    })();

    message.ChiPaiBMsg = (function() {

        /**
         * Properties of a ChiPaiBMsg.
         * @memberof message
         * @interface IChiPaiBMsg
         * @property {number} playerId ChiPaiBMsg playerId
         * @property {message.IStCHIBMsg} stChi ChiPaiBMsg stChi
         */

        /**
         * Constructs a new ChiPaiBMsg.
         * @memberof message
         * @classdesc Represents a ChiPaiBMsg.
         * @implements IChiPaiBMsg
         * @constructor
         * @param {message.IChiPaiBMsg=} [properties] Properties to set
         */
        function ChiPaiBMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChiPaiBMsg playerId.
         * @member {number} playerId
         * @memberof message.ChiPaiBMsg
         * @instance
         */
        ChiPaiBMsg.prototype.playerId = 0;

        /**
         * ChiPaiBMsg stChi.
         * @member {message.IStCHIBMsg} stChi
         * @memberof message.ChiPaiBMsg
         * @instance
         */
        ChiPaiBMsg.prototype.stChi = null;

        /**
         * Creates a new ChiPaiBMsg instance using the specified properties.
         * @function create
         * @memberof message.ChiPaiBMsg
         * @static
         * @param {message.IChiPaiBMsg=} [properties] Properties to set
         * @returns {message.ChiPaiBMsg} ChiPaiBMsg instance
         */
        ChiPaiBMsg.create = function create(properties) {
            return new ChiPaiBMsg(properties);
        };

        /**
         * Encodes the specified ChiPaiBMsg message. Does not implicitly {@link message.ChiPaiBMsg.verify|verify} messages.
         * @function encode
         * @memberof message.ChiPaiBMsg
         * @static
         * @param {message.IChiPaiBMsg} message ChiPaiBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChiPaiBMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.playerId);
            $root.message.StCHIBMsg.encode(message.stChi, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ChiPaiBMsg message, length delimited. Does not implicitly {@link message.ChiPaiBMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.ChiPaiBMsg
         * @static
         * @param {message.IChiPaiBMsg} message ChiPaiBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChiPaiBMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChiPaiBMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.ChiPaiBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.ChiPaiBMsg} ChiPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChiPaiBMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.ChiPaiBMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.double();
                    break;
                case 2:
                    message.stChi = $root.message.StCHIBMsg.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("stChi"))
                throw $util.ProtocolError("missing required 'stChi'", { instance: message });
            return message;
        };

        /**
         * Decodes a ChiPaiBMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.ChiPaiBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.ChiPaiBMsg} ChiPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChiPaiBMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChiPaiBMsg message.
         * @function verify
         * @memberof message.ChiPaiBMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChiPaiBMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.playerId !== "number")
                return "playerId: number expected";
            {
                var error = $root.message.StCHIBMsg.verify(message.stChi);
                if (error)
                    return "stChi." + error;
            }
            return null;
        };

        return ChiPaiBMsg;
    })();

    message.PengPaiBMsg = (function() {

        /**
         * Properties of a PengPaiBMsg.
         * @memberof message
         * @interface IPengPaiBMsg
         * @property {number} playerId PengPaiBMsg playerId
         * @property {message.IStPAIBMsg} stPai PengPaiBMsg stPai
         */

        /**
         * Constructs a new PengPaiBMsg.
         * @memberof message
         * @classdesc Represents a PengPaiBMsg.
         * @implements IPengPaiBMsg
         * @constructor
         * @param {message.IPengPaiBMsg=} [properties] Properties to set
         */
        function PengPaiBMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PengPaiBMsg playerId.
         * @member {number} playerId
         * @memberof message.PengPaiBMsg
         * @instance
         */
        PengPaiBMsg.prototype.playerId = 0;

        /**
         * PengPaiBMsg stPai.
         * @member {message.IStPAIBMsg} stPai
         * @memberof message.PengPaiBMsg
         * @instance
         */
        PengPaiBMsg.prototype.stPai = null;

        /**
         * Creates a new PengPaiBMsg instance using the specified properties.
         * @function create
         * @memberof message.PengPaiBMsg
         * @static
         * @param {message.IPengPaiBMsg=} [properties] Properties to set
         * @returns {message.PengPaiBMsg} PengPaiBMsg instance
         */
        PengPaiBMsg.create = function create(properties) {
            return new PengPaiBMsg(properties);
        };

        /**
         * Encodes the specified PengPaiBMsg message. Does not implicitly {@link message.PengPaiBMsg.verify|verify} messages.
         * @function encode
         * @memberof message.PengPaiBMsg
         * @static
         * @param {message.IPengPaiBMsg} message PengPaiBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PengPaiBMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.playerId);
            $root.message.StPAIBMsg.encode(message.stPai, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PengPaiBMsg message, length delimited. Does not implicitly {@link message.PengPaiBMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.PengPaiBMsg
         * @static
         * @param {message.IPengPaiBMsg} message PengPaiBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PengPaiBMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PengPaiBMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.PengPaiBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.PengPaiBMsg} PengPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PengPaiBMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.PengPaiBMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.double();
                    break;
                case 2:
                    message.stPai = $root.message.StPAIBMsg.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("stPai"))
                throw $util.ProtocolError("missing required 'stPai'", { instance: message });
            return message;
        };

        /**
         * Decodes a PengPaiBMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.PengPaiBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.PengPaiBMsg} PengPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PengPaiBMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PengPaiBMsg message.
         * @function verify
         * @memberof message.PengPaiBMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PengPaiBMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.playerId !== "number")
                return "playerId: number expected";
            {
                var error = $root.message.StPAIBMsg.verify(message.stPai);
                if (error)
                    return "stPai." + error;
            }
            return null;
        };

        return PengPaiBMsg;
    })();

    message.GangPaiBMsg = (function() {

        /**
         * Properties of a GangPaiBMsg.
         * @memberof message
         * @interface IGangPaiBMsg
         * @property {number} playerId GangPaiBMsg playerId
         * @property {message.IStPAIBMsg} stPai GangPaiBMsg stPai
         */

        /**
         * Constructs a new GangPaiBMsg.
         * @memberof message
         * @classdesc Represents a GangPaiBMsg.
         * @implements IGangPaiBMsg
         * @constructor
         * @param {message.IGangPaiBMsg=} [properties] Properties to set
         */
        function GangPaiBMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GangPaiBMsg playerId.
         * @member {number} playerId
         * @memberof message.GangPaiBMsg
         * @instance
         */
        GangPaiBMsg.prototype.playerId = 0;

        /**
         * GangPaiBMsg stPai.
         * @member {message.IStPAIBMsg} stPai
         * @memberof message.GangPaiBMsg
         * @instance
         */
        GangPaiBMsg.prototype.stPai = null;

        /**
         * Creates a new GangPaiBMsg instance using the specified properties.
         * @function create
         * @memberof message.GangPaiBMsg
         * @static
         * @param {message.IGangPaiBMsg=} [properties] Properties to set
         * @returns {message.GangPaiBMsg} GangPaiBMsg instance
         */
        GangPaiBMsg.create = function create(properties) {
            return new GangPaiBMsg(properties);
        };

        /**
         * Encodes the specified GangPaiBMsg message. Does not implicitly {@link message.GangPaiBMsg.verify|verify} messages.
         * @function encode
         * @memberof message.GangPaiBMsg
         * @static
         * @param {message.IGangPaiBMsg} message GangPaiBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GangPaiBMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.playerId);
            $root.message.StPAIBMsg.encode(message.stPai, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GangPaiBMsg message, length delimited. Does not implicitly {@link message.GangPaiBMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.GangPaiBMsg
         * @static
         * @param {message.IGangPaiBMsg} message GangPaiBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GangPaiBMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GangPaiBMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.GangPaiBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.GangPaiBMsg} GangPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GangPaiBMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.GangPaiBMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.double();
                    break;
                case 2:
                    message.stPai = $root.message.StPAIBMsg.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("stPai"))
                throw $util.ProtocolError("missing required 'stPai'", { instance: message });
            return message;
        };

        /**
         * Decodes a GangPaiBMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.GangPaiBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.GangPaiBMsg} GangPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GangPaiBMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GangPaiBMsg message.
         * @function verify
         * @memberof message.GangPaiBMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GangPaiBMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.playerId !== "number")
                return "playerId: number expected";
            {
                var error = $root.message.StPAIBMsg.verify(message.stPai);
                if (error)
                    return "stPai." + error;
            }
            return null;
        };

        return GangPaiBMsg;
    })();

    message.HuPaiBMsg = (function() {

        /**
         * Properties of a HuPaiBMsg.
         * @memberof message
         * @interface IHuPaiBMsg
         * @property {number} playerId HuPaiBMsg playerId
         * @property {message.IStGoodInfoBMsg|null} [goodInfo] HuPaiBMsg goodInfo
         * @property {message.IStPAIBMsg|null} [stPai] HuPaiBMsg stPai
         */

        /**
         * Constructs a new HuPaiBMsg.
         * @memberof message
         * @classdesc Represents a HuPaiBMsg.
         * @implements IHuPaiBMsg
         * @constructor
         * @param {message.IHuPaiBMsg=} [properties] Properties to set
         */
        function HuPaiBMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HuPaiBMsg playerId.
         * @member {number} playerId
         * @memberof message.HuPaiBMsg
         * @instance
         */
        HuPaiBMsg.prototype.playerId = 0;

        /**
         * HuPaiBMsg goodInfo.
         * @member {message.IStGoodInfoBMsg|null|undefined} goodInfo
         * @memberof message.HuPaiBMsg
         * @instance
         */
        HuPaiBMsg.prototype.goodInfo = null;

        /**
         * HuPaiBMsg stPai.
         * @member {message.IStPAIBMsg|null|undefined} stPai
         * @memberof message.HuPaiBMsg
         * @instance
         */
        HuPaiBMsg.prototype.stPai = null;

        /**
         * Creates a new HuPaiBMsg instance using the specified properties.
         * @function create
         * @memberof message.HuPaiBMsg
         * @static
         * @param {message.IHuPaiBMsg=} [properties] Properties to set
         * @returns {message.HuPaiBMsg} HuPaiBMsg instance
         */
        HuPaiBMsg.create = function create(properties) {
            return new HuPaiBMsg(properties);
        };

        /**
         * Encodes the specified HuPaiBMsg message. Does not implicitly {@link message.HuPaiBMsg.verify|verify} messages.
         * @function encode
         * @memberof message.HuPaiBMsg
         * @static
         * @param {message.IHuPaiBMsg} message HuPaiBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HuPaiBMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.playerId);
            if (message.goodInfo != null && message.hasOwnProperty("goodInfo"))
                $root.message.StGoodInfoBMsg.encode(message.goodInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.stPai != null && message.hasOwnProperty("stPai"))
                $root.message.StPAIBMsg.encode(message.stPai, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HuPaiBMsg message, length delimited. Does not implicitly {@link message.HuPaiBMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.HuPaiBMsg
         * @static
         * @param {message.IHuPaiBMsg} message HuPaiBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HuPaiBMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HuPaiBMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.HuPaiBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.HuPaiBMsg} HuPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HuPaiBMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.HuPaiBMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.double();
                    break;
                case 2:
                    message.goodInfo = $root.message.StGoodInfoBMsg.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.stPai = $root.message.StPAIBMsg.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            return message;
        };

        /**
         * Decodes a HuPaiBMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.HuPaiBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.HuPaiBMsg} HuPaiBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HuPaiBMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HuPaiBMsg message.
         * @function verify
         * @memberof message.HuPaiBMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HuPaiBMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.playerId !== "number")
                return "playerId: number expected";
            if (message.goodInfo != null && message.hasOwnProperty("goodInfo")) {
                var error = $root.message.StGoodInfoBMsg.verify(message.goodInfo);
                if (error)
                    return "goodInfo." + error;
            }
            if (message.stPai != null && message.hasOwnProperty("stPai")) {
                var error = $root.message.StPAIBMsg.verify(message.stPai);
                if (error)
                    return "stPai." + error;
            }
            return null;
        };

        return HuPaiBMsg;
    })();

    message.OperationBMsg = (function() {

        /**
         * Properties of an OperationBMsg.
         * @memberof message
         * @interface IOperationBMsg
         * @property {number} playerId OperationBMsg playerId
         * @property {number} operationType OperationBMsg operationType
         * @property {message.IStPAIBMsg|null} [stPai] OperationBMsg stPai
         * @property {boolean|null} [isSelfHand] OperationBMsg isSelfHand
         */

        /**
         * Constructs a new OperationBMsg.
         * @memberof message
         * @classdesc Represents an OperationBMsg.
         * @implements IOperationBMsg
         * @constructor
         * @param {message.IOperationBMsg=} [properties] Properties to set
         */
        function OperationBMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperationBMsg playerId.
         * @member {number} playerId
         * @memberof message.OperationBMsg
         * @instance
         */
        OperationBMsg.prototype.playerId = 0;

        /**
         * OperationBMsg operationType.
         * @member {number} operationType
         * @memberof message.OperationBMsg
         * @instance
         */
        OperationBMsg.prototype.operationType = 0;

        /**
         * OperationBMsg stPai.
         * @member {message.IStPAIBMsg|null|undefined} stPai
         * @memberof message.OperationBMsg
         * @instance
         */
        OperationBMsg.prototype.stPai = null;

        /**
         * OperationBMsg isSelfHand.
         * @member {boolean} isSelfHand
         * @memberof message.OperationBMsg
         * @instance
         */
        OperationBMsg.prototype.isSelfHand = false;

        /**
         * Creates a new OperationBMsg instance using the specified properties.
         * @function create
         * @memberof message.OperationBMsg
         * @static
         * @param {message.IOperationBMsg=} [properties] Properties to set
         * @returns {message.OperationBMsg} OperationBMsg instance
         */
        OperationBMsg.create = function create(properties) {
            return new OperationBMsg(properties);
        };

        /**
         * Encodes the specified OperationBMsg message. Does not implicitly {@link message.OperationBMsg.verify|verify} messages.
         * @function encode
         * @memberof message.OperationBMsg
         * @static
         * @param {message.IOperationBMsg} message OperationBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperationBMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.playerId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.operationType);
            if (message.stPai != null && message.hasOwnProperty("stPai"))
                $root.message.StPAIBMsg.encode(message.stPai, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.isSelfHand != null && message.hasOwnProperty("isSelfHand"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isSelfHand);
            return writer;
        };

        /**
         * Encodes the specified OperationBMsg message, length delimited. Does not implicitly {@link message.OperationBMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.OperationBMsg
         * @static
         * @param {message.IOperationBMsg} message OperationBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperationBMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperationBMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.OperationBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.OperationBMsg} OperationBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperationBMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.OperationBMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.double();
                    break;
                case 2:
                    message.operationType = reader.int32();
                    break;
                case 3:
                    message.stPai = $root.message.StPAIBMsg.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.isSelfHand = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("operationType"))
                throw $util.ProtocolError("missing required 'operationType'", { instance: message });
            return message;
        };

        /**
         * Decodes an OperationBMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.OperationBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.OperationBMsg} OperationBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperationBMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperationBMsg message.
         * @function verify
         * @memberof message.OperationBMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperationBMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.playerId !== "number")
                return "playerId: number expected";
            if (!$util.isInteger(message.operationType))
                return "operationType: integer expected";
            if (message.stPai != null && message.hasOwnProperty("stPai")) {
                var error = $root.message.StPAIBMsg.verify(message.stPai);
                if (error)
                    return "stPai." + error;
            }
            if (message.isSelfHand != null && message.hasOwnProperty("isSelfHand"))
                if (typeof message.isSelfHand !== "boolean")
                    return "isSelfHand: boolean expected";
            return null;
        };

        return OperationBMsg;
    })();

    message.StPAIBMsg = (function() {

        /**
         * Properties of a StPAIBMsg.
         * @memberof message
         * @interface IStPAIBMsg
         * @property {number} mType StPAIBMsg mType
         * @property {number} mValue StPAIBMsg mValue
         * @property {boolean|null} [isGang] StPAIBMsg isGang
         */

        /**
         * Constructs a new StPAIBMsg.
         * @memberof message
         * @classdesc Represents a StPAIBMsg.
         * @implements IStPAIBMsg
         * @constructor
         * @param {message.IStPAIBMsg=} [properties] Properties to set
         */
        function StPAIBMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StPAIBMsg mType.
         * @member {number} mType
         * @memberof message.StPAIBMsg
         * @instance
         */
        StPAIBMsg.prototype.mType = 0;

        /**
         * StPAIBMsg mValue.
         * @member {number} mValue
         * @memberof message.StPAIBMsg
         * @instance
         */
        StPAIBMsg.prototype.mValue = 0;

        /**
         * StPAIBMsg isGang.
         * @member {boolean} isGang
         * @memberof message.StPAIBMsg
         * @instance
         */
        StPAIBMsg.prototype.isGang = false;

        /**
         * Creates a new StPAIBMsg instance using the specified properties.
         * @function create
         * @memberof message.StPAIBMsg
         * @static
         * @param {message.IStPAIBMsg=} [properties] Properties to set
         * @returns {message.StPAIBMsg} StPAIBMsg instance
         */
        StPAIBMsg.create = function create(properties) {
            return new StPAIBMsg(properties);
        };

        /**
         * Encodes the specified StPAIBMsg message. Does not implicitly {@link message.StPAIBMsg.verify|verify} messages.
         * @function encode
         * @memberof message.StPAIBMsg
         * @static
         * @param {message.IStPAIBMsg} message StPAIBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StPAIBMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mType);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mValue);
            if (message.isGang != null && message.hasOwnProperty("isGang"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isGang);
            return writer;
        };

        /**
         * Encodes the specified StPAIBMsg message, length delimited. Does not implicitly {@link message.StPAIBMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.StPAIBMsg
         * @static
         * @param {message.IStPAIBMsg} message StPAIBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StPAIBMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StPAIBMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.StPAIBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.StPAIBMsg} StPAIBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StPAIBMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.StPAIBMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mType = reader.int32();
                    break;
                case 2:
                    message.mValue = reader.int32();
                    break;
                case 3:
                    message.isGang = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mType"))
                throw $util.ProtocolError("missing required 'mType'", { instance: message });
            if (!message.hasOwnProperty("mValue"))
                throw $util.ProtocolError("missing required 'mValue'", { instance: message });
            return message;
        };

        /**
         * Decodes a StPAIBMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.StPAIBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.StPAIBMsg} StPAIBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StPAIBMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StPAIBMsg message.
         * @function verify
         * @memberof message.StPAIBMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StPAIBMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.mType))
                return "mType: integer expected";
            if (!$util.isInteger(message.mValue))
                return "mValue: integer expected";
            if (message.isGang != null && message.hasOwnProperty("isGang"))
                if (typeof message.isGang !== "boolean")
                    return "isGang: boolean expected";
            return null;
        };

        return StPAIBMsg;
    })();

    message.StCHIBMsg = (function() {

        /**
         * Properties of a StCHIBMsg.
         * @memberof message
         * @interface IStCHIBMsg
         * @property {number} mType StCHIBMsg mType
         * @property {number} mValue1 StCHIBMsg mValue1
         * @property {number} mValue2 StCHIBMsg mValue2
         * @property {number} mValue3 StCHIBMsg mValue3
         * @property {number} byChiIndex StCHIBMsg byChiIndex
         */

        /**
         * Constructs a new StCHIBMsg.
         * @memberof message
         * @classdesc Represents a StCHIBMsg.
         * @implements IStCHIBMsg
         * @constructor
         * @param {message.IStCHIBMsg=} [properties] Properties to set
         */
        function StCHIBMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StCHIBMsg mType.
         * @member {number} mType
         * @memberof message.StCHIBMsg
         * @instance
         */
        StCHIBMsg.prototype.mType = 0;

        /**
         * StCHIBMsg mValue1.
         * @member {number} mValue1
         * @memberof message.StCHIBMsg
         * @instance
         */
        StCHIBMsg.prototype.mValue1 = 0;

        /**
         * StCHIBMsg mValue2.
         * @member {number} mValue2
         * @memberof message.StCHIBMsg
         * @instance
         */
        StCHIBMsg.prototype.mValue2 = 0;

        /**
         * StCHIBMsg mValue3.
         * @member {number} mValue3
         * @memberof message.StCHIBMsg
         * @instance
         */
        StCHIBMsg.prototype.mValue3 = 0;

        /**
         * StCHIBMsg byChiIndex.
         * @member {number} byChiIndex
         * @memberof message.StCHIBMsg
         * @instance
         */
        StCHIBMsg.prototype.byChiIndex = 0;

        /**
         * Creates a new StCHIBMsg instance using the specified properties.
         * @function create
         * @memberof message.StCHIBMsg
         * @static
         * @param {message.IStCHIBMsg=} [properties] Properties to set
         * @returns {message.StCHIBMsg} StCHIBMsg instance
         */
        StCHIBMsg.create = function create(properties) {
            return new StCHIBMsg(properties);
        };

        /**
         * Encodes the specified StCHIBMsg message. Does not implicitly {@link message.StCHIBMsg.verify|verify} messages.
         * @function encode
         * @memberof message.StCHIBMsg
         * @static
         * @param {message.IStCHIBMsg} message StCHIBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StCHIBMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mType);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mValue1);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.mValue2);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.mValue3);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.byChiIndex);
            return writer;
        };

        /**
         * Encodes the specified StCHIBMsg message, length delimited. Does not implicitly {@link message.StCHIBMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.StCHIBMsg
         * @static
         * @param {message.IStCHIBMsg} message StCHIBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StCHIBMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StCHIBMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.StCHIBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.StCHIBMsg} StCHIBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StCHIBMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.StCHIBMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mType = reader.int32();
                    break;
                case 2:
                    message.mValue1 = reader.int32();
                    break;
                case 3:
                    message.mValue2 = reader.int32();
                    break;
                case 4:
                    message.mValue3 = reader.int32();
                    break;
                case 5:
                    message.byChiIndex = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mType"))
                throw $util.ProtocolError("missing required 'mType'", { instance: message });
            if (!message.hasOwnProperty("mValue1"))
                throw $util.ProtocolError("missing required 'mValue1'", { instance: message });
            if (!message.hasOwnProperty("mValue2"))
                throw $util.ProtocolError("missing required 'mValue2'", { instance: message });
            if (!message.hasOwnProperty("mValue3"))
                throw $util.ProtocolError("missing required 'mValue3'", { instance: message });
            if (!message.hasOwnProperty("byChiIndex"))
                throw $util.ProtocolError("missing required 'byChiIndex'", { instance: message });
            return message;
        };

        /**
         * Decodes a StCHIBMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.StCHIBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.StCHIBMsg} StCHIBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StCHIBMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StCHIBMsg message.
         * @function verify
         * @memberof message.StCHIBMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StCHIBMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.mType))
                return "mType: integer expected";
            if (!$util.isInteger(message.mValue1))
                return "mValue1: integer expected";
            if (!$util.isInteger(message.mValue2))
                return "mValue2: integer expected";
            if (!$util.isInteger(message.mValue3))
                return "mValue3: integer expected";
            if (!$util.isInteger(message.byChiIndex))
                return "byChiIndex: integer expected";
            return null;
        };

        return StCHIBMsg;
    })();

    message.StGoodInfoBMsg = (function() {

        /**
         * Properties of a StGoodInfoBMsg.
         * @memberof message
         * @interface IStGoodInfoBMsg
         * @property {Array.<number>|null} [goodTypes] StGoodInfoBMsg goodTypes
         * @property {number} goodValue StGoodInfoBMsg goodValue
         */

        /**
         * Constructs a new StGoodInfoBMsg.
         * @memberof message
         * @classdesc Represents a StGoodInfoBMsg.
         * @implements IStGoodInfoBMsg
         * @constructor
         * @param {message.IStGoodInfoBMsg=} [properties] Properties to set
         */
        function StGoodInfoBMsg(properties) {
            this.goodTypes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StGoodInfoBMsg goodTypes.
         * @member {Array.<number>} goodTypes
         * @memberof message.StGoodInfoBMsg
         * @instance
         */
        StGoodInfoBMsg.prototype.goodTypes = $util.emptyArray;

        /**
         * StGoodInfoBMsg goodValue.
         * @member {number} goodValue
         * @memberof message.StGoodInfoBMsg
         * @instance
         */
        StGoodInfoBMsg.prototype.goodValue = 0;

        /**
         * Creates a new StGoodInfoBMsg instance using the specified properties.
         * @function create
         * @memberof message.StGoodInfoBMsg
         * @static
         * @param {message.IStGoodInfoBMsg=} [properties] Properties to set
         * @returns {message.StGoodInfoBMsg} StGoodInfoBMsg instance
         */
        StGoodInfoBMsg.create = function create(properties) {
            return new StGoodInfoBMsg(properties);
        };

        /**
         * Encodes the specified StGoodInfoBMsg message. Does not implicitly {@link message.StGoodInfoBMsg.verify|verify} messages.
         * @function encode
         * @memberof message.StGoodInfoBMsg
         * @static
         * @param {message.IStGoodInfoBMsg} message StGoodInfoBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StGoodInfoBMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.goodTypes != null && message.goodTypes.length)
                for (var i = 0; i < message.goodTypes.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.goodTypes[i]);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.goodValue);
            return writer;
        };

        /**
         * Encodes the specified StGoodInfoBMsg message, length delimited. Does not implicitly {@link message.StGoodInfoBMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.StGoodInfoBMsg
         * @static
         * @param {message.IStGoodInfoBMsg} message StGoodInfoBMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StGoodInfoBMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StGoodInfoBMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.StGoodInfoBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.StGoodInfoBMsg} StGoodInfoBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StGoodInfoBMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.StGoodInfoBMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.goodTypes && message.goodTypes.length))
                        message.goodTypes = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.goodTypes.push(reader.int32());
                    } else
                        message.goodTypes.push(reader.int32());
                    break;
                case 2:
                    message.goodValue = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("goodValue"))
                throw $util.ProtocolError("missing required 'goodValue'", { instance: message });
            return message;
        };

        /**
         * Decodes a StGoodInfoBMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.StGoodInfoBMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.StGoodInfoBMsg} StGoodInfoBMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StGoodInfoBMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StGoodInfoBMsg message.
         * @function verify
         * @memberof message.StGoodInfoBMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StGoodInfoBMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.goodTypes != null && message.hasOwnProperty("goodTypes")) {
                if (!Array.isArray(message.goodTypes))
                    return "goodTypes: array expected";
                for (var i = 0; i < message.goodTypes.length; ++i)
                    if (!$util.isInteger(message.goodTypes[i]))
                        return "goodTypes: integer[] expected";
            }
            if (!$util.isInteger(message.goodValue))
                return "goodValue: integer expected";
            return null;
        };

        return StGoodInfoBMsg;
    })();

    message.IntMsg = (function() {

        /**
         * Properties of an IntMsg.
         * @memberof message
         * @interface IIntMsg
         * @property {number} value IntMsg value
         */

        /**
         * Constructs a new IntMsg.
         * @memberof message
         * @classdesc Represents an IntMsg.
         * @implements IIntMsg
         * @constructor
         * @param {message.IIntMsg=} [properties] Properties to set
         */
        function IntMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IntMsg value.
         * @member {number} value
         * @memberof message.IntMsg
         * @instance
         */
        IntMsg.prototype.value = 0;

        /**
         * Creates a new IntMsg instance using the specified properties.
         * @function create
         * @memberof message.IntMsg
         * @static
         * @param {message.IIntMsg=} [properties] Properties to set
         * @returns {message.IntMsg} IntMsg instance
         */
        IntMsg.create = function create(properties) {
            return new IntMsg(properties);
        };

        /**
         * Encodes the specified IntMsg message. Does not implicitly {@link message.IntMsg.verify|verify} messages.
         * @function encode
         * @memberof message.IntMsg
         * @static
         * @param {message.IIntMsg} message IntMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
            return writer;
        };

        /**
         * Encodes the specified IntMsg message, length delimited. Does not implicitly {@link message.IntMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.IntMsg
         * @static
         * @param {message.IIntMsg} message IntMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IntMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.IntMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.IntMsg} IntMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.IntMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("value"))
                throw $util.ProtocolError("missing required 'value'", { instance: message });
            return message;
        };

        /**
         * Decodes an IntMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.IntMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.IntMsg} IntMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IntMsg message.
         * @function verify
         * @memberof message.IntMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IntMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.value))
                return "value: integer expected";
            return null;
        };

        return IntMsg;
    })();

    message.IntListMsg = (function() {

        /**
         * Properties of an IntListMsg.
         * @memberof message
         * @interface IIntListMsg
         * @property {Array.<number>|null} [value] IntListMsg value
         */

        /**
         * Constructs a new IntListMsg.
         * @memberof message
         * @classdesc Represents an IntListMsg.
         * @implements IIntListMsg
         * @constructor
         * @param {message.IIntListMsg=} [properties] Properties to set
         */
        function IntListMsg(properties) {
            this.value = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IntListMsg value.
         * @member {Array.<number>} value
         * @memberof message.IntListMsg
         * @instance
         */
        IntListMsg.prototype.value = $util.emptyArray;

        /**
         * Creates a new IntListMsg instance using the specified properties.
         * @function create
         * @memberof message.IntListMsg
         * @static
         * @param {message.IIntListMsg=} [properties] Properties to set
         * @returns {message.IntListMsg} IntListMsg instance
         */
        IntListMsg.create = function create(properties) {
            return new IntListMsg(properties);
        };

        /**
         * Encodes the specified IntListMsg message. Does not implicitly {@link message.IntListMsg.verify|verify} messages.
         * @function encode
         * @memberof message.IntListMsg
         * @static
         * @param {message.IIntListMsg} message IntListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.value.length)
                for (var i = 0; i < message.value.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value[i]);
            return writer;
        };

        /**
         * Encodes the specified IntListMsg message, length delimited. Does not implicitly {@link message.IntListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.IntListMsg
         * @static
         * @param {message.IIntListMsg} message IntListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IntListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.IntListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.IntListMsg} IntListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.IntListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.value && message.value.length))
                        message.value = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.value.push(reader.int32());
                    } else
                        message.value.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IntListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.IntListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.IntListMsg} IntListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IntListMsg message.
         * @function verify
         * @memberof message.IntListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IntListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                if (!Array.isArray(message.value))
                    return "value: array expected";
                for (var i = 0; i < message.value.length; ++i)
                    if (!$util.isInteger(message.value[i]))
                        return "value: integer[] expected";
            }
            return null;
        };

        return IntListMsg;
    })();

    message.LongListMsg = (function() {

        /**
         * Properties of a LongListMsg.
         * @memberof message
         * @interface ILongListMsg
         * @property {Array.<number>|null} [value] LongListMsg value
         */

        /**
         * Constructs a new LongListMsg.
         * @memberof message
         * @classdesc Represents a LongListMsg.
         * @implements ILongListMsg
         * @constructor
         * @param {message.ILongListMsg=} [properties] Properties to set
         */
        function LongListMsg(properties) {
            this.value = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LongListMsg value.
         * @member {Array.<number>} value
         * @memberof message.LongListMsg
         * @instance
         */
        LongListMsg.prototype.value = $util.emptyArray;

        /**
         * Creates a new LongListMsg instance using the specified properties.
         * @function create
         * @memberof message.LongListMsg
         * @static
         * @param {message.ILongListMsg=} [properties] Properties to set
         * @returns {message.LongListMsg} LongListMsg instance
         */
        LongListMsg.create = function create(properties) {
            return new LongListMsg(properties);
        };

        /**
         * Encodes the specified LongListMsg message. Does not implicitly {@link message.LongListMsg.verify|verify} messages.
         * @function encode
         * @memberof message.LongListMsg
         * @static
         * @param {message.ILongListMsg} message LongListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LongListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.value.length)
                for (var i = 0; i < message.value.length; ++i)
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.value[i]);
            return writer;
        };

        /**
         * Encodes the specified LongListMsg message, length delimited. Does not implicitly {@link message.LongListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.LongListMsg
         * @static
         * @param {message.ILongListMsg} message LongListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LongListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LongListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.LongListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.LongListMsg} LongListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LongListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.LongListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.value && message.value.length))
                        message.value = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.value.push(reader.double());
                    } else
                        message.value.push(reader.double());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LongListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.LongListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.LongListMsg} LongListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LongListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LongListMsg message.
         * @function verify
         * @memberof message.LongListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LongListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                if (!Array.isArray(message.value))
                    return "value: array expected";
                for (var i = 0; i < message.value.length; ++i)
                    if (typeof message.value[i] !== "number")
                        return "value: number[] expected";
            }
            return null;
        };

        return LongListMsg;
    })();

    message.BoolMsg = (function() {

        /**
         * Properties of a BoolMsg.
         * @memberof message
         * @interface IBoolMsg
         * @property {number} value BoolMsg value
         */

        /**
         * Constructs a new BoolMsg.
         * @memberof message
         * @classdesc Represents a BoolMsg.
         * @implements IBoolMsg
         * @constructor
         * @param {message.IBoolMsg=} [properties] Properties to set
         */
        function BoolMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BoolMsg value.
         * @member {number} value
         * @memberof message.BoolMsg
         * @instance
         */
        BoolMsg.prototype.value = 0;

        /**
         * Creates a new BoolMsg instance using the specified properties.
         * @function create
         * @memberof message.BoolMsg
         * @static
         * @param {message.IBoolMsg=} [properties] Properties to set
         * @returns {message.BoolMsg} BoolMsg instance
         */
        BoolMsg.create = function create(properties) {
            return new BoolMsg(properties);
        };

        /**
         * Encodes the specified BoolMsg message. Does not implicitly {@link message.BoolMsg.verify|verify} messages.
         * @function encode
         * @memberof message.BoolMsg
         * @static
         * @param {message.IBoolMsg} message BoolMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BoolMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
            return writer;
        };

        /**
         * Encodes the specified BoolMsg message, length delimited. Does not implicitly {@link message.BoolMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.BoolMsg
         * @static
         * @param {message.IBoolMsg} message BoolMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BoolMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BoolMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.BoolMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.BoolMsg} BoolMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BoolMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.BoolMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("value"))
                throw $util.ProtocolError("missing required 'value'", { instance: message });
            return message;
        };

        /**
         * Decodes a BoolMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.BoolMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.BoolMsg} BoolMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BoolMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BoolMsg message.
         * @function verify
         * @memberof message.BoolMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BoolMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.value))
                return "value: integer expected";
            return null;
        };

        return BoolMsg;
    })();

    message.LongMsg = (function() {

        /**
         * Properties of a LongMsg.
         * @memberof message
         * @interface ILongMsg
         * @property {number} value LongMsg value
         */

        /**
         * Constructs a new LongMsg.
         * @memberof message
         * @classdesc Represents a LongMsg.
         * @implements ILongMsg
         * @constructor
         * @param {message.ILongMsg=} [properties] Properties to set
         */
        function LongMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LongMsg value.
         * @member {number} value
         * @memberof message.LongMsg
         * @instance
         */
        LongMsg.prototype.value = 0;

        /**
         * Creates a new LongMsg instance using the specified properties.
         * @function create
         * @memberof message.LongMsg
         * @static
         * @param {message.ILongMsg=} [properties] Properties to set
         * @returns {message.LongMsg} LongMsg instance
         */
        LongMsg.create = function create(properties) {
            return new LongMsg(properties);
        };

        /**
         * Encodes the specified LongMsg message. Does not implicitly {@link message.LongMsg.verify|verify} messages.
         * @function encode
         * @memberof message.LongMsg
         * @static
         * @param {message.ILongMsg} message LongMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LongMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
            return writer;
        };

        /**
         * Encodes the specified LongMsg message, length delimited. Does not implicitly {@link message.LongMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.LongMsg
         * @static
         * @param {message.ILongMsg} message LongMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LongMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LongMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.LongMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.LongMsg} LongMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LongMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.LongMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("value"))
                throw $util.ProtocolError("missing required 'value'", { instance: message });
            return message;
        };

        /**
         * Decodes a LongMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.LongMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.LongMsg} LongMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LongMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LongMsg message.
         * @function verify
         * @memberof message.LongMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LongMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.value !== "number")
                return "value: number expected";
            return null;
        };

        return LongMsg;
    })();

    message.Int2Msg = (function() {

        /**
         * Properties of an Int2Msg.
         * @memberof message
         * @interface IInt2Msg
         * @property {number} value1 Int2Msg value1
         * @property {number} value2 Int2Msg value2
         */

        /**
         * Constructs a new Int2Msg.
         * @memberof message
         * @classdesc Represents an Int2Msg.
         * @implements IInt2Msg
         * @constructor
         * @param {message.IInt2Msg=} [properties] Properties to set
         */
        function Int2Msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Int2Msg value1.
         * @member {number} value1
         * @memberof message.Int2Msg
         * @instance
         */
        Int2Msg.prototype.value1 = 0;

        /**
         * Int2Msg value2.
         * @member {number} value2
         * @memberof message.Int2Msg
         * @instance
         */
        Int2Msg.prototype.value2 = 0;

        /**
         * Creates a new Int2Msg instance using the specified properties.
         * @function create
         * @memberof message.Int2Msg
         * @static
         * @param {message.IInt2Msg=} [properties] Properties to set
         * @returns {message.Int2Msg} Int2Msg instance
         */
        Int2Msg.create = function create(properties) {
            return new Int2Msg(properties);
        };

        /**
         * Encodes the specified Int2Msg message. Does not implicitly {@link message.Int2Msg.verify|verify} messages.
         * @function encode
         * @memberof message.Int2Msg
         * @static
         * @param {message.IInt2Msg} message Int2Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Int2Msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value1);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value2);
            return writer;
        };

        /**
         * Encodes the specified Int2Msg message, length delimited. Does not implicitly {@link message.Int2Msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.Int2Msg
         * @static
         * @param {message.IInt2Msg} message Int2Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Int2Msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Int2Msg message from the specified reader or buffer.
         * @function decode
         * @memberof message.Int2Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.Int2Msg} Int2Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Int2Msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Int2Msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value1 = reader.int32();
                    break;
                case 2:
                    message.value2 = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("value1"))
                throw $util.ProtocolError("missing required 'value1'", { instance: message });
            if (!message.hasOwnProperty("value2"))
                throw $util.ProtocolError("missing required 'value2'", { instance: message });
            return message;
        };

        /**
         * Decodes an Int2Msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.Int2Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.Int2Msg} Int2Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Int2Msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Int2Msg message.
         * @function verify
         * @memberof message.Int2Msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Int2Msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.value1))
                return "value1: integer expected";
            if (!$util.isInteger(message.value2))
                return "value2: integer expected";
            return null;
        };

        return Int2Msg;
    })();

    message.StringMsg = (function() {

        /**
         * Properties of a StringMsg.
         * @memberof message
         * @interface IStringMsg
         * @property {string} value StringMsg value
         */

        /**
         * Constructs a new StringMsg.
         * @memberof message
         * @classdesc Represents a StringMsg.
         * @implements IStringMsg
         * @constructor
         * @param {message.IStringMsg=} [properties] Properties to set
         */
        function StringMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StringMsg value.
         * @member {string} value
         * @memberof message.StringMsg
         * @instance
         */
        StringMsg.prototype.value = "";

        /**
         * Creates a new StringMsg instance using the specified properties.
         * @function create
         * @memberof message.StringMsg
         * @static
         * @param {message.IStringMsg=} [properties] Properties to set
         * @returns {message.StringMsg} StringMsg instance
         */
        StringMsg.create = function create(properties) {
            return new StringMsg(properties);
        };

        /**
         * Encodes the specified StringMsg message. Does not implicitly {@link message.StringMsg.verify|verify} messages.
         * @function encode
         * @memberof message.StringMsg
         * @static
         * @param {message.IStringMsg} message StringMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified StringMsg message, length delimited. Does not implicitly {@link message.StringMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.StringMsg
         * @static
         * @param {message.IStringMsg} message StringMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StringMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.StringMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.StringMsg} StringMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.StringMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("value"))
                throw $util.ProtocolError("missing required 'value'", { instance: message });
            return message;
        };

        /**
         * Decodes a StringMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.StringMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.StringMsg} StringMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StringMsg message.
         * @function verify
         * @memberof message.StringMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StringMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.value))
                return "value: string expected";
            return null;
        };

        return StringMsg;
    })();

    message.StringListMsg = (function() {

        /**
         * Properties of a StringListMsg.
         * @memberof message
         * @interface IStringListMsg
         * @property {Array.<string>|null} [value] StringListMsg value
         */

        /**
         * Constructs a new StringListMsg.
         * @memberof message
         * @classdesc Represents a StringListMsg.
         * @implements IStringListMsg
         * @constructor
         * @param {message.IStringListMsg=} [properties] Properties to set
         */
        function StringListMsg(properties) {
            this.value = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StringListMsg value.
         * @member {Array.<string>} value
         * @memberof message.StringListMsg
         * @instance
         */
        StringListMsg.prototype.value = $util.emptyArray;

        /**
         * Creates a new StringListMsg instance using the specified properties.
         * @function create
         * @memberof message.StringListMsg
         * @static
         * @param {message.IStringListMsg=} [properties] Properties to set
         * @returns {message.StringListMsg} StringListMsg instance
         */
        StringListMsg.create = function create(properties) {
            return new StringListMsg(properties);
        };

        /**
         * Encodes the specified StringListMsg message. Does not implicitly {@link message.StringListMsg.verify|verify} messages.
         * @function encode
         * @memberof message.StringListMsg
         * @static
         * @param {message.IStringListMsg} message StringListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.value.length)
                for (var i = 0; i < message.value.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value[i]);
            return writer;
        };

        /**
         * Encodes the specified StringListMsg message, length delimited. Does not implicitly {@link message.StringListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.StringListMsg
         * @static
         * @param {message.IStringListMsg} message StringListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StringListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.StringListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.StringListMsg} StringListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.StringListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.value && message.value.length))
                        message.value = [];
                    message.value.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StringListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.StringListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.StringListMsg} StringListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StringListMsg message.
         * @function verify
         * @memberof message.StringListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StringListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                if (!Array.isArray(message.value))
                    return "value: array expected";
                for (var i = 0; i < message.value.length; ++i)
                    if (!$util.isString(message.value[i]))
                        return "value: string[] expected";
            }
            return null;
        };

        return StringListMsg;
    })();

    message.BytesMsg = (function() {

        /**
         * Properties of a BytesMsg.
         * @memberof message
         * @interface IBytesMsg
         * @property {Uint8Array} value BytesMsg value
         */

        /**
         * Constructs a new BytesMsg.
         * @memberof message
         * @classdesc Represents a BytesMsg.
         * @implements IBytesMsg
         * @constructor
         * @param {message.IBytesMsg=} [properties] Properties to set
         */
        function BytesMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BytesMsg value.
         * @member {Uint8Array} value
         * @memberof message.BytesMsg
         * @instance
         */
        BytesMsg.prototype.value = $util.newBuffer([]);

        /**
         * Creates a new BytesMsg instance using the specified properties.
         * @function create
         * @memberof message.BytesMsg
         * @static
         * @param {message.IBytesMsg=} [properties] Properties to set
         * @returns {message.BytesMsg} BytesMsg instance
         */
        BytesMsg.create = function create(properties) {
            return new BytesMsg(properties);
        };

        /**
         * Encodes the specified BytesMsg message. Does not implicitly {@link message.BytesMsg.verify|verify} messages.
         * @function encode
         * @memberof message.BytesMsg
         * @static
         * @param {message.IBytesMsg} message BytesMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BytesMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
            return writer;
        };

        /**
         * Encodes the specified BytesMsg message, length delimited. Does not implicitly {@link message.BytesMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.BytesMsg
         * @static
         * @param {message.IBytesMsg} message BytesMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BytesMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BytesMsg message from the specified reader or buffer.
         * @function decode
         * @memberof message.BytesMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.BytesMsg} BytesMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BytesMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.BytesMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("value"))
                throw $util.ProtocolError("missing required 'value'", { instance: message });
            return message;
        };

        /**
         * Decodes a BytesMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.BytesMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.BytesMsg} BytesMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BytesMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BytesMsg message.
         * @function verify
         * @memberof message.BytesMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BytesMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                return "value: buffer expected";
            return null;
        };

        return BytesMsg;
    })();

    return message;
})();