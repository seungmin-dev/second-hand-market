import { useEffect } from "react";
import { useQueryFetchUserLoggedIn } from "../queries/useQueryFetchUserLoggedIn";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../stores";

export const useUserInfo = (): void => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { data: userInfoData } = useQueryFetchUserLoggedIn();

  useEffect(() => {
    if (userInfoData !== undefined) {
      setUserInfo({
        id: userInfoData?.fetchUserLoggedIn._id,
        name: userInfoData?.fetchUserLoggedIn.name,
        email: userInfoData?.fetchUserLoggedIn.email,
        picture: userInfoData?.fetchUserLoggedIn.picture,
        amount: userInfoData?.fetchUserLoggedIn.userPoint?.amount,
      });
    }
  }, [userInfoData]);
};
