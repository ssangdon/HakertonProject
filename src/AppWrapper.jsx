import { Router } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import { useRecoilState } from "recoil";
import { system } from "./recoil/recoilState";
import App from "./App";
const AppWrapper = () => {
    const [systemState,setSystemState] = useRecoilState(system);
    return <div>
        <SnackbarProvider 
            maxSnack={3}
            anchorOrigin={{
                vertical: systemState.isMobile ? "top" : "bottom",
                horizontal: "left"
            }}
            autoHideDuration={systemState.isMobile ? 3000 : 5000}
            hideIconVariant
        >
            <App />
        </SnackbarProvider>
    </div>
}
export default AppWrapper;