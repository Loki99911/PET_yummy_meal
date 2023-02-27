import styled from 'styled-components';

export const SideBarWraper = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  left: ${props => (props.isOpen ? '0' : `calc(-100% + 32px)`)};
  transition: left 0.3s ease-in-out;
`;

export const SideBarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 5px;
`;

export const SideBarItem = styled.li`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid black;

`;

export const SideBarBtn = styled.button`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

export const SideBarPlace = styled.li`
  display: inline-block;
  position: relative;
  overflow: hidden;
`;

export const SideBarItemTitle = styled.span`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;
