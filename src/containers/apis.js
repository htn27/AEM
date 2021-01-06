import {checkUsr_url} from './config';
export const getUser = async (type, email, pwd) => {
  return await fetch(`${checkUsr_url}/${type}/${email}/${pwd}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json != null) {
        // console.log(json);
        return {
          id_user: json.id_user,
          name_user: json.name_user,
          email: json.email,
          image_student: json.image_student,
          creator: json.creator,
        };
      } else {
        return null;
      }
    })
    .catch((error) => {
      // ADD THIS THROW error
      return null;
    });
};
