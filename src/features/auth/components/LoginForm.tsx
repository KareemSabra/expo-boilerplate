import Button from "@/components/elements/Button";
import Stack from "@/components/elements/Stack";
import TextInput from "@/components/elements/TextInput";
import { Link } from "expo-router";
import { appRoutes } from "@/constants/appRoutes";
import { useState } from "react";
import Text from "@/components/elements/Text";
import { useCountStore } from "@/features/home/hooks/useCountStore";

export default function LoginForm() {
  // ----------------------------------------------------------------------------------------------------
  // MARK: States & Constants
  // ----------------------------------------------------------------------------------------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { count } = useCountStore();

  // ----------------------------------------------------------------------------------------------------
  // MARK: Functions
  // ----------------------------------------------------------------------------------------------------
  function handleSignIn() {
    console.log("Sign In");
    console.log(email, password);
  }
  // ----------------------------------------------------------------------------------------------------
  // MARK: Main Component UI
  // ----------------------------------------------------------------------------------------------------
  return (
    <>
      <Stack>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />

        <Text>{count.toString()}</Text>
      </Stack>

      <Button onPress={handleSignIn}>Sign In</Button>

      <Stack direction="row">
        <Text>Create an account?</Text>
        <Link href={appRoutes.auth.register()}>
          <Text>Sign Up</Text>
        </Link>
      </Stack>
    </>
  );
}
