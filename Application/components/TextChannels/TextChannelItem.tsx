import cx from 'clsx';
import { Text } from '@mantine/core';
import { Draggable } from '@hello-pangea/dnd';
import { TextChannelItemProps } from '@/accordTypes';
import classes from './TextChannelItem.module.css';
import { useChat } from '@/contexts/chatContext';

export const TextChannelItem: React.FC<TextChannelItemProps> = ({ id, index, channelName, numberOfMembers, captureHistory, isSelected, onClick }) => {
  const symbol = channelName.substring(0, 2).toUpperCase(); // Generate symbol from channelName
  const { selectedChannelId } = useChat();
  
  return (
    <Draggable key={id} index={index} draggableId={id}>
      {(provided, snapshot) => (
        <div
          onClick={() => onClick(id)}
          className={cx(classes.item, {
            [classes.itemDragging]: snapshot.isDragging,
            [classes.itemSelected]: isSelected && selectedChannelId !== ''
          })}
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