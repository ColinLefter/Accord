
import { ServerList } from "@/components/LeftSidebar/ServerList";
import { Text } from "@mantine/core";

export default function Accord() {
  return (
    <div>
      <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Accord
        </Text>
      <ServerList/>
    </div>
  );
}
