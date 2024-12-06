import { router } from 'expo-router';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { SegmentedControl } from '~/components/nativewindui/SegmentedControl';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { H1, Muted } from '~/components/ui/typography';
const VALUES = ['Following', 'For you'];

export default function Home() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="p-4">
        <SegmentedControl
          values={VALUES}
          selectedIndex={selectedIndex}
          onIndexChange={(index) => {
            setSelectedIndex(index);
          }}
        />
      </View>
      <View className="items-center justify-center gap-y-4 p-4">
        <H1 className="text-center">Home</H1>
        <Muted className="text-center">
          You are now authenticated and this session will persist even after
          closing the app.
        </Muted>
        <Button
          className="w-full"
          variant="default"
          size="default"
          onPress={() => router.push('/(app)/modal')}
        >
          <Text>Open Modal</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
