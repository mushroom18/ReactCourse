export function Items({ items, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={items.packed}
        onChange={() => onToggleItem(items.id)}
      />
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
        <button onClick={() => onDeleteItem(items.id)}>❌</button>
      </span>
    </li>
  );
}
