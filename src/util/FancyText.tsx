import * as HighlightJs from 'highlight.js';
import 'highlight.js/styles/default.css';
import Interweave from "interweave";
import * as MarkdownIt from 'markdown-it';
import * as React from 'react';

interface IProps {
  content: string,
  inline: boolean
}

const md = new MarkdownIt({
  highlight: (str, lang) => {
    if (lang && HighlightJs.getLanguage(lang)) {
      return HighlightJs.highlight(lang, str).value;
    } else {
      return "";
    }
  }
});

export default function FancyText({ content, inline }: IProps): JSX.Element {
  return <Interweave content={inline ? md.renderInline(content) : md.render(content)} />;
}
