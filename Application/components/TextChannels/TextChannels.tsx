import cx from 'clsx';
import { rem, Text, Stack } from '@mantine/core';
import { IconGripVertical } from '@tabler/icons-react';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { TextChannelItem } from "@/components/TextChannels/TextChannelItem"
import { useUser, UserProfile } from '@clerk/nextjs';
import { formatDate } from "@/utility"
import { useState, useEffect } from 'react';

function reorder(list: any[] | Iterable<unknown> | ArrayLike<unknown>, startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

// Function to initialize text channel data
const initData = (textChannels: any[]) => textChannels.map((channel: any) => ({
  ...channel,
  dateCreated: new Date(),
  symbol: channel.channelName.substring(0, 2).toUpperCase(), // Generate symbol from channelName
}));

const initialData = initData([
  { 
    members: ["ColinLefter", "Hocng7"],
    channelName: 'General Discussion',
  },
  { 
    members: ["ColinLefter", "Hocng7"],
    channelName: 'General Discussion',
  },
  { 
    members: ["ColinLefter", "Hocng7"],
    channelName: 'General Discussion',
  },
  { 
    members: ["ColinLefter", "Hocng7"],
    channelName: 'General Discussion',
  },
  { 
    members: ["ColinLefter", "Hocng7"],
    channelName: 'General Discussion',
  },
  { 
    members: ["ColinLefter", "Hocng7"],
    channelName: 'General Discussion',
  },
  { 
    members: ["ColinLefter", "Hocng7"],
    channelName: 'General Discussion',
  },
  { 
    members: ["ColinLefter", "Hocng7"],
    channelName: 'General Discussion',
  },
  { 
    members: ["ColinLefter", "Hocng7"],
    channelName: 'General Discussion',
  },
]).map((channel, index) => ({
  ...channel,
  id: `${channel.symbol}-${index}`, // Ensuring that each item has a unique id
}));

/**
 * Demonstrates a draggable list of text channels, showcasing dynamic reordering capabilities.
 * Each text channel displays its name, members, and creation date, emphasizing the application's
 * focus on collaboration and community engagement.
 *
 * This component leverages the `@hello-pangea/dnd` library for drag-and-drop functionality, allowing
 * users to intuitively reorder text channels as needed. The text channels are initialized with mock data,
 * including a dynamically generated creation date and a symbol derived from the channel name.
 *
 * @returns {JSX.Element} A list of draggable text channel items within a drag-and-drop context.
 */

/**
 * Formats a JavaScript Date object into a human-readable string in the format "1st January 2024".
 *
 * @param {Date} date The date to format.
 * @returns {string} The formatted date string.
 */

/**
 * Reorders an array by moving an item from one index to another.
 * This utility function is used to update the list state after a drag-and-drop operation.
 *
 * @param {Array} list The array to reorder.
 * @param {number} startIndex The index of the item to move.
 * @param {number} endIndex The index to move the item to.
 * @returns {Array} The reordered array.
 */

/**
 * Initializes the text channel data with mock information, including channel names, members,
 * and dynamically generated creation dates and symbols.
 *
 * @param {Array} textChannels An array of text channel objects to initialize.
 * @returns {Array} The initialized text channel data, each with a unique ID.
 */
export function TextChannels() {
  const { user } = useUser();
  const [ userID, setUserID ] = useState<string>('');
  const [state, handlers] = useListState(initialData);

  useEffect(() => {
    if (user && user.id) {
      setUserID(user.id);
    }
  }, [user]); // Dependency array ensures this runs whenever `user` changes

  const fetchUserChats = async () => {
    if (!userID) return; // Ensure userID is available
  
    try {
      const response = await fetch('/api/get-user-chats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userID: userID })
      });
  
      if (response.ok) {
        const data = await response.json();
        // Update your state or context with the fetched chat channels
        console.log(data.chats); // For demonstration, replace with state update
      } else {
        console.error('Failed to fetch chat channels');
      }
    } catch (error) {
      console.error('Error fetching chat channels:', error);
    }
  };  

  // Mapping through the state to create TextChannelItem components
  const items = state.map((item, index) => (
    <TextChannelItem
      key={item.id} // Ensure you have a unique key for each item
      id={item.id}
      index={index}
      channelName={item.channelName}
      members={item.members}
    />
  ));

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) => {
        if (!destination) return; // Prevents errors if dropped outside droppable area
        const reordered = reorder(state, source.index, destination.index);
        handlers.setState(reordered);
      }}
    >
      <Droppable droppableId="dnd-list" direction="vertical">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
