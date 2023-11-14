import { LOAD_DATA, LOAD_AREACHART_DATA} from './types';

export const getUsers = () => {
  return {
    type: LOAD_DATA,
  };
};

export const getAreaChartData = () => {
  return {
    type: LOAD_AREACHART_DATA,
  };
};