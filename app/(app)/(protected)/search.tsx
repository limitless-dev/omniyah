import { View } from 'react-native';

import { H1, Muted } from '@/components/ui/typography';

export default function Search() {
  return (
    <View className="flex-1 items-center justify-center gap-y-4 bg-background p-4">
      <H1 className="text-center">Search</H1>
      <Muted className="text-center">Here is the search page.</Muted>
    </View>
  );
}
