import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

import { Button } from '~/components/nativewindui/Button';
import { cn } from '~/lib/cn';

const categories = [
  'Health',
  'Social',
  'Productivity',
  'Education',
  'Fitness',
  'Travel',
  'Food & Drink',
  'Shopping',
  'Finance',
];

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
            key={category}
            className={cn(activeChip === category ? 'bg-primary' : 'bg-chip')}
            style={[styles.chip]}
            onPress={() => setActiveChip(category)}
          >
            <Text className="font-semibold text-foreground">{category}</Text>
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
    elevation: 2, // For shadow on Android
    shadowColor: '#000', // For shadow on iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
});

export { HorizontalScrollChips };
