import Button from "@/components/elements/Button";
import Text from "@/components/elements/Text";
import { appRoutes } from "@/constants/appRoutes";
import { useRouter } from "expo-router";
import DefaultLayout from "../layouts/DefaultLayout";
import Stack from "@/components/elements/Stack";
import { useI18n } from "@/hooks/useI18n";

export default function HomeScreen() {
  const { t } = useI18n();
  const router = useRouter();

  return (
    <DefaultLayout>
      <Stack gap={16} style={{ alignItems: "center" }}>
        <Text>{t("Common.welcome")}</Text>
        <Button onPress={() => router.push(appRoutes.auth.register())}>
          Register
        </Button>
      </Stack>
    </DefaultLayout>
  );
}
