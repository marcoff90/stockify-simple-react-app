import React from "react";
import {Container} from "@mui/material";
import Header from "./Header";

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  return (
      <>
        <Header/>
        <Container maxWidth={'xl'} style={{padding: 0}}>
          {children}
        </Container>
      </>
  )
};

export default Layout;
