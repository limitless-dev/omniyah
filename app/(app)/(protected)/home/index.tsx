import { ListRenderItemInfo } from '@shopify/flash-list';
import { Stack } from 'expo-router';
import React from 'react';
import { Platform, SafeAreaView, ScrollView, View } from 'react-native';

import { LargeTitleHeader } from '~/components/nativewindui/LargeTitleHeader';
import {
  ESTIMATED_ITEM_HEIGHT,
  List,
  ListDataItem,
  ListItem,
  ListSectionHeader,
} from '~/components/nativewindui/List';
import { HorizontalScrollChips } from '~/components/ui/HorizontalScrollChips';
import { Text } from '~/components/ui/text';

const SCREEN_OPTIONS = {
  // title: 'Feed',
  headerTransparent: Platform.OS === 'ios',
  // headerShown: true,
  headerBlurEffect: 'systemMaterial',
} as const;

export default function HomeScreen() {
  return (
    <>
      <LargeTitleHeader title="Feed" materialPreset="stack" />
      <Stack.Screen options={SCREEN_OPTIONS} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView className="flex-1 bg-background">
          <View className="p-5">
            <HorizontalScrollChips />
          </View>
          <View className="flex-1 pb-4">
            <List
              variant="insets"
              data={DATA}
              estimatedItemSize={ESTIMATED_ITEM_HEIGHT.titleOnly}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

function renderItem<T extends ListDataItem>(info: ListRenderItemInfo<T>) {
  if (typeof info.item === 'string') {
    return <ListSectionHeader {...info} />;
  }
  return (
    <ListItem
      leftView={
        <View className="flex-1 justify-center px-4">
          <View className="aspect-square h-8 rounded bg-red-500" />
        </View>
      }
      rightView={
        <View className="flex-1 justify-center px-4">
          <Text className="ios:px-0 px-2 text-muted-foreground">100+</Text>
        </View>
      }
      {...info}
      onPress={() => console.log('onPress')}
    />
  );
}

function keyExtractor(
  item: (Omit<ListDataItem, string> & { id: string }) | string
) {
  return typeof item === 'string' ? item : item.id;
}

const DATA = [
  'Header',
  {
    id: '1',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '2',
    title: 'Hello',
    subTitle: 'World',
  },

  {
    id: '3',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '4',
    title: 'Hello',
    subTitle: 'World',
  },
  'Header 2',
  {
    id: '5',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '6',
    title: 'Hello',
    subTitle: 'World',
  },

  {
    id: '7',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '8',
    title: 'Hello',
    subTitle: 'World',
  },
  'Header 3',
  {
    id: '9',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '10',
    title: 'Hello',
    subTitle: 'World',
  },

  {
    id: '11',
    title: 'Hello',
    subTitle: 'World',
  },
  {
    id: '12',
    title: 'Hello',
    subTitle: 'World',
  },
];
