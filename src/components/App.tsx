import Bio from '!raw-loader!src/content/bio.md';
import Contact from "!raw-loader!src/content/contact.md";
import Experience from "!raw-loader!src/content/experience.md";
import RIR from '!raw-loader!src/content/rir.md';
import TreeScript from '!raw-loader!src/content/treeScript.md';
import * as React from 'react';
import Entry from 'src/components/Entry';
import Section, { SectionStyle } from 'src/components/Section';
import Background from "src/resources/background.png";
import ResumeLink from 'src/resources/resume.pdf';
import 'src/styles/App.css';
import FancyText from 'src/util/FancyText';


export default function App({}: {}): JSX.Element {
  return (
    <div className="App" style={{ backgroundImage: `url(${Background})` }}>
      <h1 className="App-name">Jakob Hain</h1>
      <div className="App-content">
        <Section title="Projects" style={SectionStyle.Roulette}>
          <Entry
            title="RIR"
            link="https://github.com/reactorlabs/rir"
            date="January 2019 - Now"
          >
            <FancyText content={RIR} inline={false} />
          </Entry>
          <Entry
            title="TreeScript"
            link="https://github.com/Jakobeha/treescript"
            date="December 2018 - Now"
          >
            <FancyText content={TreeScript} inline={false} />
          </Entry>
        </Section>
        <Section title="About" style={SectionStyle.Row}>
          <Entry title="Bio">
            <FancyText content={Bio} inline={false} />
          </Entry>
          <Entry title="Experience Summary" resume={ResumeLink}>
            <FancyText content={Experience} inline={false} />
          </Entry>
          <Entry title="Contact" email="jakobeha@gmail.com">
            <FancyText content={Contact} inline={false} />
          </Entry>
        </Section>
      </div>
      <a className="App-bg-credit" href="https://www.pexels.com/photo/branches-daylight-environment-forest-230978/"><i>Background by Terje Solle</i></a>
    </div>
  );
}
