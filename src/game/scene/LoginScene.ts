/**
* 登录 
*/
module MjGame
{
	export class LoginScene extends ui.game.scene.LoginSceneUI 
	{
		constructor(){
			super();
			this.loginBtn.on(Laya.Event.CLICK,this,this.onLogin);
            MjSoundManager.getInstance().playMusic(SoundType.MAIN,0);
		}

		onLogin():void
		{
            var self = this;
			var username:string = this.username.text;
            if (username == "")
            {
                AlertManager.getInstance().showAlert("用户名不能为空");
                return;
            }
            SocketManager.getInstance().close();
			SocketManager.getInstance().connect(GlobalConfig.HOST,GlobalConfig.PORT,function(data)
            {
                if (data == MjSocket.OPEN)
                {
                    SocketManager.getInstance().request(ProtocolType.GATE_QUERYENTRY,{uid:username});
                }
            });

            SocketManager.getInstance().addProto(ProtocolType.GATE_QUERYENTRY,function (data)
            {
                var code = data.code;
                if (code == 200)
                {
                    self.enterConnector(data);
                }
            })
		}

        enterConnector(data:any):void
        {
            var self = this;
            var username = this.username.text;
            var host = data.host;
            var port = data.port;
            SocketManager.getInstance().close();
            SocketManager.getInstance().connect(host,port,function(data)
            {
                SocketManager.getInstance().addProto(ProtocolType.CONNECT_ENTER,function (data)
                {
                    if (data.code == 200)
                    {
                        ServerTimeManager.getInstance().syncServerTime();
                        PlayerManager.getInstance().selfUsername = data.username;
                        var hallScene:HallScene = new HallScene();
                        Laya.stage.addChild(hallScene);
                        self.removeSelf();
                    }
                    else
                    {
                        AlertManager.getInstance().showAlert(data.error);
                    }
                })
                
                if (data == MjSocket.OPEN)
                {
                    SocketManager.getInstance().request(ProtocolType.CONNECT_ENTER,{username:username});
                }
            });
        }
	}
}