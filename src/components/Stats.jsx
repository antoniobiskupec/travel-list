export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list!</em>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked = numItems
    ? Math.round((numPacked / numItems) * 100)
    : 0;

  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You packed everything!"
          : ` You have 
       ${numItems} items on your list, you packed ${numPacked} items
        ${percentagePacked > 0 ? `(${percentagePacked}%)` : ""}
        `}
      </em>
    </footer>
  );
}
