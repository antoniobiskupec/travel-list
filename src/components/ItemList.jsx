import Item from "./Item";

export default function ItemList({ items, onDeleteItem, onToggleItems }) {
  return (
    <div className="list">
      <li>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </li>
    </div>
  );
}
