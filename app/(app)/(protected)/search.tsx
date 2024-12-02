import { SafeAreaView, View } from 'react-native';

import { SearchInput } from '~/components/nativewindui/SearchInput';
export default function Search() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Search Input */}
      <View className="flex-1 p-4 web:m-4">
        <SearchInput textContentType="none" autoComplete="off" />
      </View>
    </SafeAreaView>
  );
}
