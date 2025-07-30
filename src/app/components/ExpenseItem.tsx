import styles from './ExpenseItem.module.css'; 

const ExpenseItem = (props) => {
  return (
    <li className="bg-white flex items-center justify-between p-4 rounded-xl shadow-md mb-3">
      
      <div className="flex items-center gap-4 min-w-0">
        <div className="bg-slate-100 border border-slate-200 text-slate-700 font-bold p-2 rounded-lg text-center w-24 flex-shrink-0">
          <div className="text-xs">{props.date.toLocaleString('vi-VN', { month: 'long' })}</div>
          <div className="text-2xl">{props.date.toLocaleString('vi-VN', { day: '2-digit' })}</div>
          <div className="text-xs">{props.date.getFullYear()}</div>
        </div>
        
         <div className={`${styles.marqueeContainer} text-lg font-semibold text-slate-800`}>
          <span className={styles.marqueeText}>
            {props.name}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 ml-5">
      <div className="bg-blue-100 text-blue-800 font-bold py-2 px-3 rounded-lg  line-clamp-2">
      	{new Intl.NumberFormat('vi-VN').format(props.amount)} VND
      </div>

	<button onClick={() => props.onStartEdit(props.id)} className="text-yellow-500 hover:text-yellow-800 font-semibold">
      	 Sửa
        </button>
    
      <button onClick={() => props.onDelete(props.id)} className="text-red-500 hover:text-red-800 font-semibold">
      	Xóa
      </button>
  </div>

    </li>
  );
};

export default ExpenseItem;