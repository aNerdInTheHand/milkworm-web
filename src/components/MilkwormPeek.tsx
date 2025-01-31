import "./MilkwormPeek.css";

export default function MilkwormPeek() {
  // Get the base URL from Vite's env
  const base = import.meta.env.BASE_URL;

  return (
    <div className="milkworm-peek">
      <img
        src={`${base}matthew-milkworm.png`}
        alt="Matthew Milkworm"
        className="peek matthew"
      />
      <img
        src={`${base}nick-milkworm.png`}
        alt="Nick Milkworm"
        className="peek nick"
      />
    </div>
  );
}
