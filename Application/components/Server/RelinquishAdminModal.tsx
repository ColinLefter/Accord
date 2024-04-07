import { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Tooltip, ActionIcon, Text, Stack, Button, TextInput, useMantineTheme } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { RelinquishAdminModalProps } from '@/accordTypes';
import { notifications, showNotification } from '@mantine/notifications';

export function RelinquishAdminModal({ senderID, setLastFetched }: RelinquishAdminModalProps) {
    const [opened, { open, close }] = useDisclosure(false);
    const [searchResult, setSearchResult] = useState<number | null>(null);
    const [errorMessage, setErrorMessage] = useState('');
  
    const theme = useMantineTheme();

    const handleRelinquishAdminClick = async () => {
        try {
            const response = await fetch('/api/relinquish-admin', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ senderID }),
            });
        } catch {
            
        }
    }
}