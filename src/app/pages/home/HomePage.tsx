import { appName, appNameMeaning } from 'app/definitions';

import { TechStack } from 'app/components/TechStack';

export const HomePage = () => (
  <div className="home flex flex-col space-y-5 py-20 text-center md:h-full md:justify-center lg:py-0">
    <h1 className="mb-5 border-b-2 pb-5 text-5xl">
      <b>
        <i>{appName}</i>
      </b>{' '}
      - {appNameMeaning}
    </h1>

    <p>Tech Stack</p>

    <div className="flex justify-center space-x-5">
      <TechStack />
    </div>

    <p>Click on the logos to learn more</p>
  </div>
);

export default HomePage;
