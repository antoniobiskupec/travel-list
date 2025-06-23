import Item from "./Item";
import { useState } from "react";

export default function ItemList({ items, onDeleteItem, onToggleItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = [...items];

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description") {
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems.sort((a, b) => Number(b.packed) - Number(a.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}
