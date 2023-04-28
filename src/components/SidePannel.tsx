import { Box, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const SidePannelBox = styled(Box)`
  border-right: 1px solid black;

  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
`;

const SidePannelInner = styled(Stack)`
  height: 100%;
  padding: 40px 0;
`;

const Logo = styled(Typography)`
  writing-mode: vertical-rl;
  text-orientation: mixed;

  margin: 0;
`;

const SubTitle = styled(Typography)`
  font-size: 13px;
  line-height: 80px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;

const InfoIcon = styled(InfoOutlinedIcon)`
  width: 24px;
  height: 24px;
`;


export default function SidePannel() {
  return (
    <SidePannelBox sx={{ width: { xs: "40px", sm: "80px" }}}>
      <SidePannelInner justifyContent="space-between" alignItems="center">
        <Logo color="primary" variant="h1" sx={{ lineHeight: { xs: "40px", sm: "80px" }, fontSize: "24px" }}>NewsVoca</Logo>
        <SubTitle paragraph sx={{ lineHeight: { xs: "40px", sm: "80px" }, fontSize: "13px"}}>Lorem ipsum dolor sit amet.</SubTitle>
        <InfoIcon />
      </SidePannelInner>
    </SidePannelBox>
  );
}