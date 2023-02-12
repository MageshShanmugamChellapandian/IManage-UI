import React, {Component} from 'react';
import { Alert, Spinner, Modal, Button, ModalBody } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IModalInterfaceProps } from '../../../utilities/CommonModels';
import '../uievents/commonevents.css'

class PageSpinner extends Component {
    render() {
        return (
            <div className="page-operation-block">
                <Spinner animation="border" variant="dark" className="page-spinner" />
            </div>
        );
    }
}

class ButtonSpinner extends Component {
    render() {
        return (
            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
        );
    }
}
type AlertModalProps = {
    showalert: boolean
    heading: string;
};
type AlertModalState = {
    alertModalVisible: boolean
};
class AlertModal extends Component<AlertModalProps, AlertModalState> {
    constructor(props: AlertModalProps) {
        super(props);
        this.state = {
            alertModalVisible: this.props.showalert
        };
    }
    closeAlert=()=>{
        this.setState({alertModalVisible:false});
    }
    render() {
        return (
            <Alert className="alert-top" show={this.state.alertModalVisible} variant="danger" >
                <Alert.Heading className="alerttextalign">{this.props.heading}</Alert.Heading>
            </Alert>
        );
    }
}

class DeleteSpinner extends Component {
    render() {
        return (
            <Spinner animation="border" size="sm" />
        );
    }
}

class ModalInterface extends React.Component<IModalInterfaceProps>{
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleClose} size="lg" centered backdrop="static">
                <ModalBody className="confirmation-modal-popup">
                    <div>
                        <img src={require(`../../../images/closeicon.png`)} alt="Close" className="close-icon"
                            onClick={this.props.handleClose} />
                    </div>

                    <div className="confirmation-modal-body">
                        <div className="flex-container">
                            <img src={require(`../../../images/warning.png`)} alt="Warning" className="warning-icon" />
                            <div className="popup-body-section">
                                <span className="popup-message title-mainheader">
                                    
                                </span>
                                <br /><br />
                                <hr />
                            </div>
                        </div>

                        <div>
                            <button className="button btn-width-100 btn-solid-danger font-innercontent-b18r" onClick={this.props.handleAccept}>
                                YES
                    </button>
                            <button className="button btn-width-100 btn-outline-primary font-innercontent-b18r" onClick={this.props.handleClose}>
                                NO
                    </button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}

interface IConfirmationPopupProps {
    show: boolean,
    showClose?: boolean,
    onHandleClose(): void,
    onHandleAccept(): void,
    confirmationMessage: string,
    confirmationMessageDetail: string
}

export class ConfirmationPopup extends React.Component<IConfirmationPopupProps> {
    render() {
        return (
            <Modal show={this.props.show} size="lg" centered >
                <ModalBody className="confirmation-modal-popup">
                    <div>
                        {(this.props.showClose !== null && this.props.showClose !== undefined) && this.props.showClose === false ? null :
                            <img src={require(`../../../images/closeicon.png`)} alt="Close" className="close-icon"
                                onClick={() => this.props.onHandleClose()} />
                        }
                    </div>

                    <div className="confirmation-modal-body">
                        <div className="flex-container">
                            <img src={require(`../../../images/warning.png`)} alt="Warning" className="warning-icon" />
                            <div className="popup-body-section">
                                <span className="popup-heading title-mainheader">
                                    {/* ‘Humana Group’ template already exists, do you want to replace it? */}
                                    {this.props.confirmationMessage}
                                </span>
                                <br /><br />
                                <span className="popup-message font-innercontent-r13r">
                                    {/* A template with same name already exists, replacing it overwrite its current contents, A template with same name already exists, replacing it overwrite its current contents */}
                                    {this.props.confirmationMessageDetail}
                                </span>
                                <br /><br />
                                <hr />
                            </div>
                        </div>

                        <div>
                            <button className="button btn-width-100 btn-solid-danger font-innercontent-b18r" onClick={() => this.props.onHandleAccept()}>
                                YES
                            </button>
                            <button className="button btn-width-100 btn-outline-primary font-innercontent-b18r" onClick={() => this.props.onHandleClose()}>
                                NO
                            </button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        )
    }
}

export { PageSpinner, ButtonSpinner, AlertModal, DeleteSpinner, ModalInterface };