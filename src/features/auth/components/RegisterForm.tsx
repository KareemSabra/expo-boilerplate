import Button from "@/components/ui/Button";
import Stack from "@/components/ui/Stack";
import Text from "@/components/ui/Text";
import TextInput from "@/components/ui/TextInput";
import { appRoutes } from "@/constants/appRoutes";
import { Link } from "expo-router";
import { useState } from "react";

export default function RegisterForm() {
  // ----------------------------------------------------------------------------------------------------
  // MARK: States & Constants
  // ----------------------------------------------------------------------------------------------------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ----------------------------------------------------------------------------------------------------
  // MARK: Functions
  // ----------------------------------------------------------------------------------------------------
  function handleSignUp() {
    console.log("Sign Up");
    console.log(name, email, password);
  }

  // ----------------------------------------------------------------------------------------------------
  // MARK: Main Component UI
  // ----------------------------------------------------------------------------------------------------
  return (
    <>
      <Stack>
        <TextInput placeholder="Name" value={name} onChangeText={setName} />

        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
      </Stack>

      <Button buttonText="Sign Up" onPress={handleSignUp} />

      <Stack direction="row">
        <Text>Already have an account?</Text>
        <Link href={appRoutes.auth.login()}>
          <Text>Sign In</Text>
        </Link>
      </Stack>
    </>
  );
}
