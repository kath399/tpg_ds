import React from 'react';

import { Header } from './Header';
import './page.css';

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className="storybook-page">
        <h2>Pages in Storybook</h2>
        <p>
          We recommend building UIs with a{' '}
          
          process starting with atomic components and ending with pages.
        </p>
        <p>
          Render pages with mock data. This makes it easy to build and review page states without
          needing to navigate to them in your app. Here are some handy patterns for managing page
          data in Storybook:
        </p>
        <ul>
          <li>
            Use a higher-level connected component. Storybook helps you compose such data from the
            "args" of child component stories
          </li>
          <li>
            Assemble data in the page component from your services. You can mock these services out
            using Storybook.
          </li>
        </ul>

      </section>
    </article>
  );
};
