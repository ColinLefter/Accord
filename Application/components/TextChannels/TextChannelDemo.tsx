import cx from 'clsx';
import { Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { TextChannelItem } from "@/components/TextChannels/TextChannelItem"
import classes from './TextChannelItem.module.css';

// Function to format the current date in the following format "1st January 2024"
const formatDate = (date: Date) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const day = date.getDate();
  const daySuffix = suffixes[(day % 10) - 1] || suffixes[0];
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  
  return `${day}${daySuffix} ${month} ${year}`;
};

function reorder(list: any[] | Iterable<unknown> | ArrayLike<unknown>, startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

// Function to initialize text channel data
const initData = (textChannels: any[]) => textChannels.map((channel: any) => ({
  ...channel,
  dateCreated: formatDate(new Date()), // Update dateCreated to the current date in the desired format
  symbol: channel.channelName.substring(0, 2).toUpperCase(), // Generate symbol from channelName
}));

const initialData = initData([
  { 
    members: ["ColinLefter", "Hocng7"],
    channelName: 'General Discussion',
  },
  { 
    members: ["TobyNguyen710", "notbaopham", "Hocng7"],
    channelName: 'Project Updates',
  },
  { 
    members: ["ThunderIW", "ColinLefter"],
    channelName: 'Random Chat',
  },
  { 
    members: ["TobyNguyen710", "notbaopham"],
    channelName: 'Development',
  },
  { 
    members: ["ThunderIW", "Hocng7"],
    channelName: 'Design Ideas',
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
export function TextChannelDemo() {
  const [state, handlers] = useListState(initialData);

  const items = state.map((item, index) => (
    <TextChannelItem
      id={item.id}
      index={index}
      key={item.id}
      channelName={item.channelName}
      numberOfMembers={item.members.length}
      captureHistory={item.captureHistory}
      onClick={() => {}}
      isSelected={item.isSelected}
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
