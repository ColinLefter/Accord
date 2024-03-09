
import { CreateServer } from "@/components/LeftSidebar/CreateServer";
import { ServerList } from "@/components/LeftSidebar/ServerList";
import { Text } from "@mantine/core";

export default function Accord() {
  return (
    <div>
      <Text
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
          size="xl"
        >
          Accord
        </Text>
      <ServerList/>
      {/* <CreateServer/> */}
    </div>
  );
}
