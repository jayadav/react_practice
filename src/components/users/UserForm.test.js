import { render, screen, waitFor, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";
// import { keyboard } from "@testing-library/user-event/dist/keyboard";

describe("User From Test", () => {
  test("Check H1 Title", () => {
    render(<UserForm />);
    const title = screen.getByText("Add New Users");
    expect(title).toBeInTheDocument();
  });

  test("3 Input and One Button should be in form", () => {
    render(<UserForm />);
    const input = screen.getAllByRole("textbox");
    expect(input).toHaveLength(3);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Check validation of Form", () => {
    global.alert = jest.fn();
    render(<UserForm />);
    const [name, mobile, email] = screen.getAllByRole("textbox");
    user.click(name);
    user.keyboard("Jay");
    user.click(mobile);
    user.keyboard("9582947883");
    user.click(email);
    // user.keyboard("jay.shankar20@gmail.com");
    user.keyboard("");

    const button = screen.getByRole("button");
    // expect(button).toBeInTheDocument();
    user.click(button);
    expect(global.alert).toHaveBeenCalledWith("Please enter all field.");
  });

  test("Mobile number validation", () => {
    global.alert = jest.fn();
    const argList = [];
    const callback = (...args) => {
      argList.push(args);
    };
    render(<UserForm saveUsers={callback} />);
    const [name, mobile, email] = screen.getAllByRole("textbox");
    user.click(name);
    user.keyboard("Jay");
    user.click(mobile);
    user.keyboard("9582947883xxx");
    user.click(email);
    user.keyboard("test@gmail.com");

    const button = screen.getByRole("button");
    user.click(button);

    expect(global.alert).toHaveBeenCalledWith("Mobile number is not valid.");

    // user.clear(global.alert)
    // user.click(mobile);
    // user.keyboard("9582947883");
    // user.click(button);
    // expect(argList).toHaveLength(1)
  });

  test("Check Form submitted and callback function called", () => {
    // const argList = [];
    const callback = jest.fn();
    render(<UserForm saveUsers={callback} />);
    const [name, mobile, email] = screen.getAllByRole("textbox");
    user.click(name);
    user.keyboard("Jay");
    user.click(mobile);
    user.keyboard("9582947883");
    user.click(email);
    user.keyboard("jay.shankar20@gmail.com");

    const button = screen.getByRole("button");
    user.click(button);
    // expect(global.alert).toHaveBeenCalled("Please enter all field.")
    // expect(argList).toHaveLength(1);
    // expect(argList[0][0]).toEqual({
    //   email: "jay.shankar20@gmail.com",
    //   mobile: "9582947883",
    //   name: "Jay",
    // });
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith({
      email: "jay.shankar20@gmail.com",
      mobile: "9582947883",
      name: "Jay",
    });
  });

  test("Input values should be empty after submitting the form", async () => {
    const mock = jest.fn();
    render(<UserForm saveUsers={mock} />);
    const name = screen.getByLabelText(/name/i);
    const mobile = screen.getByLabelText(/mobile/i);
    const email = screen.getByLabelText(/email/i);
    const button = screen.getByRole("button");

    user.type(name, "Jay");
    user.type(mobile, "9582947883");
    user.type(email, "jay@gmail.com");

    user.click(button);

    // screen.debug()

    // Use waitFor to wait for the asynchronous operation to complete
    await waitFor(() => {
      expect(mock).toHaveBeenCalled();
      // eslint-disable-next-line
      expect(name).toHaveValue("");
      // eslint-disable-next-line
      expect(mobile).toHaveValue("");
      // eslint-disable-next-line
      expect(email).toHaveValue("");
    });
  });

  // jest.useFakeTimers();
  // test("Input values should empty after submitted the form", async () => {
  //   const mock = jest.fn();
  //   render(<UserForm saveUsers={mock} />);
  //   const name = screen.getByRole("textbox", {
  //     name: /name/i,
  //   });

  //   const mobile = screen.getByRole("textbox", {
  //     name: /mobile/i,
  //   });

  //   const email = screen.getByRole("textbox", {
  //     name: /email/i,
  //   });

  //   const button = screen.getByRole("button");

  //   user.click(name);
  //   user.keyboard("Jay");

  //   user.click(mobile);
  //   user.keyboard("9582947883");

  //   user.click(email);
  //   user.keyboard("jay@gmail.com");

  //   // screen.debug()
  //   user.click(button);

  //   expect(mock).toHaveBeenCalled();
  //   await act(async () => {
  //     jest.advanceTimersByTime(2000);
  //     expect(name).toHaveValue("");
  //     // await waitFor(() => {
  //     //   expect(name).toHaveValue("");
  //     //   // expect(mobile).toHaveValue("");
  //     //   // expect(email).toHaveValue("");
  //     // });
  //   });
  // });
});
