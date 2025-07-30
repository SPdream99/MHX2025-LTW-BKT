const ExpenseItem = (props) => {
  // props = { name: string, amount: number, date: Date() }

  return (
    <li>
      <div>
        <h3>{props.date.toLocaleDateString('vi-VN')}</h3>
      </div>
      <div>
        <h2>{props.name}</h2>
        <div>{props.amount} VND</div>
      </div>
    </li>
  );
};

export default ExpenseItem;