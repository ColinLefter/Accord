
import { ChannelList } from "@/components/LeftSidebar/ChannelList";
import { ServerList } from "@/components/LeftSidebar/ServerList";

export default function LeftSidebar() {
  return (
    <div>
      <ServerList/>
      {/* <ChannelList/> */}
    </div>
  );
}
