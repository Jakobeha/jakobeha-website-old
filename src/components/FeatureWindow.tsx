import * as React from 'react';
import '../styles/FeatureWindow.css';
import { IFeature } from '../types';
import * as Util from '../util/Array';
import * as FancyText from '../util/FancyText';
import FeatureTab from './FeatureTab';

export interface IProps {
  features: IFeature[];
}

export default function FeatureWindow({ features }: IProps): JSX.Element {
  if (features.length === 0) {
    return (
      <div className="FeatureWindow FeatureWindow-empty">
        <FeatureTab feature={null} isClosable={false} isSticky={true} />,
        <p className="FeatureWinow-empty-message">
          Select a language or paradigm to learn more about it, then select more to compare them.
        </p>
      </div>
    );
  } else {
    const featureWidth = 100 / features.length;
    return (
      <div className="FeatureWindow">
        {Util.transpose(
          features.map(feature => [
            // tslint:disable:jsx-key
            <FeatureTab feature={feature} isClosable={true} isSticky={true} />,
            <h3 className="FeatureWindow-header">Description</h3>,
            <p className="FeatureWindow-text">
              {FancyText.from(feature.summary)}
            </p>,
            <h3 className="FeatureWindow-header">Key Features</h3>,
            <ul className="FeatureWindow-text">
              {feature.keyFeatures.map((keyFeature, idx) => (
                <li key={`feature-item-${idx}`}>
                  {FancyText.from(keyFeature)}
                </li>
              ))}
            </ul>,
            <h3 className="FeatureWindow-header">Benefits</h3>,
            <ul className="FeatureWindow-text">
              {feature.benefits.map((benefit, idx) => (
                <li key={`feature-item-${idx}`}>{FancyText.from(benefit)}</li>
              ))}
            </ul>,
            <h3 className="FeatureWindow-header">Drawbacks</h3>,
            <ul className="FeatureWindow-text">
              {feature.drawbacks.map((drawback, idx) => (
                <li key={`feature-item-${idx}`}>{FancyText.from(drawback)}</li>
              ))}
            </ul>,
            <h3 className="FeatureWindow-header">Use Cases</h3>,
            <ul className="FeatureWindow-text">
              {feature.useCases.map((useCase, idx) => (
                <li key={`feature-item-${idx}`}>{FancyText.from(useCase)}</li>
              ))}
            </ul>,
            <h3 className="FeatureWindow-header">Examples</h3>,
            <ul className="FeatureWindow-text">
              {feature.examples.map((example, idx) => (
                <li key={`feature-item-${idx}`}>
                  <pre>{example}</pre>
                </li>
              ))}
            </ul>,
            <h3 className="FeatureWindow-header">Background</h3>,
            <p className="FeatureWindow-text">
              {FancyText.from(feature.background)}
            </p>
            // tslint:enable:jsx-key
          ])
        ).map((items, idx) => (
          <div className="FeatureWindow-section" key={`section-${idx}`}>
            {items.map((item, idx2) => {
              return (
                <div
                  className="FeatureWindow-section-item"
                  key={`item-${idx2}`}
                  style={{ width: `${featureWidth}%` }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        ))}
        <div
          className="FeatureWindow-section-background"
          key="section-backgound"
        >
          {features.map((_, idx) => (
            <div
              className="FeatureWindow-section-item-background"
              key={`item-background-${idx}`}
              style={{
                left: `${featureWidth * idx}%`,
                width: `${featureWidth}%`
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}
