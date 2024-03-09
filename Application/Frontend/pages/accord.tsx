
import { ServerList } from "@/components/LeftSidebar/ServerList";
import { Text } from "@mantine/core";
import Sidebar from "@/components/FriendProfile/friendsIcon";


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
      <Sidebar/>

    </div>
  );
}
