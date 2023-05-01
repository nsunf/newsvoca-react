import { Box, Stack, Typography, Link } from "@mui/material";
import styled from "styled-components";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Link as RouterLink } from "react-router-dom";

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
        <Link component={RouterLink} to="/" underline="none">
          <Logo
            color="primary"
            variant="h1"
            lineHeight="0px"
            fontSize="24px"
          >
            NewsVoca
          </Logo>
        </Link>
        <SubTitle lineHeight="0px" fontSize="13px" paragraph>Lorem ipsum dolor sit amet.</SubTitle>
        <InfoIcon />
      </SidePannelInner>
    </SidePannelBox>
  );
}