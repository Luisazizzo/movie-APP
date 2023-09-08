import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { RootState } from "../../store/store";
import { Button, Popconfirm, Space } from "antd";
import { ModalChange, ChangePassword } from "../../components/index";
import useLogOut from "./hooks/useLogOut/useLogOut";
import useModal from "./hooks/useModal/useModal";
import usePopup from "./hooks/usePopup/usePopup";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const logOut = useLogOut();
  const { closeModal, showModal } = useModal(setIsModalOpen);
  const { showPopconfirm, handleCancelPopup, handleConfirmPopup } = usePopup(
    setOpen,
    setConfirmLoading
  );
  const userData = useSelector((state: RootState) => state.usersSlice);

  return (
    <div className={styles.profile}>
      <h2 className={styles.title}>Welcome {userData.username}</h2>
      <p className={styles.email}>Email: {userData.email}</p>
      <Space className={styles.space}>
        <Button
          onClick={logOut}
          type="primary"
          danger
          className={styles.button}
        >
          Log out
        </Button>
        <Button className={styles.button} type="primary" onClick={showModal}>
          Change Password
        </Button>
        <ModalChange closeModal={closeModal} isModalOpen={isModalOpen}>
          <ChangePassword closeModal={closeModal} />
        </ModalChange>
        <Popconfirm
          title="Delete Account"
          description="Are you sure you want to delete the account"
          open={open}
          onConfirm={handleConfirmPopup}
          okButtonProps={{ loading: confirmLoading }}
          onCancel={handleCancelPopup}
        >
          <Button
            className={styles.button}
            type="primary"
            onClick={showPopconfirm}
          >
            Delete Account
          </Button>
        </Popconfirm>
      </Space>
    </div>
  );
};

export default Profile;
