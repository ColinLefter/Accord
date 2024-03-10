import AppLink from "@/components/AppLink";
import { Text } from "@mantine/core";

export function Logo() {
  return (
    <AppLink href="/">
      <Text
        variant="gradient"
        fw={500}
        size="xl"
        component="span"
        gradient={{ from: "pink", to: "yellow" }}
      >
        Accord
      </Text>
    </AppLink>
  );
}
