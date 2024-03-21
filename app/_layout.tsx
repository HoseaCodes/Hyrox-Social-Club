import { View, Text, LogBox } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient();

export default function _layout() {
  LogBox.ignoreLogs(["Warning: Failed prop type"]);
  return (
     <QueryClientProvider client={client}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="exercises"
            options={{
              presentation: "fullScreenModal",
            }}
          />
          <Stack.Screen
            name="exerciseDetails"
            options={{
              presentation: "modal",
            }}
          />
        </Stack>
      </QueryClientProvider>
  );
}
