const TaskFilter = ({ filter, setFilter }) => {
    return (
      <div className="text-2xl ml-4 ">
        Filter:
        <select className="text-2xl ml-4 " value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="pending">Pending</option>
        </select>
      </div>
    );
  };

  export default TaskFilter