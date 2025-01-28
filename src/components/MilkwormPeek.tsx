import "./MilkwormPeek.css";

export default function MilkwormPeek() {
  return (
    <div className="milkworm-peek">
      <img
        src="/matthew-milkworm.png"
        alt="Matthew Milkworm"
        className="peek matthew"
      />
      <img src="/nick-milkworm.png" alt="Nick Milkworm" className="peek nick" />
    </div>
  );
}
