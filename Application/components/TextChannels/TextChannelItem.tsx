import cx from 'clsx';
import { rem, Text, Stack } from '@mantine/core';
import { IconGripVertical } from '@tabler/icons-react';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { TextChannelItemProps } from '@/accordTypes';
import classes from './TextChannelItem.module.css';

export const TextChannelItem: React.FC<TextChannelItemProps> = ({ id, index, channelName, numberOfMembers, captureHistory, onClick }) => {
  const symbol = channelName.substring(0, 2).toUpperCase(); // Generate symbol from channelName
  
  return (
    <Draggable key={id} index={index} draggableId={id}>
      {(provided, snapshot) => (
        <div
          onClick={() => onClick(id)}
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Text className={classes.symbol}>{symbol}</Text>
          <div>
            <Text>{channelName}</Text>
            <Text c="dimmed" size="sm">
              {numberOfMembers} members {captureHistory ? '' : '• Private'}
            </Text>
          </div>
        </div>
      )}
    </Draggable>
  );
};