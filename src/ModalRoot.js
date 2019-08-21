import Dialog from "@material-ui/core/Dialog";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlbumFiles from "./components/AlbumFiles";
import { Creators as ModalActions } from "./store/ducks/modal";

export default function ModalRoot() {
  const dispatch = useDispatch();

  const MODAL_COMPONENTS = {
    ALBUM_FILES: AlbumFiles
  };

  const modalIsOpen = useSelector(state => state.modal.modalIsOpen);
  const data = useSelector(state => state.modal.data);

  useEffect(() => {}, [modalIsOpen]);

  function closeModal() {
    dispatch(ModalActions.closeModal());
  }

  if (!data.modalType) {
    return null;
  }
  const SpecifiedModal = MODAL_COMPONENTS[data.modalType];

  return (
    <div>
      <Dialog
        open={modalIsOpen}
        onClose={closeModal}
        onBackdropClick={closeModal}
        fullScreen={true}
      >
        <SpecifiedModal {...data} />
      </Dialog>
    </div>
  );
}
