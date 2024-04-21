export default function StoreItem(prop) {
  return (
    <div className="store-item">
      <img src={prop.src} style={{ height: "60%" }} />
      <button>{prop.price} points</button>
    </div>
  );
}
