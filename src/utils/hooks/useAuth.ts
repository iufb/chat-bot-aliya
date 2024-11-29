import { getCookie } from "@/utils/cookies";

export const useAuth = () => {
  //getting token from local storage
  const user = getCookie("token");
  //checking whether token is preset or not
  if (user) {
    return true;
  } else {
    return false;
  }
};
