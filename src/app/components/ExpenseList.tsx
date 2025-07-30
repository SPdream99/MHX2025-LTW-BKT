import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="text-black">Không tìm thấy khoản chi nào. Hãy thêm ở trên.</h2>;
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
			onStartEdit={props.onStartEdit}
    		/>
  	))}
    </ul>
  );
};

export default ExpenseList;