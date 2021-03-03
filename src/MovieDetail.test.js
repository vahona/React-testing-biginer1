import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
// import '@testing-library/jest-dom';

import MovieDetail, { BACKDROP_PATH, POSTER_PATH } from "./MovieDetail";

global.fetch = require("jest-fetch-mock");

afterEach(() => {
  cleanup();
});


const match = {
  params: {
    id: "123",
  },
};


const movie = {
  id: "123456",
  title: "Hunger Games",
  release_date: "01/01/21",
  overview: `It's a nice film.`,
  poster_path: "/hunger_game_poster.jpg",
  backdrop_path: "/hunger_game_backdrop.jpg",
};


// release date
// overview
// backdrop path
// poster path
// 1. create the mock data
// 2. test if those elements appears in the component
// X. create the full path for backdrop path and poster path and see if they are correct

test("MovieDetail", async () => {
  fetch.mockResponseOnce(JSON.stringify(movie));
  const { debug, getByText, getByTestId, queryByTestId } = render(
    <MovieDetail match={match} />
  );


  await waitForElement(() => getByText(movie.title));
  expect(getByTestId("movie-title").textContent).toBe(movie.title);
  expect(getByText(movie.release_date)).toBeTruthy();
  expect(getByText(movie.overview)).toBeTruthy();
  // expect(queryByTestId('backdrop')).toHaveStyle(
  // 	`background: url(${BACKDROP_PATH}${movie.backdrop_path}) no-repeat`
  // );


  // expect(queryByTestId("poster").src).toBe(
  //   `${POSTER_PATH}${movie.poster_path}`
  // );


  console.log(queryByTestId("backdrop"));
  debug();

});
