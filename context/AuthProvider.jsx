import React, { createContext ,useState} from "react";
export const AuthContext = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ({ children }) {
  

const [authuser, setAuthuser] = useState(null)
  
  const handleLogin = async (auth) => {

    try {
    const jsonValue = JSON.stringify(auth)
    await AsyncStorage.setItem('auth', jsonValue)
    setAuthuser(JSON.parse(jsonValue))
      
  } catch (e) {
      console.log(e);
  }
  
}
  return (
    <AuthContext.Provider value={{
      authuser,
      login: handleLogin,
      logout: () => setAuthuser(false)
    }}>
      {children}
    </AuthContext.Provider>
  )
}