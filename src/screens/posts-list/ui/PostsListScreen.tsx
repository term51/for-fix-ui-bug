import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { Card } from 'react-native-paper';
import { View } from 'react-native';

import { PostStackEnum, PostStackListType, useAppTheme } from '@/shared/config';
import {
  UiScreenContent,
  UiFlatList,
  UiButton,
} from '@/shared/ui';

import { useStyles } from './styles.ts';

type Props = NativeStackScreenProps<PostStackListType, PostStackEnum.PostsList>;

export const PostsListScreen = ({ route, navigation }: Props) => {
  console.log('- PostsScreen');
  const theme = useAppTheme();
  const styles = useStyles();


  const data = [
    {
      id: '1',
      title: 'Post 1',
      subtitle: 'SubTitle 1 SubTitle 1 SubTitle 1',
    },
    { id: '2', title: 'Post 2', subtitle: 'SubTitle 2' },
    { id: '3', title: 'Post 3', subtitle: 'SubTitle 4' },
    { id: '4', title: 'Post 4', subtitle: 'SubTitle 4' },
    { id: '5', title: 'Post 5', subtitle: 'SubTitle 5' },
  ];

  return (
    <UiScreenContent>
      <UiFlatList
        data={data}
        renderItem={({ item, index, separators }) => (
          <Card mode={'elevated'} style={styles.cardContainer}>
            <Card.Cover
              style={styles.image}
              resizeMode={'cover'}
              source={{
                uri: 'https://www17.wellsfargomedia.com/assets/images/the-private-bank/mountain-stream-350x200.jpg',
              }}
            />
            <Card.Title
              titleNumberOfLines={3}
              style={styles.titleContainer}
              title={item.title}
              titleStyle={styles.titleText}
              subtitleStyle={styles.subtitleText}
              subtitle={item.subtitle}
            />
            <View style={styles.actionContainer}>
              <UiButton size={'small'} fontSize={theme.font.sizeM}>
                {'Read More'}
              </UiButton>
            </View>
          </Card>
        )}
      />
    </UiScreenContent>
  );
};
