import { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  ILoggedInUser,
  ILoggedInUserDetails,
} from "../../utilities/CommonModels";
import "../Modal/Modal.css";

type CreateUserModalProps = {
  loggedInUser: ILoggedInUser;
  history: any;
  show: boolean;
  onHide(): void;
};

class CreateUserModal extends Component<CreateUserModalProps> {
  constructor(props: CreateUserModalProps) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.show} centered>
        <Modal.Header>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Body</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.props.onHide()}>
            nothing
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export { CreateUserModal };
