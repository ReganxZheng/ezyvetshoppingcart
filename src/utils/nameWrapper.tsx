import * as R from 'ramda';

export const setState = (key: any) => (state: any, payload: any) => (key ? { ...state, [key]: payload } : payload);

export const toggleState = (key: any) => (state: any) => (key ? { ...state, [key]: !state[key] } : !state);

export const getActionWrapper = R.curry(
  (widgetName: string, actionName: string) => `${[widgetName, actionName].join('/')}`
);
