module MjGame
{
    export class util
    {
        public static toString(obj: any)
        {
            var str = "";
            let type = typeof (obj);
            if (type == "object")
            {
                for (const key of Object.keys(obj))
                {
                    if (obj.hasOwnProperty(key))
                    {
                        str = str + key + ":" + obj[key] + "\n";
                    }
                }
            }
            else if (type == "string" || type == 'number' || type == "boolean")
            {
                str = str + obj;
            }

            return str;
        }

        /**
         * 获取客户端相对位置，默认在下方是 0 ，右边是 1 依次类推
         * 这个地方会修改玩家的服务器对应的position 
         */ 
        public static getClientRefPos(serverPos:number,selfServerPos:number)
        {
            let offPos = (serverPos - selfServerPos);
            return offPos < 0 ? GlobalConfig.MAX_MEMBER_NUM + offPos : offPos;
        }

        public static getByChiPai(stChi:StCHI,index?:number):StPAI
        {
            if (!index)
            {
                index = stChi.m_byChiIndex;
            }

            if(index == 1)
            {
                return stChi.m_ChiPai1;
            }
            else if(index == 2)
            {
                return stChi.m_ChiPai2;
            }
            else
            {
                return stChi.m_ChiPai3;
            }
        }
    }
}