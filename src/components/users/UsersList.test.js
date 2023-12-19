import { render, screen, within } from "@testing-library/react";
// import user from "@testing-library/user-event";
import UsersList from "./UsersList";
import Users from "./Users";

function renderComponent(){
    const users = [
        { name: "Jay", mobile: "9582947883", email: "jay@gmail.com" },
        { name: "JayS", mobile: "9582947882", email: "jay2@gmail.com" },
      ];    
      render(<UsersList users={users} />);

      return {
        users
      }
}


describe("Test Users List Component", () => {
  test("Check total row with dummy data", () => {
    const { users } = renderComponent()
    const { container } = render(<UsersList users={users} />);
    // eslint-disable-next-line
    const rows = container.querySelectorAll("tbody tr");
    expect(rows).toHaveLength(2);
  });

  test("Second method to test row with dummy data", () => {
    renderComponent()
    const rows = within(screen.getByTestId("users")).getAllByRole("row");
    expect(rows).toHaveLength(2);
  });

  test("Check testing of table contents", () => {
    const { users } = renderComponent()
    // screen.logTestingPlaygroundURL();
    for (let user of users) {
      const name = screen.getByRole("cell", {
        name: user.name,
      });
      const mobile = screen.getByRole("cell", {
        name: user.mobile,
      });
      const email = screen.getByRole("cell", {
        name: user.email,
      });
      expect(name).toBeInTheDocument();
      expect(mobile).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    }
  });
});
