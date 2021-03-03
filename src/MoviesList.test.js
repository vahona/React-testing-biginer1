import React from "react";
import { render, waitFor, fireEvent, waitForElement } from "react-testing-library";
import fetchMock from "jest-fetch-mock";
import MoviesList from './MoviesList'


fetchMock.enableMocks();
beforeEach(() => {
  fetchMock.resetMocks();

});

const movies = {
  results: [
    {
      id: "1",
      title: " A walk to remeber",
      poster_path: "89.jpg",
    },
    {
      id: "2",
      title: "the fault in our start",
      poster_path: "89.jpg",
    },
  ],
};
 



test("< MoviesList />", async () => {
        fetchMock.mockResponseOnce(JSON.stringify(movies))
        const { debug, queryByText } = render(<MoviesList movies={movies} />);

        await waitFor(() => queryByText(movies[1].title));
       	expect(queryByText(movies[1].title)).toBeTruthy();

        debug()
})


