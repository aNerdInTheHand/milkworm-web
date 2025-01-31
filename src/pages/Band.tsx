import "./Band.css";

export default function Band() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="band-page">
      <h1 className="band-title">THE MASTERMINDS</h1>

      <div className="members">
        <div className="member">
          <div
            className="member-image nick"
            style={{ backgroundImage: `url(${base}nick-milkworm.png)` }}
          ></div>
          <h2>NICK</h2>
          <p className="role">Guitar / Vocals</p>
          <p className="bio">
            The dairy prophet himself. Nick's guitar solos are known to curdle
            milk from up to 50 miles away. Some say he was raised by a colony of
            particularly musical cheese mites.
          </p>
        </div>

        <div className="member">
          <div
            className="member-image matthew"
            style={{ backgroundImage: `url(${base}matthew-milkworm.png)` }}
          ></div>
          <h2>MATTHEW</h2>
          <p className="role">Bass / Synth</p>
          <p className="bio">
            The low-end theorist. Matthew's bass lines are so deep, they've been
            known to resonate with subterranean yogurt cultures. He dreams in
            fermented frequencies.
          </p>
        </div>
      </div>
    </div>
  );
}
