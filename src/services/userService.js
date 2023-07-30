// contains all things needed for server calling

import { myAxios } from "./helper";

export const signUp = (user) => {
  return myAxios
    .post("/api/v1/auth/register")
    .then((response) => response.data);
};
