import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../components/Firebase";

function useAuth() {
  return useAuthState(firebase.auth());
}

export default useAuth;
