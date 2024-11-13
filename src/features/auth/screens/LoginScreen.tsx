import LoginForm from "../components/LoginForm";
import AuthLayout from "../layouts/AuthLayout";

export default function LoginScreen() {
  // ----------------------------------------------------------------------------------------------------
  // MARK: Main Component UI
  // ----------------------------------------------------------------------------------------------------
  return (
    <AuthLayout title="Login">
      <LoginForm />
    </AuthLayout>
  );
}
