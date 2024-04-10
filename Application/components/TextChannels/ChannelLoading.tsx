import { Skeleton, Stack } from "@mantine/core";
import { ChannelLoadingProps } from "@/accordTypes";

export function ChannelLoading({numChannels } : ChannelLoadingProps) {
  // Create an array to hold the loading skeletons
  const loadingSkeletons = [];

  // Use a for loop to generate the specified number of skeleton groups
  for (let i = 0; i < numChannels; i++) {
    const skeletonGroup = (
      <Stack key={`skeleton-group-${i}`} gap="0">
        <Skeleton height={8} radius="xl" />
        <Skeleton height={8} mt={6} radius="xl" />
        <Skeleton height={8} mt={6} width="70%" radius="xl" />
      </Stack>
    );
    loadingSkeletons.push(skeletonGroup);
  }

  return (
    <Stack gap="xl">
      {loadingSkeletons}
    </Stack>
  );
}
