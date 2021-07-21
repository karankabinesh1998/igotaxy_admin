import { data } from 'jquery';
import { ACCESS_POINT } from '../config';

import http from "./http";

const check = async () => {
  const result = await http.get(`${ACCESS_POINT}/cmsContent/test`);
  return result;
};

const getFreedom = async (
  select,
  tableName,
  condition,
  groupby = "id",
  orderby = "id"
) => {
  let value = {};
  value.select = select;
  value.tableName = tableName;
  value.condition = condition;
  value.groupby = groupby;
  value.orderby = orderby;
  const result = await http.put(
    ACCESS_POINT + `/cmsContent/getFullFreedom/getFreedom`,
    value
  );
  //console.log(result)
  if (result.data) {
    return result;
  } 

};






const updateMaster = async (tableName, id, categoryArray, column = "id") => {
  const result = await http.put(
    ACCESS_POINT + `/cmsContent/master/${tableName}/${column}`,
    { id: id, categoryArray }
  );
  return result;
};


const deleteMaster = async (tableName, id) => {
  const result = await http.delete(
    ACCESS_POINT + `/cmsContent/master/${tableName}/${id}`
  );
  return result;
};


const LoginAdmin = async(FormData)=>{
  const result = await http.post(ACCESS_POINT + `/admin/login`,FormData,{
    headers:{
      'Content-Type': 'multipart/form-data',
    }
  })
  return result;
}






export default {
    check,
    getFreedom,
    updateMaster,
    deleteMaster,
    LoginAdmin
}