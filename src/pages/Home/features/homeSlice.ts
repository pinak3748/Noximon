import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ApiResponseStatus } from '../features/homeType';

interface DockerContainer {
  id: string;
  name: string;
}

interface APIRequest {
  id: string;
  name: string;
  type: string;
  endpoint: string;
  headers?: string;
  body?: string;
  expectedStatus: ApiResponseStatus;
}

interface HomeState {
  slackToken: string;
  apiRequests: APIRequest[];
  dockerContainers: DockerContainer[];
  selectAllContainers: boolean;
  bashScript: String;
}

const initialState: HomeState = {
  slackToken: '',
  apiRequests: [],
  dockerContainers: [],
  selectAllContainers: false,
  bashScript: '',
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setSlackToken: (state, action: PayloadAction<string>) => {
      state.slackToken = action.payload;
    },
    addApiRequest: (state, action: PayloadAction<APIRequest>) => {
      state.apiRequests.push(action.payload);
    },
    setDockerContainers: (state, action: PayloadAction<DockerContainer[]>) => {
      state.dockerContainers = action.payload;
    },
    addDockerContainer: (state, action: PayloadAction<DockerContainer>) => {
      state.dockerContainers.push(action.payload);
    },
    removeDockerContainer: (state, action: PayloadAction<string>) => {
      state.dockerContainers = state.dockerContainers.filter(
        (container) => container.id !== action.payload
      );
    },
    setSelectAllContainers: (state, action: PayloadAction<boolean>) => {
      state.selectAllContainers = action.payload;
      if (action.payload) {
        state.dockerContainers = [
          { id: 'all', name: 'All Containers (Auto-detected)' },
        ];
      } else {
        state.dockerContainers = [];
      }
    },
    setBashScript: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.bashScript = action.payload;
    },
  },
});

export const {
  setSlackToken,
  addApiRequest,
  setDockerContainers,
  addDockerContainer,
  removeDockerContainer,
  setSelectAllContainers,
  setBashScript,
} = homeSlice.actions;
export default homeSlice.reducer;
