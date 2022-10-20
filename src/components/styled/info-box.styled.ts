import {Box, BoxProps, styled} from "@mui/material";

interface Props extends BoxProps {
  backgroundColor?: string;
}

export const InfoBoxStyled = styled(Box)<Props>(({theme, backgroundColor}) => ({
      display: 'flex',
      flexDirection: 'column',
      width: '15rem',
      height: '7rem',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '1rem',
      backgroundColor: backgroundColor ?? '#ffffff',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    })
);
