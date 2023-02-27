import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, MainWraper } from './Layout.styled';
import { HeaderComp } from 'components/HeaderComp/HeaderComp';
import { SideBarComp } from 'components/SideBarComp/SideBarComp';

export const Layout = () => {
  return (
    <Container>
      <HeaderComp />
      <MainWraper>
          <SideBarComp />
       

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainWraper>
    </Container>
  );
};
