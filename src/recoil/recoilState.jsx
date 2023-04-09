import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

// import * as api from "../controller/api";


export const user = atom({
    key: `user`,
    default: {
        token: "123123123"
    }
});

export const system = atom({
    key: `system`,
    default: {
        isMobile: false,
        isUserChecked: false,
        alertData: {
            message: null, type: null, count: 0
        }
    }
});


export const requestAlert = selector({
    key: "requestAlert",
    get: ({ get })=> get(system),
    set: ({ set,get },messageData) => {
        let systemState = get(system);
        set(system,{...systemState,alertData: {...messageData, count: systemState.alertData.count+1 }});
    }
});


