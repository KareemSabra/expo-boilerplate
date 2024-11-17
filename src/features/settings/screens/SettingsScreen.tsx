import Button from "@/components/elements/Button";
import Text from "@/components/elements/Text";
import { appRoutes } from "@/constants/appRoutes";
import { useRouter } from "expo-router";
import DefaultLayout from "../layouts/DefaultLayout";
import Stack from "@/components/elements/Stack";
import { useI18n } from "@/hooks/useI18n";
import { useCountStore } from "@/features/home/hooks/useCountStore";

export default function SettingsScreen() {
  const { t } = useI18n();
  const router = useRouter();
  const { count, inc } = useCountStore();

  return (
    <DefaultLayout>
      <Stack gap={16} style={{ alignItems: "center" }}>
        <Text>{t("Common.settings")}</Text>
        <Button onPress={() => inc()}>{count.toString()}</Button>
      </Stack>
    </DefaultLayout>
  );
}
