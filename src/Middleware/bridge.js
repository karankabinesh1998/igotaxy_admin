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
  //else {
    // localStorage.clear();
    // window.location = "/";
 // }
};
const AddMaster = async (t,data) => {
  //console.log(data)
  const result = await http.post(ACCESS_POINT + `/cmsContent/master/${t}`,data,{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result;
};

const AddUser = async(t,data) =>{
   
  const result = await http.post(ACCESS_POINT + `/cmsContent/AddUser/${t}`,data,{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result;
}


const CHeckStipnow = async (t) => {
//  console.log(data)
  const result = await http.get(ACCESS_POINT + `/stipNow/CHeckStipnow/${t}`);
  return result;
};

const LoginCheckStipNow = async (user,pass) => {
//  console.log(data)
  const result = await http.get(ACCESS_POINT + `/stipNow/LoginCheckStipNow/${user}/${pass}`);
  return result;
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

const FileUpload = async (FormData)=>{
  const result = await http.post(ACCESS_POINT + `/uploadProfilePicture`,FormData,{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result;
}

const VendarDocument = async(FormData)=>{
  const result = await http.post(ACCESS_POINT + `/cmsContent/VendarDocument`,FormData,{
    headers:{
      'Content-Type': 'multipart/form-data',
    }
  })
  return result;
}

const Register = async(FormData)=>{
  const result = await http.post(ACCESS_POINT + `/cmsContent/Register`,FormData,{
    headers:{
      'Content-Type': 'multipart/form-data',
    }
  })
  return result;
}

const AddUniqueValue = async(t,FormData)=>{
  const result = await http.post(ACCESS_POINT + `/cmsContent/AddUniqueValue/${t}`,FormData,{
    headers:{
      'Content-Type': 'multipart/form-data',
    }
  })
  return result;
}

const UpdateVendarDocument = async (tableName, id, categoryArray, column = "id") => {
  const result = await http.put(
    ACCESS_POINT + `/cmsContent/UpdateVendarDocument/${tableName}/${column}`,
    { id: id, categoryArray }
  );
  return result;
};



const LoginUser = async(body)=>{
  const result = await http.put(
    ACCESS_POINT + `/cmsContent/LoginUser`,
    body
  );
  return result;

}

const UpdateUniqueCity = async(id,body)=>{
  const result = await http.put(
    ACCESS_POINT + `/cmsContent/UpdateUniqueCity/${id}`,
    body
  );
  return result;

}

const ChangePassword = async (e)=>{
  const result = await http.get(ACCESS_POINT + `/cmsContent/ChangePassword/${e}`);
  return result;
}



const FileDownload = async ()=>{
  const result = await http.get(ACCESS_POINT + `/cmsContent/filename`);
  return result;
}

const LoginoutUser = async (id)=>{
  const result = await http.delete(ACCESS_POINT + `/cmsContent/LoginUser/${id}`);
  return result;
}




export default {
    check,
    getFreedom,
    AddMaster,
    CHeckStipnow,
    LoginCheckStipNow,
    updateMaster,
    deleteMaster,
    FileUpload,
    AddUser,
    FileDownload,
    VendarDocument,
    AddUniqueValue,
    UpdateUniqueCity,
    LoginUser,
    LoginoutUser,
    Register,
    ChangePassword
}