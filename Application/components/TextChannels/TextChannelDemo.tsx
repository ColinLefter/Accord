import cx from 'clsx';
import { Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import classes from './TextChannelDemo.module.css';

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

export function TextChannelDemo() {
  const [state, handlers] = useListState(initialData);

  const items = state.map((item, index) => (
    <Draggable key={item.id} index={index} draggableId={item.id}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Text className={classes.symbol}>{item.symbol}</Text>
          <div>
            <Text>{item.channelName}</Text>
            <Text color="dimmed" size="sm">
              Members: {item.members.join(', ')} • Created: {item.dateCreated}
            </Text>
          </div>
        </div>
      )}
    </Draggable>
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