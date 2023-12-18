import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UsersList from "./UsersList";

describe("Test Users List Component", () => {
  test("Check total row with dummy data", () => {
    const users = [
      { name: "Jay", mobile: "9582947883", email: "jay@gmail.com" },
      { name: "JayS", mobile: "9582947882", email: "jay2@gmail.com" },
    ];
    const { container } = render(<UsersList users={users} />);
    // eslint-disable-next-line
    const rows = container.querySelectorAll('tbody tr');
    expect(rows).toHaveLength(2)
  });
});
