import { useRecoilState } from "recoil";
import LoginUI from "./Login.presenter";
import { accessTokenState } from "../../commons/stores";
import { useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { LOGIN_USER } from "./Login.queries";
import { useRouter } from "next/router";
import type { ILoginFormProps } from "./Login.types";

export default function Login(): JSX.Element {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onValid = async (data: ILoginFormProps): Promise<void> => {
    console.log(data);
    try {
      const result = await loginUser({
        variables: { email: data.email, password: data.password },
      });
      const accessToken = result.data.loginUser.accessToken;
      if (accessToken === undefined) {
        alert("로그인에 실패했습니다. 다시 시도해 주세요.");
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      void router.push("/boards");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return <LoginUI onValid={onValid} />;
}
