import Button from "@/components/elements/Button";
import Stack from "@/components/elements/Stack";
import Text from "@/components/elements/Text";
import TextInput from "@/components/elements/TextInput";
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

      <Button onPress={handleSignUp}>Sign Up</Button>

      <Stack direction="row">
        <Text>Already have an account?</Text>
        <Link href={appRoutes.auth.login()}>
          <Text>Sign In</Text>
        </Link>
      </Stack>
    </>
  );
}
