import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Modal from "react-modal";
import AlbumFilesModal from './pages/AlbumFiles';
/*import AddToolModal from './components/AddToolModal';*/
import { Redirect } from 'react-router-dom';
Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.9)";

const MODAL_COMPONENTS = {
  ALBUM_FILES: AlbumFilesModal,
  //ADD_TOOL: AddToolModal,
};

const customStyles = {


};

const mapStateToProps = state => ({
  ...state.modal
});

class ModalRoot extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf({
      modalType: PropTypes.shape().isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        modalIsOpen: nextProps.data.open
      });
    }
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    const { data } = this.props;
    const { modalIsOpen } = this.state;
    if (!data.modalType) {
      return null;
    }
    const SpecifiedModal = MODAL_COMPONENTS[data.modalType];

    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          closeModal={this.closeModal}
        >
          <SpecifiedModal {...data} />
        </Modal>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(ModalRoot);
