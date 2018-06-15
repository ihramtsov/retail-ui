import { Reducer } from '../CustomComboBox';

// eslint-disable-next-line flowtype/no-weak-types
function createReducer(reducers: { [key: string]: Reducer<any> }) {
  return (state: any, props: any, action: any) => {
    const { type } = action;
    const reducer = reducers[type] || (() => state);
    return reducer(state, props, action);
  };
}

export default createReducer;
