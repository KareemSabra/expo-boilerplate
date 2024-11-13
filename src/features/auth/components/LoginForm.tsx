import Button from "@/components/ui/Button";
import Stack from "@/components/ui/Stack";
import TextInput from "@/components/ui/TextInput";
import { Link } from "expo-router";
import { appRoutes } from "@/constants/appRoutes";
import { useState } from "react";
import Text from "@/components/ui/Text";

export default function LoginForm() {
  // ----------------------------------------------------------------------------------------------------
  // MARK: States & Constants
  // ----------------------------------------------------------------------------------------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      </Stack>

      <Button buttonText="Sign In" onPress={handleSignIn} />

      <Stack direction="row">
        <Text>Create an account?</Text>
        <Link href={appRoutes.auth.register()}>
          <Text>Sign Up</Text>
        </Link>
      </Stack>
    </>
  );
}
