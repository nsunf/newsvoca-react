import { Box, Stack } from "@mui/material";
import styled from "styled-components";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const SidePannelBox = styled(Box)`
  width: 80px;
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

const Logo = styled.h1`
  font-size: 24px;
  line-height: 80px;
  writing-mode: vertical-rl;
  text-orientation: mixed;

  margin: 0;
`;

const SubTitle = styled.p`
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
    <SidePannelBox>
      <SidePannelInner justifyContent="space-between" alignItems="center">
        <Logo color="primary">NewsVoca</Logo>
        <SubTitle>Lorem ipsum dolor sit amet.</SubTitle>
        <InfoIcon />
      </SidePannelInner>
    </SidePannelBox>
  );
}