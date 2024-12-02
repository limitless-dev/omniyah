import { SearchIcon } from 'lucide-react-native';
import React from 'react';
import { View, TextInput } from 'react-native';

import { SafeAreaView } from '~/components/safe-area-view';
import { H1, Muted } from '~/components/ui/typography';
import { colors } from '~/constants/colors';

export default function Search() {
  return (
    <SafeAreaView
      className="flex-1 bg-background p-4"
      edges={['top', 'bottom']}
    >
      {/* Search Input */}
      <View className="flex-1 web:m-4">
        <View className="border-primary/30 mb-4 flex-row items-center rounded-lg border bg-background px-3 py-2 text-primary">
          <SearchIcon size={18} color={colors.dark.card} />
          <TextInput
            className="ml-2 flex-1 text-primary"
            placeholder="Search"
          />
        </View>
        <View className="flex-1 items-center justify-center gap-y-4">
          <H1 className="text-center">Search</H1>
          <Muted className="text-center">Here is the search page.</Muted>
        </View>
      </View>
    </SafeAreaView>
  );
}
