import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quizzes: {},
};

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = {
        id,
        name,
        topicId,
        cardIds,
      };
    },
  },
});

export const { addQuiz } = quizzesSlice.actions;

export const selectQuezzies = (state) => state.quizzes.quizzes;

export default quizzesSlice.reducer;
