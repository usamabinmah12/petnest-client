'use client';

import {
  Modal,
  ModalBackdrop,
  ModalContainer,
  ModalDialog,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  ListBox,
  TextArea,
} from "@heroui/react";

const speciesOptions = ["Dog", "Cat", "Bird", "Rabbit", "Fish", "Other"];
const genderOptions = ["Male", "Female"];

export default function AddPetModal({ isOpen, onOpenChange, userEmail }) {

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = await new FormData(e.currentTarget);
    const petData = await Object.fromEntries(formData.entries());
    const res = await fetch('http://localhost:5000/pets',
            {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(petData)
            }
        )
        const data = await res.json();
        if(data) {
            console.log("data added to mongodb");
        }
        else {
            console.log("error occured");
            return;
        }
        return data;

    console.log(petData);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <Button className="hidden" />
      <ModalBackdrop>
        <ModalContainer size="3xl">
          <ModalDialog>
            {({ close }) => (
              <>
                <ModalHeader>Add Pet For Adoption</ModalHeader>

                <form onSubmit={handleSubmit}>
                  <ModalBody>

                    <div className="grid grid-cols-2 gap-4">

                      <Input name="petName" label="Pet Name" labelPlacement="outside" placeholder="Pet Name" isRequired />

                      <Select name="species" label="Species (Dog/Cat/Bird/etc.)" labelPlacement="outside" isRequired>
                        <Select.Trigger>
                          <Select.Value placeholder="Species (Dog/Cat/Bird/etc.)" />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            {speciesOptions.map((item) => (
                              <ListBox.Item id={item} textValue={item}>
                                {item}
                              </ListBox.Item>
                            ))}
                          </ListBox>
                        </Select.Popover>
                      </Select>

                      <Input name="breed" label="Breed" labelPlacement="outside" placeholder="Breed" isRequired />

                      <Input name="age" type="number" label="Age" labelPlacement="outside" placeholder="Age" isRequired />

                      <Select name="gender" label="Gender" labelPlacement="outside" isRequired>
                        <Select.Trigger>
                          <Select.Value placeholder="Gender" />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            {genderOptions.map((item) => (
                              <ListBox.Item id={item} textValue={item}>
                                {item}
                              </ListBox.Item>
                            ))}
                          </ListBox>
                        </Select.Popover>
                      </Select>

                      <Input name="image" label="Image URL (imgbb/postimage)" labelPlacement="outside" placeholder="Image URL (imgbb/postimage)" isRequired />

                      <Input name="healthStatus" label="Health Status" labelPlacement="outside" placeholder="Health Status" isRequired />

                      <Input name="vaccinationStatus" label="Vaccination Status" labelPlacement="outside" placeholder="Vaccination Status" isRequired />

                      <Input name="location" label="Location" labelPlacement="outside" placeholder="Location" isRequired />

                      <Input name="adoptionFee" type="number" label="Adoption Fee" labelPlacement="outside" placeholder="Adoption Fee" isRequired />

                      <Input value={userEmail} name="ownerEmail" label="Owner Email (auto-filled read only)" labelPlacement="outside" placeholder="Owner Email (auto-filled read only)" isReadOnly />

                    </div>

                    <TextArea
                      name="description"
                      label="Description"
                      labelPlacement="outside"
                      placeholder="Description"
                      className="mt-6"
                      minRows={4}
                      isRequired
                    />

                  </ModalBody>

                  <ModalFooter>
                    <Button variant="light" onPress={close}>
                      Cancel
                    </Button>

                    <Button type="submit" color="primary">
                      Add Pet
                    </Button>
                  </ModalFooter>
                </form>

              </>
            )}
          </ModalDialog>
        </ModalContainer>
      </ModalBackdrop>
    </Modal>
  );
}