import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const validateSlackToken = createAsyncThunk(
  'home/validateSlackToken',
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://slack.com/api/auth.test',
        {},
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;

      if (!data.ok) {
        throw new Error(data.error || 'Failed to validate Slack token');
      }

      return token;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.error || error.message);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);
