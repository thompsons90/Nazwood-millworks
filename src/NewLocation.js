import {
  NewLocationContainer,
  AddressContainer,
  LocationTitle,
} from "./NewLocation.styled";

export const NewLocation = () => {
  return (
    <>
      <LocationTitle>Location</LocationTitle>
      <NewLocationContainer>
        <AddressContainer>
          <p>Mailing Address:</p>
          <p>Nazwood Millworks, LLC</p>
          <p>P.O. Box 923,</p>
          <p>Airway Heights, WA 99001</p>
        </AddressContainer>
        <AddressContainer>
          <p>Physical Address:</p>
          <p>Nazwood Millworks, LLC</p>
          <p>1612 S. Campbell St.</p>
          <p>Airway Heights, WA 99001</p>
        </AddressContainer>
      </NewLocationContainer>
    </>
  );
};
