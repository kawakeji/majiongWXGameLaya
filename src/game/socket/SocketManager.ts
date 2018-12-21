/**
* SocketManager 对socket 进行封装，外接调用全部通过该类完成 
* 包含协议监听，监听移除
* 请求，单次请求
*/
module MjGame{
	export class SocketManager{

		private socket:MjSocket;
		// 协议监听处理集合
		private handlers: Laya.Dictionary;

        private static instance:SocketManager;
        /**
         * 获取实例的静态方法实例
         * @return
         *
         */
        public static getInstance():SocketManager
        {
            if(!this.instance)
            {
                this.instance = new SocketManager();
            }
            return this.instance;
        }

		constructor()
		{
			this.initSocket()
		}

		private initSocket()
        {
			this.handlers = new Laya.Dictionary();
            this.socket = new MjSocket();
            this.socket.on(MjSocket.OPEN, this, this._$game_open_handler);
            this.socket.on(MjSocket.CLOSE, this, this._$game_close_handler);
            this.socket.on(MjSocket.IO_ERROR, this, this._$game_io_error_handler);
            this.socket.on(MjSocket.DATA, this, this._$game_data_handler);
        }

        private _$game_open_handler(): void {
            console.log("socket connection success");
            //游戏服连接成功后，拿取账号的密钥请求进入游戏
			this.handler(ProtocolType.CONNECT_RESULT,MjSocket.OPEN);
        }
        
        private _$game_close_handler(event: any): void {
            console.log("socket connection close:", event);
			this.handler(ProtocolType.CONNECT_RESULT,MjSocket.CLOSE);
        }

        private _$game_io_error_handler(event: any): void {
            console.log("socket io-error:", event);
			this.handler(ProtocolType.CONNECT_RESULT,MjSocket.IO_ERROR);
            AlertManager.getInstance().showAlert("服务器关闭了，请稍后连接！");
        }

        private _$game_data_handler(event: any): void {
            console.log("\nsocket receive Msg \nprotoType:",event.protocol,"\nevent.Data:", event.data);
            //根据个人与服务器的约定处理协议即可
			this.handler(event.protocol,event.data);
        }	

		private handler(protocol:string,data:any = null)
		{
			let handlerFunc = this.handlers.get(protocol);
			if (!!handlerFunc)
			{
				handlerFunc(data)
			}
		}

		/**
		 * socket 连接
		 * @param host IP
		 * @param port 端口
		 * @param call 连接结果回调
		 */
		public connect(host,port,call:Function)
		{
			this.socket.connect(host,port);
			this.handlers.set(ProtocolType.CONNECT_RESULT,call);
            // this.socket.connect("127.0.0.1",3005);
		}

		/**
		 * 添加协议监听，暂时一个协议号对应一个回调，不允许一对多的关系，后加回调会覆盖前面的
		 * @param protocol 协议号
		 * @param call 回调
		 */
		public addProto(protocol:string,call:Function)
		{
			this.socket.add(protocol);
			this.handlers.set(protocol,call);
		}

		/**
		 * 移除协议监听
		 * @param protocol 协议号
		 * @param call 协议回调
		 */
		public removeProto(protocol:string)
		{
			this.socket.remove(protocol);
			this.handlers.remove(protobuf)
		}

		/**
		 * 向服务器请求,并需要服务器返回消息
		 * @param protocol 协议号
		 * @param data 
		 */
		public request(protocol:string, data: any = null)
		{
			console.log("\nsocket request \nprotoType:",protocol,"\nevent.Data:", data);
			this.socket.request(protocol,data)
		}

		/**
		 * 向服务器请求，服务器不会返回消息
		 * @param protocol 协议号
		 * @param data 
		 */
		public notify(protocol: string, data: any = null): void 
		{
			console.log("\nsocket notify \nprotoType:",protocol,"\nevent.Data:", data);
			this.socket.notify(protocol,data);
		}

		public close(): void
		{
			this.socket.close();
		}

		/** 销毁*/
        public destroy(): void 
		{
            this.socket.destroy();
			this.handlers.clear();
        }
	}
}