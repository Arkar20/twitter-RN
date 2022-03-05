import {useContext} from "react";
import { AuthContext } from "../context/AuthProvider";
export default function () {
  const auth = useContext(AuthContext);

  return auth;
}