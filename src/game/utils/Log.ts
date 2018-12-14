/**
* name 
*/
module MjGame{
	export class Log{
		constructor(){

		}

		public static print(...Params)
		{
			console.log(Params);
		}

        public static traceSinglePai(mType:number,mValue:number):string
        {
            var str:string="";
            if (mType == GlobalConfig.MJPAI_ZFB)
            {
                if (mValue == 1)
                {
                    str+="中,";
                }
                else if (mValue == 2)
                {
                    str+="發,";
                }
                else if (mValue == 3)
                {
                    str+="白,";
                }
            }
            else if (mType == GlobalConfig.MJPAI_FENG)
            {
                if (mValue == 1)
                {
                    str+="东,";
                }
                else if (mValue == 2)
                {
                    str+="南,";
                }
                else if (mValue == 3)
                {
                    str+="西,";
                }
                else if (mValue == 4)
                {
                    str+="北,";
                }
            }
            else if (mType == GlobalConfig.MJPAI_WAN)
            {
                str+=mValue + "万,";
            }
            else if (mType == GlobalConfig.MJPAI_TIAO)
            {
                str+=mValue + "条,";
            }
            else if (mType == GlobalConfig.MJPAI_BING)
            {
                str+=mValue + "饼,";
            }

            return str;
        }


        public static traceAllPai(compositionAllArr:Array<Array<number>>):String
        {
            var str:String="";
            for (var i:number=0; i < GlobalConfig.CARD_TYPE_NUM; i++)
            {
                for (var j:number=1; j < GlobalConfig.CARD_VALUE_NUM; j++)
                {
                    if (compositionAllArr[i][j] > 0)
                    {
                        for (var k:number=0; k < compositionAllArr[i][j]; k++)
                        {
                            str = str + this.traceSinglePai(i,j);
                        }
                    }
                }
            }
            return str;
        }
	}
}