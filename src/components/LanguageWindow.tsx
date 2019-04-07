import * as React from 'react';
import '../styles/LanguageWindow.css';
import { AttrString, ILanguage } from '../types';
import * as Util from '../util/Array';
import FancyText from '../util/FancyText';
import LanguageTab from './LanguageTab';

export interface IProps {
  languages: ILanguage[];
}

export default function LanguageWindow({ languages }: IProps): JSX.Element {
  if (languages.length === 0) {
    return (
      <div className="LanguageWindow LanguageWindow-empty" id="window">
        <LanguageTab language={null} isClosable={false} isSticky={true} />
        <div className="LanguageWindow-empty-message">
          <p>Select a language to learn more about it, then select more to compare them.</p>
          <p>Select a header (e.g. "Scripting") to learn general information about languages in that category.</p>
        </div>
      </div>
    );
  } else {
    const languageWidth = 100 / languages.length;
    return (
      <div className="LanguageWindow" id="window">
        {Util.transpose(
          languages.map(language => {
            const sections = [
              { name: "Summary", text: language.summary },
              { name: "Key Features", bullets: language.keyFeatures },
              { name: "Benefits", bullets: language.benefits },
              { name: "Drawbacks", bullets: language.drawbacks },
              { name: "Use Cases", bullets: language.useCases },
              { name: "History", text: language.history },
              { name: "Example", text: language.example },
              { name: "Tutorials", links: language.tutorials }
            ];
            return [
              <LanguageTab
                key={`${language}-tab`}
                language={language}
                isClosable={true}
                isSticky={true}
              />
            ].concat(sections.map(sectionHtml));
        })).map((items, idx) => (
          <div className="LanguageWindow-section" key={`section-${idx}`}>
            {items.map((item, idx2) => {
              return (
                <div
                  className="LanguageWindow-section-item"
                  key={`item-${idx2}`}
                  style={{ width: `${languageWidth}%` }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        ))}
        <div
          className="LanguageWindow-section-background"
          key="section-backgound"
        >
          {languages.map((_, idx) => (
            <div
              className="LanguageWindow-section-item-background"
              key={`item-background-${idx}`}
              style={{
                left: `${languageWidth * idx}%`,
                width: `${languageWidth}%`
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

interface ITextSection {
  name: string,
  text: AttrString
}

interface IBulletSection {
  name: string,
  bullets: AttrString[]
}

interface ILinksSection {
  name: string,
  links: string[]
}

type ISection = ITextSection | IBulletSection | ILinksSection;

function sectionHtml(section: ISection): JSX.Element {
  const header = <h3 className="LanguageWindow-header">{section.name}</h3>;
  // tslint:disable:no-string-literal
  if (section["text"] !== undefined) {
    return (
      <div>
        {header}
        <div className="LanguageWindow-text">
          <FancyText content={(section as ITextSection).text} inline={false} />
        </div>
      </div>
    );
  } else if (section["bullets"] !== undefined) {
    return (
      <div>
        {header}
        <ul className="LanguageWindow-text">
          {(section as IBulletSection).bullets.map((bullet, idx) => (
            <li key={`language-item-${idx}`}>
              <FancyText content={bullet} inline={true} />
            </li>
          ))}
        </ul>
      </div>
    );
  } else if (section["links"] !== undefined) {
    return (
      <div>
        {header}
        <ul className="LanguageWindow-text">
          {(section as ILinksSection).links.map((link, idx) => (
            <li key={`language-item-${idx}`}>
              <a href={link}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div />
  }
  // tslint:enable:no-string-literal
}
