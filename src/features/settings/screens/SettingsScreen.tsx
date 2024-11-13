import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import { appRoutes } from "@/constants/appRoutes";
import { useRouter } from "expo-router";
import DefaultLayout from "../layouts/DefaultLayout";
import Stack from "@/components/ui/Stack";
import { useI18n } from "@/hooks/useI18n";

export default function SettingsScreen() {
  const { t } = useI18n();
  const router = useRouter();

  return (
    <DefaultLayout>
      <Stack gap={16} style={{ alignItems: "center" }}>
        <Text>{t("Common.settings")}</Text>
        <Button
          buttonText={t("Common.changeLanguage")}
          onPress={() => console.log("change language")}
          buttonStyle={{ minWidth: 200 }}
        />
      </Stack>
    </DefaultLayout>
  );
}
