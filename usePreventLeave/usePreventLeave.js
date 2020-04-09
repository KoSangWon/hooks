export const usePreventLeave = () => {
    const listener = (event) => {
      event.preventDefault();
      event.returnValue = "";
    }
    //나갈때 질문을 생성시켜줌
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    //나갈때 질문하는 것을 없애줌
    const disablePrevent = () => window.removeEventListener("beforeunload", listener);
    return {enablePrevent, disablePrevent}
  }