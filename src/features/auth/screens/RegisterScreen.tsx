import RegisterForm from "../components/RegisterForm";
import AuthLayout from "../layouts/AuthLayout";

export default function RegisterScreen() {
  // ----------------------------------------------------------------------------------------------------
  // MARK: Main Component UI
  // ----------------------------------------------------------------------------------------------------
  return (
    <AuthLayout title="Register">
      <RegisterForm />
    </AuthLayout>
  );
}
