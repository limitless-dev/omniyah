import { View } from 'react-native';

import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { H1, P } from '~/components/ui/typography';
import { useSupabase } from '~/context/supabase-provider';

export default function Profile() {
  const { signOut } = useSupabase();

  return (
    <View className="flex-1 items-center justify-center gap-y-4 bg-background p-4">
      <H1 className="text-center">Profile</H1>
      <P className="text-center">Sign out and return to the welcome screen.</P>
      <Button
        className="w-full"
        size="default"
        variant="default"
        onPress={signOut}
      >
        <Text>Sign Out</Text>
      </Button>
    </View>
  );
}
