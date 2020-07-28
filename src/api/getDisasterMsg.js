import axios from 'axios';

const KEY = "MpTTK5tgzlmZcNG%2BbB%2Bs0iuaIKortq8%2F1gtsS%2BEEdA8F07g3BngFnTX0Q2ZNNaz8ogDKjZ4XmgawC5Rwr1OlaA%3D%3D";

export const getDisasterMsg = async (pageNumber) =>{
    const req = `http://apis.data.go.kr/1741000/DisasterMsg2/getDisasterMsgList?ServiceKey=${KEY}&pageNo=${pageNumber}&numOfRows=50&type=json&flag=y`;

    const responce = await axios.get(req);
    console.log(responce.status);
   return responce.data.DisasterMsg[1].row;     

}