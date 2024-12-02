import { Icon } from '@roninoss/icons';
import { Link } from 'expo-router';
import * as React from 'react';
import { Platform, ScrollView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import Animated, { FadeIn, ZoomOut } from 'react-native-reanimated';

import { AdaptiveSearchHeader } from '~/components/nativewindui/AdaptiveSearchHeader';
import { AdaptiveSearchBarRef } from '~/components/nativewindui/AdaptiveSearchHeader/types';
import { Button } from '~/components/nativewindui/Button';
import { Text } from '~/components/nativewindui/Text';
import { useColorScheme } from '~/lib/useColorScheme';
export default function Modal() {
  const { colors } = useColorScheme();
  const searchBarRef = React.useRef<AdaptiveSearchBarRef>(null);
  return (
    <>
      <AdaptiveSearchHeader
        iosTitle="Title"
        iosIsLargeTitle={false}
        shadowVisible={false}
        rightView={() => (
          <Button variant="plain" size="icon">
            <Icon
              size={24}
              name="account-circle-outline"
              color={colors.foreground}
            />
          </Button>
        )}
        searchBar={{
          ref: searchBarRef,
          iosCancelButtonText: 'Abort',
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
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerClassName="flex-1 py-10 px-4 gap-12"
      >
        <Button
          onPress={() => {
            searchBarRef.current?.focus();
          }}
        >
          <Text>Focus input</Text>
        </Button>
        {Platform.OS !== 'ios' && (
          <Link href="/" asChild>
            <Button variant="plain">
              <Text>Go home</Text>
            </Button>
          </Link>
        )}
      </ScrollView>
    </>
  );
}
