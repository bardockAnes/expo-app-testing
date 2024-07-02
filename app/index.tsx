import { Text, View } from "react-native";
import React from 'react';
import { i18n } from '../lib/i18n';

export default function Index() {
  i18n.locale = 'ar';
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{flex:1,width:'100%'}}>{i18n.t('hello')}</Text>
    </View>
  );
}
