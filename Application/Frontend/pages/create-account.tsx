import { Registration } from "@/components/Accounts/Registration";
import { Button, Text } from "@mantine/core";
import { Logo } from "@/components/Logo";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <div>
      <div
        style={{
          zIndex: 2,
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            padding: "20px",
            marginLeft: "11px",
          }}
        >
          <Logo />
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            padding: "20px",
            marginRight: "11px",
          }}
        >
          <Link href="/log-in" style={{ textDecoration: "none" }}>
            <Button className="bg-black text-black">
              <Text size="sm">Log in</Text>
            </Button>
          </Link>
        </div>
      </div>
      <Registration />
    </div>
  );
}
