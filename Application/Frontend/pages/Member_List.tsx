import React from 'react';
import { MemberList } from '@/components/Server/Member_List'; // Assuming the component is located in the specified directory


//NOTE: This Page needs to be deleted in the final implementation. It is only here for Adhoc TESTING!!!
/**
 * MemberListPage displays a list of members within a server, providing an overview of the
 * community and facilitating communication between members. It features the MemberList component,
 * which showcases the list of members in a visually appealing manner.
 *
 * @module MemberListPage
 * 
 * Usage:
 * - The primary focus of this page is to display the list of members within a server, allowing
 *   users to view and interact with other members of the community.
 * - The MemberList component is responsible for rendering the list of members and can be easily
 *   customized or extended to incorporate additional functionality.
 * - Consideration for responsive design and accessibility ensures that the MemberListPage is
 *   accessible and user-friendly across various devices and user demographics.
 */
export default function MemberListPage() {
  return (
    <div className="member-list-container">
      <MemberList />
    </div>
  );
}
