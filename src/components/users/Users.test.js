import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import Users from "./Users";

describe("Test User Component", () => {
  test("both UserForm and UserList visible on screen", async () => {
    render(<Users />);

    const name = screen.getByLabelText(/name/i);
    const mobile = screen.getByLabelText(/mobile/i);
    const email = screen.getByLabelText(/email/i);
    const button = screen.getByRole("button", {
      name: /submit/i,
    });

    user.type(name, "Jay");
    user.type(mobile, "9582947883");
    user.type(email, "jay@gmail.com");

    // Click the submit button
    user.click(button);

    // Wait for the success message to appear
    await waitFor(() => {
      expect(screen.getByText(/Data saved successfully/i)).toBeInTheDocument();
    });

    // Assert that the success message is not visible anymore
    // await waitFor(() => {
    //   expect(screen.queryByText(/Data saved successfully/i)).toBeNull()
    // });

    // Check if the entered data is visible in the list
    // expect(screen.getByRole("cell", { name: /Jay/i })).toBeInTheDocument();
    // expect(screen.getByText(/9582947883/i)).toBeInTheDocument();
    // expect(screen.getByText(/jay@gmail.com/i)).toBeInTheDocument();
  });
});
