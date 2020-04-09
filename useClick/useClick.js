import { useRef, useEffect } from "react";

export const useClick = (onClick) => {
  if(typeof onClick !== "function"){
    return;
  }
  const element = useRef();
  useEffect(() => {
    //mount 될때, didupdate(deps없을 때), deps가 있다면 그곳에 있는 것이 바뀌었을 때만 실행
    if(element.current){
      //reference덕에 동작
      element.current.addEventListener("click", onClick);//didupdate때마다 호출되면 안되므로 deps = []로 지정
    }
    return () => {
      // function을 리턴한다. componentWillUnMount 때 호출
      if(element.current){
        element.current.removeEventListener("click", onClick);
      }
    }
  }, []);
  
  return element;
}