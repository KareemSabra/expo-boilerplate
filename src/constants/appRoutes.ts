import { Href } from "expo-router";

export const appRoutes = {
  auth: {
    login: (): Href<string> => "/auth/login",
    register: (): Href<string> => "/auth/register",
  },
  home: (): Href<string> => "/",
};
