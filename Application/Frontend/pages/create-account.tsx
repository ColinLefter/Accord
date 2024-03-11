import { Registration } from "@/components/Accounts/Registration";
import { Logo } from "@/components/Logo";

/**
 * CreateAccount is the page component responsible for rendering the account creation interface
 * within the application. This page incorporates the Registration component, which encapsulates
 * the form and logic necessary for users to create a new account. Additionally, it displays the
 * application's logo, maintaining brand presence and offering a navigation point back to the
 * homepage or another designated main area.
 *
 * @module CreateAccount
 * 
 * Overview:
 * - The primary functionality of this page is to provide users with a straightforward interface
 *   to register for a new account.
 * - The Logo component is strategically placed for brand recognition and to offer an intuitive
 *   way back to a central navigation point, enhancing user experience and navigation efficiency.
 * - While the Registration component handles the core account creation logic, this page positions
 *   it within a broader layout and context, establishing its place within the user flow of
 *   the application.
 *
 * Usage:
 * - This page is typically accessed via a link or route redirection intended for new users to
 *   create an account with the application.
 * - It is designed to be self-contained with a focus on the registration process, ensuring that
 *   users are not distracted and can complete their account setup with ease.
 */
export default function CreateAccount() {
  return (
    <div>
      <div style={{
        zIndex: 2,
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          padding: "20px",
        }}>
          <Logo />
        </div>
      </div>
      <Registration />
    </div>
  );
}
