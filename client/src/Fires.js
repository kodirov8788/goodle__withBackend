import React from "react";
import { auth } from "./firebase/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
const Fires = () => {
  return (
    <div>
      <StyledFirebaseAuth firebaseAuth={auth.GoogleAuthProvider.PROVIDER_ID} />
    </div>
  );
};

export default Fires;
