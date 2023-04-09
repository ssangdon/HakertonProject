import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { requestAlert, user } from "../recoil/recoilState";

const Main = () => {
  const alert = useSetRecoilState(requestAlert);
  const navigate = useNavigate();
  const location = useLocation();
  const [userState, setUserState] = useRecoilState(user);
  return (
    <div>
      aaa 192.168.104.183
      <button
        onClick={() => {
          alert({ message: "test", type: "error" });
        }}
      >
        ] aa
      </button>
      <button
        onClick={() => {
          navigate("/ChartPage");
        }}
      >
        Router
      </button>
    </div>
  );
};
export default Main;
