import React from "react";
import { useAuthStore } from "../store/useAuthStore";

export const SettingsPage = () => {
  const { authUser } = useAuthStore();

  return <div>SettingsPage</div>;
};
