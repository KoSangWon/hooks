export const useConfirm = (message = "", onConfirm, onCancel) => {
    if(!onConfirm && typeof onConfirm !== "function"){//onConfirm이 존재하는지, 함수인지 체크
      return;
    }
    if(!onCancel && typeof onCancel !== "function"){//onCancel이 존재하는지, 함수인지 체크
      return;
    }
    const confirmAction = () => {
      if(confirm(message)){
        onConfirm();
      }else{
        onCancel();
      }
    }
    return confirmAction;
  }

  