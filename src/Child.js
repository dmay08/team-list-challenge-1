const Child = ({ employee }) => {
  return (
    <ul>
      <li>
        <span>{`${employee.name} `}</span>
        <span>{`(${employee.level}) `}</span>
        <span>
          {employee.employees.map((emp) => (
            <Child employee={emp} />
          ))}
        </span>
      </li>
    </ul>
  );
};

export default Child;
