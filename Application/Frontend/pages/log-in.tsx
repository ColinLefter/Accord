import { Login } from "@/components/Accounts/Login";
import { Logo } from "@/components/Logo";
import { Button } from "@mantine/core";

/**
 * LoginPage is dedicated to user authentication, presenting the Login component where users
 * can enter their credentials to access their accounts. It prominently features the application's
 * Logo, ensuring brand consistency and providing a navigational anchor point to the home page.
 *
 * @module LoginPage
 * 
 * Usage:
 * - The primary focus of this page is user authentication, centralizing the login mechanism
 *   within the Login component.
 * - The Logo is strategically placed for brand recognition and offers a link back to the
 *   home page, enhancing the user navigation experience.
 * - While currently focused on the Login component, this page may evolve to include additional
 *   elements such as social login options, password recovery links, or promotional content.
 *
 * Note:
 * - Care should be taken to ensure that the login process is secure, user-friendly, and
 *   accessible to accommodate a diverse user base.
 * - Consideration for responsive design and clear feedback mechanisms can enhance the
 *   usability and effectiveness of the LoginPage.
 */
export default function LoginPage() {
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
      </div>
      <Login />
    </div>
  );
}
