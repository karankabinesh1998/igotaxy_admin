// import { data } from 'jquery';
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
    ACCESS_POINT + `/admin/getFullFreedom/getFreedom`,
    value
  );
  //console.log(result)
  if (result.data) {
    return result;
  } 

};


const AddMaster = async (t,data,id = null) => {
  //console.log(data)
  const result = await http.post(ACCESS_POINT + `/admin/master/${t}/${id}`,data,{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result;
};


const AddUniqueValue = async(t,FormData)=>{
  const result = await http.post(ACCESS_POINT + `/admin/AddUniqueValue/${t}`,FormData,{
    headers:{
      'Content-Type': 'multipart/form-data',
    }
  })
  return result;
}


const UpdateUniqueCity = async(id,body)=>{
  const result = await http.put(
    ACCESS_POINT + `/admin/UpdateUniqueCity/${id}`,
    body
  );
  return result;

}

const AddUniqueValueCity = async(t,FormData)=>{
  const result = await http.post(ACCESS_POINT + `/admin/AddUniqueValueCity/${t}`,FormData,{
    headers:{
      'Content-Type': 'multipart/form-data',
    }
  })
  return result;
}


const Addtrips = async(newcustomer,FormData)=>{
  const result = await http.post(ACCESS_POINT + `/admin/trips/${newcustomer}`,FormData,{
    headers:{
      'Content-Type': 'multipart/form-data',
    } 
  })
  return result;
}





const updateMaster = async (tableName, id, categoryArray, column = "id") => {
  const result = await http.put(
    ACCESS_POINT + `/admin/master/${tableName}/${column}`,
    { id: id, categoryArray }
  );
  return result;
};

const updateUser = async (tableName,formData,id, column = "id",  ) => {
  // console.log([...categoryArray]);
  const result = await http.put(
    ACCESS_POINT + `/admin/adduser/${tableName}/${column}/${id}`,formData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      },
    }
  );
  return result;
};

const UpdateBiddingApproval=async (tableName, id, categoryArray,venid, column = "id") => {
  const result = await http.put(
    ACCESS_POINT + `/admin/UpdateBiddingApproval/${tableName}/${column}/${venid}`,
    { id: id, categoryArray }
  );
  return result;
};


const deleteMaster = async (tableName, id) => {
  const result = await http.delete(
    ACCESS_POINT + `/admin/master/${tableName}/${id}`
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


const AddUser = async(data) =>{
   
  const result = await http.post(ACCESS_POINT + `/admin/adduser`,data,{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result;
}

// const AddUser = async(data) =>{
   
//   const result = await http.post(ACCESS_POINT + `/admin/adduser`,data,{
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });
//   return result;
// }

const TripsData = async () => {
  const result = await http.get(`${ACCESS_POINT}/admin/gettrips`);
  return result;
};

const CheckoutNotify = async (token) => {
  const result = await http.get(`${ACCESS_POINT}/admin/notify/${token}`);
  return result;
};

// const SendAssignedTripNotification = async (token) => {
//   const result = await http.get(`${ACCESS_POINT}/admin/SendAssignedTripNotification/${token}`);
//   return result;
// };

const SendAssignedTripNotification = async(data) =>{
  const result = await http.post(ACCESS_POINT + `/admin/SendAssignedTripNotification`,data,{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result;
}

const AddDriverdata = async(data) =>{
  const result = await http.post(ACCESS_POINT + `/admin/AddDriverdata`,data,{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result;
}

const Addcabs = async(data) =>{
  const result = await http.post(ACCESS_POINT + `/admin/Addcabs`,data,{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result;
}

const Add_Announcement = async(data,id) =>{
  const result = await http.post(ACCESS_POINT + `/admin/announce/${id}`,data,{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result;
}

const EditDriverdata=async (data, id) => {
  const result = await http.put(
    ACCESS_POINT + `/admin/AddDriverdata/${id}`,
    data
  );
  return result;
};


const TripsJson = async () => {
  const result = await http.get(`${ACCESS_POINT}/admin/TripsJsons`);
  return result;
};

const TripsJson11 = async () => {
  const result = await http.get(`${ACCESS_POINT}/admin/OTPchecksadfsf`);
  console.log(result);
  return result;
};

TripsJson11()

export default {
  TripsData,
    getFreedom,
    CheckoutNotify,
    updateMaster,
    deleteMaster,
    LoginAdmin,
    AddUser,
    AddUniqueValue,
    AddUniqueValueCity,
    UpdateUniqueCity,
    Addtrips,
    updateUser,
    AddMaster,
    TripsJson,
    SendAssignedTripNotification,
    UpdateBiddingApproval,
    AddDriverdata,
    EditDriverdata,
    Addcabs,
    Add_Announcement
}