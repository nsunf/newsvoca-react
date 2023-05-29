import { Route, Routes } from "react-router-dom";
import LoginContainer from "../container/LoginContainer";
import SignupContainer from "../components/SignupContainer";
import FindMyContainer from "../components/FindMyContainer";

export default function Auth() {
  return (
    <Routes>
      <Route path="login" element={<LoginContainer />} />
      <Route path="signup" element={<SignupContainer />} />
      <Route path="findmy/:type" element={<FindMyContainer />} />
    </Routes>
  );
}