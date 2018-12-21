/**
* 房间 
*/
module MjGame
{
    export class RoomScene extends ui.game.scene.RoomSceneUI
    {
        playerPosView: Array<ui.game.view.PlayerViewUI>;
        constructor()
        {
            super();
            this.playerPosView = [this.downPosPlayer, this.rightPosPlayer, this.upPosPlayer, this.leftPosPlayer];
            this.updatePlayerInfo();
            this.addEvent();
            // MjSoundManager.getInstance().playMusic(SoundType.MAIN);
        }

        addEvent()
        {
            EventManager.getInstance().on(BaseEvent.PLAYER_ENTER_ROOM, this, this.updatePlayerInfo);
            EventManager.getInstance().on(BaseEvent.DISBAND_ROOM, this, this.onDisband);
            EventManager.getInstance().on(BaseEvent.PLAYER_LEAVE_ROOM, this, this.onLeave);
            EventManager.getInstance().on(BaseEvent.START_GAME, this, this.onStartGame);
            this.startBtn.on(Laya.Event.CLICK, this, this.onStart);
            this.readyBtn.on(Laya.Event.CLICK, this, this.onReady);
        }

        removeEvent()
        {
            EventManager.getInstance().off(BaseEvent.PLAYER_ENTER_ROOM, this, this.updatePlayerInfo);
            EventManager.getInstance().off(BaseEvent.DISBAND_ROOM, this, this.onDisband);
            EventManager.getInstance().off(BaseEvent.PLAYER_LEAVE_ROOM, this, this.onLeave);
            EventManager.getInstance().off(BaseEvent.START_GAME, this, this.onStartGame);
        }

        updatePlayerInfo()
        {
            var playerVOs: Array<PlayerVO> = RoomManager.getInstance().playerVOs;
            let selfPlayer: PlayerVO = PlayerManager.getInstance().selfPlayerVO;
            var player: PlayerVO;
            var playerView: ui.game.view.PlayerViewUI;
            var playerNum:number = playerVOs.length;
            var clientPos: number = 0;
            var maxPos:number = clientPos;
            this.startBtn.visible = false;
            this.readyBtn.visible = false;

            this.roomNum.text = "房间号：" + selfPlayer.roomId;

            for (var i = 0; i < playerVOs.length; i++) 
            {
                player = playerVOs[i];
                clientPos = util.getClientRefPos(player.position, selfPlayer.position);
                playerView = this.playerPosView[clientPos];
                playerView.isReady.visible = player.isReady;
                playerView.headIcon.visible = true;
                playerView.playerName.text = player.username;
                playerView.dealerImg.visible = player.isDealer;
                playerView.visible = true;
                this.updateStartBtnState(player,playerNum);
                if (maxPos < clientPos)
                {
                    maxPos = clientPos;
                }
            }

            for (var index = (maxPos + 1); index < 4; index++)
            {
                playerView = this.playerPosView[index];
                playerView.visible = false;
            }
            // for (var index = 0; index < 4; index++)
            // {
            //     player = playerVOs[index];
            //     playerView = this.playerPosView[index];
            //     if (index < GlobalConfig.MAX_MEMBER_NUM && player)
            //     {
            //         playerView.isReady.visible = player.isReady;
            //         playerView.headIcon.visible = true;
            //         playerView.playerName.text = player.username;
            //         this.updateStartBtnState(player,playerNum);
            //         playerView.dealerImg.visible = player.isDealer;
            //     }
            //     else
            //     {
            //         playerView.isReady.visible = false;
            //         playerView.headIcon.visible = false;
            //         playerView.playerName.text = "";
            //         playerView.dealerImg.visible = false;
            //     }
            // }
        }

        onLeave()
        {
            this.updatePlayerInfo();
        }

        onDisband()
        {
            var hallScene: HallScene = new HallScene();
            Laya.stage.addChild(hallScene);
            this.removeEvent();
            this.removeSelf();
        }

        updateStartBtnState(player:PlayerVO,playerNum:number)
        {
            if (player.isRoomOwner && PlayerManager.getInstance().selfUsername == player.username)
            {
                this.startBtn.visible = true;
                if (playerNum >= GlobalConfig.MAX_MEMBER_NUM)
                {
                    this.startBtn.gray = false;
                    this.startBtn.mouseEnabled = true;
                }
                else
                {
                    this.startBtn.gray = true;
                    this.startBtn.mouseEnabled = false;
                }   
            }
            else if (!player.isReady && !player.isRoomOwner)
            {
                this.readyBtn.visible = true;
            }
        }

        onReady()
        {
            ProxyManager.getInstance().gameProxy.sendReadyToServer(PlayerManager.getInstance().selfPlayerVO);
        }

        onStart()
        {
            if (PlayerManager.getInstance().selfPlayerVO.isRoomOwner)
            {
                let isCanStart:boolean = true;
                for (var index = 0; index < GlobalConfig.MAX_MEMBER_NUM; index++) {
                    var playerView = this.playerPosView[index];
                    if (!playerView || !playerView.isReady.visible)
                    {
                        isCanStart = false;
                        break;
                    }
                }
                if (isCanStart)
                {
                    SocketManager.getInstance().request(ProtocolType.ROOM_STARTGAME,{username:PlayerManager.getInstance().selfUsername,roomId:RoomManager.getInstance().roomId});
                }
                else
                {
                    AlertManager.getInstance().showAlert("还有玩家未准备好！");
                }
            }
            else
            {
                AlertManager.getInstance().showAlert("您不是房主，不能开始游戏");
            }
        }

        onStartGame()
        {
            this.removeEvent();
            var deskScene: DeskScene = new DeskScene();
            Laya.stage.addChild(deskScene);
            this.removeSelf();
        }
    }
}