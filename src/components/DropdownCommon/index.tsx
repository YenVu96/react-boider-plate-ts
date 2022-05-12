import React from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const DropdownCommon = ({
  isOpen,
  toggle,
  label,
  value,
}: {
  isOpen: boolean;
  toggle: () => void;
  label: string;
  value: string;
}) => {
  //! State

  //! Function
  // onstructor(props) {
  //     super(props);

  //     this.toggle = this.toggle.bind(this);
  //     this.state = {
  //       dropdownOpen: false
  //     };
  //   }

  //   toggle() {
  //     this.setState(prevState => ({
  //       dropdownOpen: !prevState.dropdownOpen
  //     }));
  //   }
  //! Render
  return (
    <Dropdown isOpen={isOpen} toggle={toggle}>
      <DropdownToggle caret>{label}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>{value}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
export default DropdownCommon;
