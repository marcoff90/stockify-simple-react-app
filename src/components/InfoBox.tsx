import React from "react";
import {InfoBoxStyled} from "./styled/info-box.styled";
import {Typography} from "@mui/material";
import {grey} from "@mui/material/colors";

type Props = {
  topText: string;
  bottomText: string;
  textColor?: string;
  backgroundColor?: string;
}

const InfoBox: React.FC<Props> = ({topText, bottomText, textColor, backgroundColor}) => {
  return (
      <InfoBoxStyled backgroundColor={backgroundColor ?? '#00adb5'}>
        <Typography sx={{fontSize: '1.5rem', fontWeight: 'bold'}} color={textColor ?? grey[700]}>{topText}</Typography>
        <Typography sx={{fontSize: '1rem'}} color={textColor ?? grey[700]}>{bottomText}</Typography>
      </InfoBoxStyled>
  )
};

export default InfoBox;
