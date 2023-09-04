import { Dispatch, useCallback } from "react";

const useModal = (setIsModalOpen: Dispatch<React.SetStateAction<boolean>>) => {
  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);
  return { showModal, closeModal };
};
export default useModal;
