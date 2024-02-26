import Link from "next/link";
import { Text } from "@mantine/core";

export function Logo() {
  return (
    <Link href="/">
      <Text
        variant="gradient"
        fw={500}
        className="text-xl"
        component="span"
        gradient={{ from: "pink", to: "yellow" }}
      >
        Accord
      </Text>
    </Link>
  );
}
