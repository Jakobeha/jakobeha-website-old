import Bio from '!raw-loader!src/content/bio.md';
import Contact from "!raw-loader!src/content/contact.md";
import Experience from "!raw-loader!src/content/experience.md";
import RIR from '!raw-loader!src/content/rir.md';
import Unit1 from "!raw-loader!src/content/unit1.md";
import Unit3 from '!raw-loader!src/content/unit3.md';
import Unit4 from '!raw-loader!src/content/unit4.md';
import * as React from 'react';
import Entry from 'src/components/Entry';
import Section, { SectionStyle } from 'src/components/Section';
import Background from "src/resources/background.png";
import ResumeLink from 'src/resources/resume.pdf';
import Unit1Link from "src/resources/unit1.pdf";
import Unit3Link from 'src/resources/unit3.pdf';
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
            date="January - Now"
          >
            <FancyText content={RIR} inline={false} />
          </Entry>
          <Entry
            title="Programming Language Comparison"
            link="https://feature-compare-qe06piape.now.sh/"
            date="March - April"
          >
            <FancyText content={Unit4} inline={false} />
          </Entry>
          <Entry
            title="Unit 3 Proposal"
            link={Unit3Link}
            date="March"
          >
            <FancyText content={Unit3} inline={false} />
          </Entry>
          <Entry
            title='"Clean Code" - How to Write it?'
            link={Unit1Link}
            date="January"
          >
            <FancyText content={Unit1} inline={false} />
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
