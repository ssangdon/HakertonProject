const BACKEND_URL = import.meta.env.VITE_DEV_BACKEND_URL;
import { getRecoil, setRecoil } from "recoil-nexus";
import axios from "axios";
import { user } from "../recoil/recoilState";

axios.defaults.headers.common["Cache-Control"]="no-cache";

// export const UserSignInBySocial=()=>{
    // data.CplatToken = getRecoil(user).CplatToken;
//   return axios.post(`${BACKEND_URL}user/sign_in_by_social`, {
//     access_token: token,
//     SnsType: "kakao",
//     Token: token,
//     OsType: "Web",
//     CurrentVersion: "0.0",
//   });
// }