import axios from "axios";
import { BottomNavigationEnum, api } from "./const";
import { useSecureStore } from "../hooks/useStorage";
import { useNavigation } from "@react-navigation/native";

export const login = async (username: string, password: string) => {
  const [save] = useSecureStore();
  const navigation = useNavigation();

  try {
    const url = `${api}/parking-clusters/auth/login`;
    const response = await axios.post(url, {
      username,
      password,
    });

    await save("token", response.data.token);
    if (response.data.token) {
      navigation.navigate(BottomNavigationEnum.CLUSTERDETAILS);
    }
  } catch (error) {
    console.error(error);
  }
};
