import React from 'react';
import { teamData } from '../../data/teamData';

export function TeamGrid() {
  const { header, members } = teamData;

  return (
    <section className="band">
      <div className="shell">
        <div className="band__head">
          <span className="eyebrow">{header.eyebrow}</span>
          <h2>{header.title}</h2>
        </div>
        <div className="grid grid--3">
          {members.map((member, idx) => (
            <article className="card" key={idx}>
              <span className="card__idx">{member.role}</span>
              <h3>{member.name}</h3>
              <p>{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
