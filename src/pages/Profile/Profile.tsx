import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { RootState } from "../../store/store";
import { Button, Popconfirm, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { EnumRoutes } from "../../constants/enumRoutes";
import ModalChange from "../../components/ModalChange/ModalChange";
import { logUser, removeUser } from "../../store/reduxSlices/usersSlice";
import ChangePassword from "../../components/Form/ChangePassword/ChangePassword";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userData = useSelector((state: RootState) => state.usersSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logUser(false));
    navigate(EnumRoutes.BASE);
  }, [dispatch, navigate]);

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const showPopconfirm = useCallback(() => {
    setOpen(true);
  }, []);

  const handleOk = useCallback(() => {
    setConfirmLoading(true);
    dispatch(removeUser());
    navigate(EnumRoutes.BASE);
    setOpen(false);
    setConfirmLoading(false);
  }, [dispatch, navigate]);

  const handleCancel = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className={styles.profile}>
      <h2 className={styles.title}>Benvenuto {userData.username}</h2>
      <p className={styles.email}>Email: {userData.email}</p>
      <Space className={styles.space}>
        <Button
          onClick={logOut}
          type="primary"
          danger
          className={styles.button}
        >
          Disconnetti
        </Button>
        <Button className={styles.button} type="primary" onClick={showModal}>
          Cambia Password
        </Button>
        <ModalChange closeModal={closeModal} isModalOpen={isModalOpen}>
          <ChangePassword closeModal={closeModal} />
        </ModalChange>
        <Popconfirm
          title="Delete Account"
          description="Are you sure you want to delete the account"
          open={open}
          onConfirm={handleOk}
          okButtonProps={{ loading: confirmLoading }}
          onCancel={handleCancel}
        >
          <Button
            className={styles.button}
            type="primary"
            onClick={showPopconfirm}
          >
            Elimina Account
          </Button>
        </Popconfirm>
      </Space>
    </div>
  );
};

export default Profile;
