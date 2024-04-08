import cx from 'clsx';
import { rem, Text, Stack } from '@mantine/core';
import { IconGripVertical } from '@tabler/icons-react';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { TextChannelItem } from "@/components/TextChannels/TextChannelItem"
import { useUser, UserProfile } from '@clerk/nextjs';
import { formatDate, truncateText } from "@/utility"
import { useState, useEffect } from 'react';
import { TextChannel } from "@/accordTypes";
import { useChannelContext } from "@/contexts/channelContext";
import { useChat } from '@/contexts/chatContext';
import { useActiveView } from '@/contexts/activeViewContext';

function reorder(list: TextChannel[], startIndex: number, endIndex: number): TextChannel[] {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}

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
  const  [ senderUsername, updateSenderUsername ] = useState<string>('');
  const [textChannels, setTextChannels] = useState<TextChannel[]>([]);
  const { updateContext, setActiveView } = useChat();

  useEffect(() => {
    if (user && user.id && user.username) {
      setUserID(user.id);
      updateSenderUsername(user.username);
    }
  }, [user]); // Dependency array ensures this runs whenever `user` changes

  const fetchUserChats = async () => {
    if (!userID) return; // Ensure userID is available
  
    try {
      const response = await fetch('/api/get-user-text-channels', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userID: userID })
      });
  
      if (response.ok) {
        const { textChannels } = await response.json();
        setTextChannels(textChannels);
      } else {
        console.error('Failed to fetch chat channels');
      }
    } catch (error) {
      console.error('Error fetching chat channels:', error);
    }
  };

  const onChannelClick = (channelKey: string) => {
    // Find the channel details from the state
    const channel = textChannels.find(channel => channel.channelKey === channelKey);
    if (!channel) {
      console.error('Channel not found');
      return;
    }
    
    updateContext(channelKey, {
      senderID: userID,
      senderUsername: senderUsername,
      receiverIDs: [], // Assuming this needs to be dynamically fetched or set
      captureHistory: channel.captureHistory, // Use the captureHistory from the channel details
      lastFetched: Date.now(),
      setLastFetched: () => {},
      onMessageExchange: () => {},
      channelKey,
    });
    setActiveView('textChannel'); // Switch to chat view
  };

  // Mapping through the state to create TextChannelItem components
  const items = textChannels.map((item, index) => (
    <TextChannelItem
      key={item.channelKey}
      id={item.channelKey}
      index={index}
      channelName={truncateText(item.channelName, 15)}
      numberOfMembers={item.memberIDs.length}
      onClick={onChannelClick} // Passing the click handler
    />
  ));

  fetchUserChats();

  return (
    <DragDropContext
    onDragEnd={({ destination, source }) => {
      if (!destination) {
        return; // Prevents errors if dropped outside the droppable areas
      }
      // Use setTextChannels to update the order of text channels
      setTextChannels(currentChannels => reorder(currentChannels, source.index, destination.index));
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
