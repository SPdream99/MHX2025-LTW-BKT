import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
  // props.items là một mảng các object chi tiêu

  if (props.items.length === 0) {
    return <h2>Không tìm thấy khoản chi nào.</h2>;
  }

  return (
    <ul>
      {props.items.map((expense) => (
    		<ExpenseItem
      			key={expense.id}
      			id={expense.id}
      			name={expense.name}
      			amount={expense.amount}
      			date={expense.date}
			onDelete={props.onDeleteExpense}
    		/>
  	))}
    </ul>
  );
};

export default ExpenseList;