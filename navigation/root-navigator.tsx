import {DrawerNavigationProp} from '@react-navigation/drawer/src/types';

export type RootDrawerParamList = {
    Home: undefined;
};

export type RootDrawerScreenProps<Screen extends keyof RootDrawerParamList> = DrawerNavigationProp<
    RootDrawerParamList,
    Screen
>;
