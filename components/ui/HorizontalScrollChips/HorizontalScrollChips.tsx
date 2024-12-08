import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

import { Button } from '~/components/nativewindui/Button';
import { cn } from '~/lib/cn';

const categories = ['All', 'Unread', 'Favorites', 'Family', 'Friends'];

function HorizontalScrollChips() {
  const [activeChip, setActiveChip] = useState<string | null>(null);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {categories.map((category) => (
        <View key={category} className="pe-2">
          <Button
            size="none"
            key={category}
            className={cn(
              'px-[15px] py-[9px] rounded-full',
              activeChip === category
                ? 'bg-chip text-chipText'
                : 'bg-chip-foreground text-chipText-foreground'
            )}
            style={[styles.chip]}
            onPress={() => setActiveChip(category)}
          >
            <Text
              className={cn(
                'font-semibold text-[15px]',
                activeChip === category
                  ? 'text-chipText'
                  : 'text-chipText-foreground'
              )}
            >
              {category}
            </Text>
          </Button>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chip: {
    // elevation: 2, // For shadow on Android
    // shadowColor: '#000', // For shadow on iOS
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
  },
});

export { HorizontalScrollChips };
