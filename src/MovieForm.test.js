import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import MovieForm from "./MovieForm";

afterEach(cleanup);

const onSubmit = jest.fn(() => console.log('hi'))

test('<MovieForm/>', () => {
  const { debug, getByTestId, queryByTestId, getByText,getByLabelText } = render(
    <MovieForm  submitForm={onSubmit}/>
  );

   expect(queryByTestId("movie-form")).toBeTruthy();

  getByLabelText('text').value = 'hello'

//   const input = getByLabelText('Text');
  fireEvent.change(getByLabelText('text'))

// fireEvent.change(getByLabelText("Text"), {
//     target: {value: 'hello onja'}
// })

 
    fireEvent.click(getByText("submit"));
    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalledWith({text: 'hello onja'})

});
