/**
* name 
*/
module MjGame
{
    export class ServerTimeManager
    {
        curServerTime:number = 0;
        dateDiff:number = 0;
        constructor()
        {
        }
        private static instance: ServerTimeManager;
        public static getInstance(): ServerTimeManager
        {
            if (!this.instance)
            {
                this.instance = new ServerTimeManager();
            }
            return this.instance;
        }

        syncServerTime()
        {
            SocketManager.getInstance().addProto(ProtocolType.CMJ_TIMESYNC,this.onServerTime)
            SocketManager.getInstance().request(ProtocolType.CMJ_TIMESYNC);
        }

        onServerTime(data:any)
        {
            this.curServerTime = data.curServerTime;
            this.dateDiff = new Date().getTime() - this.curServerTime;
        }

        getCountDown(endTime:number)
        {
            return endTime - new Date().getTime() + this.dateDiff;
        }   
    }
}