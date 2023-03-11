import {useState} from "react";

export const useSomeState = (state1, state2) => {
    const [someState, setSomeState] = useState(state1);
    const setState = () => {
        someState === state1 ? setSomeState(state2) : setSomeState(state1);
    }
    return [someState, setState];
}