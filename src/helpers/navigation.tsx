import {NavigationContainerRef} from '@react-navigation/core';
import {ParamListBase} from '@react-navigation/routers';
import * as React from 'react';
import {StackActions} from '@react-navigation/native';

export const navigationRef =
  React.createRef<NavigationContainerRef<ParamListBase>>();

export function navigate(name: string, params?: object) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function pop(qty: number) {
  navigationRef.current?.dispatch(StackActions.pop(qty));
}

export function reset(route: string) {
  navigationRef.current?.reset({
    index: 0,
    routes: [{name: route}],
  });
}

export function replace(route: string) {
  navigationRef.current?.dispatch(StackActions.replace(route));
}