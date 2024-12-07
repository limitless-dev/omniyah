import { Icon } from '@roninoss/icons';
import { ListRenderItemInfo } from '@shopify/flash-list';
import * as React from 'react';
import { Platform, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import Animated, {
  FadeIn,
  LinearTransition,
  ZoomOut,
} from 'react-native-reanimated';

import { Button } from '~/components/nativewindui/Button';
import { LargeTitleHeader } from '~/components/nativewindui/LargeTitleHeader';
import { LargeTitleSearchBarRef } from '~/components/nativewindui/LargeTitleHeader/types';
import {
  ESTIMATED_ITEM_HEIGHT,
  List,
  ListDataItem,
  ListItem,
  ListSectionHeader,
} from '~/components/nativewindui/List';
import { Text } from '~/components/nativewindui/Text';
import { HorizontalScrollChips } from '~/components/ui/HorizontalScrollChips';
import { useColorScheme } from '~/lib/useColorScheme';

export default function HomeScreen() {
  const { colors } = useColorScheme();
  const searchBarRef = React.useRef<LargeTitleSearchBarRef>(null);
  const [materialPreset, setMaterialPreset] = React.useState<
    'stack' | 'inline'
  >('stack');
  return (
    <>
      <LargeTitleHeader
        title="Feed"
        materialPreset={materialPreset}
        rightView={() => (
          <Button variant="plain" size="icon">
            <Icon
              size={24}
              name="account-circle-outline"
              color={colors.foreground}
            />
          </Button>
        )}
        screen={{
          contentStyle: { backgroundColor: colors.background },
          title: 'Feed',
        }}
        searchBar={{
          ref: searchBarRef,
          onChangeText: (text) => {
            console.log(text);
          },
          materialRightView() {
            return (
              <Animated.View entering={FadeIn} exiting={ZoomOut}>
                <Button variant="plain" size="icon">
                  <Icon
                    size={24}
                    name="cog-outline"
                    color={colors.foreground}
                  />
                </Button>
              </Animated.View>
            );
          },
          content: (
            <KeyboardAwareScrollView
              className="ios:bg-background/95"
              contentContainerClassName="flex-1"
              keyboardShouldPersistTaps="always"
            >
              <View className="flex-1 items-center justify-center">
                <Text>Search bar content</Text>
              </View>
            </KeyboardAwareScrollView>
          ),
        }}
      />
      <Animated.ScrollView
        layout={LinearTransition}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerClassName="py-2"
      >
        <View className="px-4 pb-2">
          <HorizontalScrollChips />
        </View>
        <List
          /* the variant "insets" will add padding px-4 */
          variant="insets"
          data={DATA}
          estimatedItemSize={ESTIMATED_ITEM_HEIGHT.titleOnly}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />

        {Platform.OS !== 'ios' && (
          <Button
            variant={materialPreset === 'inline' ? 'secondary' : 'tonal'}
            onPress={() => {
              setMaterialPreset((prev) =>
                prev === 'inline' ? 'stack' : 'inline'
              );
            }}
          >
            <Text>
              Switch to {materialPreset === 'inline' ? 'stack' : 'inline'}
            </Text>
          </Button>
        )}
      </Animated.ScrollView>
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

function generateRandomData(count: number) {
  const sections = Math.ceil(count / 4);
  const data: (ListDataItem & { id: string })[] = [];
  for (let i = 0; i < sections; i++) {
    // @ts-expect-error: string is not assignable to ListDataItem. however, it's used for the section header
    data.push(`Header ${i + 1}`);

    for (let j = 0; j < 4; j++) {
      const id = (i * 4 + j + 1).toString();
      data.push({
        id,
        title: `Random Title ${Math.floor(Math.random() * 1000)}`,
        subTitle: `Random Subtitle ${Math.floor(Math.random() * 1000)}`,
      });
    }
  }

  return data;
}

const DATA = generateRandomData(20);
