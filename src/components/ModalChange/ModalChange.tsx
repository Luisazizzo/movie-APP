import { Modal } from "antd";
import { IModalChangeProps } from "../../interface";

const ModalChange = ({
  closeModal,
  isModalOpen,
  children,
}: IModalChangeProps) => {
  return (
    <Modal
      title="Change Password"
      open={isModalOpen}
      footer={null}
      onCancel={closeModal}
    >
      {children}
    </Modal>
  );
};

export default ModalChange;
