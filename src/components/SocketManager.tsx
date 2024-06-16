import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

export const socket = io("http://localhost:3001");
export const charactersAtom = atom([]);
export const crossesAtom = atom([]);

export const SocketManager = () => {
    const [_characters, setCharacters] = useAtom(charactersAtom);
    const [_crosses, setCrosses] = useAtom(crossesAtom);

    useEffect(() => {
        function onConnect() {
            console.log("connected");
        }
        function onDisconnect() {
            console.log("disconnected");
        }

        function onCharacters(value) {
            console.log(value);
            setCharacters(value);
        }

        function onCrossPositioned(crosses) {
            console.log(crosses);
            
            setCrosses(crosses)
        }

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);
        socket.on("characters", onCharacters);
        socket.on("cross-positioned", onCrossPositioned);
        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
            socket.off("characters", onCharacters);
            socket.on("cross-positioned", onCrossPositioned);
        };
    }, [setCharacters, setCrosses]);
    return <></>
};