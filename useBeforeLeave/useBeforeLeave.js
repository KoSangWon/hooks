import {useEffect} from "react";

export const useBeforeLeave = onBefore => {
  if(typeof onBefore !== "function") {
    return;
  };
  const handle = event => {
    const {clientY} = event;
    //마우스가 위로 벗어나면 onBefore실행
    if(clientY <= 0){
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
}