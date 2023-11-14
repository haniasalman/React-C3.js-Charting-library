import { LOAD_AREACHART_DATA, GET_AREACHART_DATA, FAILED_AREACHART_DATA } from '../actions/types';

const initialState = {
  chart_data: [],
  loading: false,
  error: null,
};

const areachart_data = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_AREACHART_DATA:
      return { ...state, loading: true };
    case GET_AREACHART_DATA:
      return { ...state, loading: false, chart_data: action.chart_data };
    case FAILED_AREACHART_DATA:
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};

export default areachart_data;
