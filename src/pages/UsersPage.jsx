import HeaderWrapper from "../ui/HeaderWrapper";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import MainSection from "../ui/MainSection";

import CreateNewUserForBusinessForm from "../features/Users/CreateNewUserForBusinessForm";
import ListUsers from "../features/Users/ListUsers";

import { useState } from "react";

function UsersPage() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <HeaderWrapper>
        <Heading>Users</Heading>
        <Button type="secondary" onClick={() => setShowForm(true)}>
          Add +
        </Button>
      </HeaderWrapper>
      <div>
        {showForm && (
          <Modal onCloseModal={() => setShowForm(false)}>
            <CreateNewUserForBusinessForm
              onCloseModal={() => setShowForm(false)}
            />
          </Modal>
        )}
        <MainSection>
          <ListUsers />
        </MainSection>
      </div>
    </>
  );
}

export default UsersPage;
