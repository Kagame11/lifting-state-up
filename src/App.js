import {useState} from 'react';

function Panel({title, children}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ?(
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>Show</button>
      )}
    </section>
  );
}

export default function Accordion() {
  return (
    <>
    <h2>Almaty, Kazakhstan</h2>
    <Panel title="About">
      with the popupulation of 2 million, almatyy is khazakistan's largest city. from 1929 to 1997, it was its capital city.
    </Panel>
    <Panel title="Ethymology">
      The name comes from <span lang="kk-kz">алма</span>, the kazakh word for "apple" and is often translated as "full of apples ". In fact, the region surroundin almaty is thought to be the ancental home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
    </Panel>
    </>
  );
}
