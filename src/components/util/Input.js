const Input = ({ type, name, label, onChange, onBlur, ...props }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} {...props} onChange={onChange} onBlur={onBlur} />
    </>
  );
};

export default Input;
