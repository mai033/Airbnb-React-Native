import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

interface Props {
  listings: any[];
  category: string;
}

const Listings = ({ listings, category }: Props) => {
  useEffect(() => {
    console.log('Reload listings', category);
  }, [category]);
  return (
    <View>
      <Text>Listings</Text>
    </View>
  );
};

export default Listings;
