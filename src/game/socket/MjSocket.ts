/**
* name 
*/
module MjGame{
	export class MjSocket extends Laya.EventDispatcher {
        private pomelo: Pomelo;
        private mHost: string;
        private mPort: number;
        private mConnected: boolean;
        private protocols: Laya.Dictionary;

        /** 开启*/
        public static OPEN: string = "open";
        /** 关闭*/
        public static CLOSE: string = "close";
        /** io错误*/
        public static IO_ERROR: string = "io-error";
        /** 数据*/
        public static DATA: string = "data";

        constructor() {
            super();
            this.protocols = new Laya.Dictionary();
            this.pomelo = new Pomelo();
            this.configuration();
        }

        /** 配置*/
        private configuration(): void {
            var caller: any = this;
            this.pomelo.on("close", pomeloClose);
            this.pomelo.on("io-error", pomeloIoError);

            //关闭
            function pomeloClose(data: any): void {
                console.warn("pomelo-close:", data);
                if(!caller || !caller.pomelo) return;
                caller.mConnected = false;
                caller.event(MjSocket.CLOSE, data);
            }
            //ioerror
            function pomeloIoError(data: any): void {
                console.error("pomelo-ioError:", data);
                if(!caller || !caller.pomelo) return;
                caller.event(MjSocket.IO_ERROR, data);
            }
        }

        /** 获取是否已连接*/
        public get connected(): boolean { return this.mConnected }

        /** 
         * 连接远程
         * @params host主机
         * @params port端口
        */
        public connect(host: string, port: number): void {
            if (this.connected) {
                console.warn("socket had connected, please try to connect again after colse");
                return;
            }
            if(this.mHost == host && this.mPort == port){
                console.warn("host&port conflict, socket had connected host&port");
                return;
            }
            this.mHost = host;
            this.mPort = port;
            var caller: any = this;
            this.pomelo.init({ host: this.mHost, port: this.mPort }, function (data: any): void {
                console.log("pomelo init:", data);
                if (data.code === 200) {
                    caller.mConnected = true;
                    caller.event(MjSocket.OPEN);
                }
            });
        }

        /** 
         * 请求响应 服务端会回执协议响应，socket收到响应并派发socket.data事件
         * @params protocol协议名称
         * @params data 参数【和服务端针对协议约定】
        */
        public request(protocol: string, data: any = null): void {
            if (!this.pomelo) return;
            if(!this.mConnected){
                console.warn("please try to request again after connected");
                return;
            } 
            var caller: any = this;
            this.pomelo.request(protocol, data, function (data: any): void {
                caller.event(MjSocket.DATA, { protocol: protocol, data: data });
            });
        }

        /** 
        * 通知
        * @params protocol协议名称
        * @params data 参数【和服务端针对协议约定】
       */
        public notify(protocol: string, data: any = null): void {
            if (!this.pomelo) return;
            if(!this.mConnected){
                console.warn("please try to notify again after connected");
                return;
            } 
            this.pomelo.notify(protocol, data);
        }



		/** 添加*/
		public add(protocol: string): void {
			var index: number = this.protocols.indexOf(protocol);
			if (index > -1) return;
			this.protocols.set(protocol, callBack);
			this.pomelo.on(protocol, this.protocols.get(protocol));
			var caller: any = this;
			function callBack(data: any): void {
				if (caller) caller.event(MjSocket.DATA, { protocol: protocol, data: data });
			}
		}

		/** 移除*/
		public remove(protocol: string): void {
			var index: number = this.protocols.indexOf(protocol);
			if (index == -1) return;
			this.pomelo.off(protocol, this.protocols.get(protocol));
			this.protocols.remove(protocol);
		}

		/** 清除所有*/
		public clearAll(): void {
			this.protocols.clear();
		}

        /** 关闭*/
        public close(): void {
            if (this.pomelo && this.mConnected)
            {
                this.pomelo.disconnect();
                this.mConnected = false;
            } 
        }

        /** 销毁*/
        public destroy(): void {
            this.close();
            this.pomelo = null;
            this.protocols.clear();
        }
    }
}