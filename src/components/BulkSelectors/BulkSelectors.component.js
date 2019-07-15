import React from 'react';
import {
  BulkSelectorsElement,
  DirectRightBrother,
  DirectChild,
  EveryChild,
  EveryRightBrother,
  FirstChild,
  LastOfType,
  Attribute,
  AttributeValue,
  AttributeValueMatch,
  AttributeValueStart,
  AttributeValueEnd, NotClass,
} from './BulkSelectors.style';

const BulkSelectors = () => {
  return (<BulkSelectorsElement>
    <h3>"div span {'{background-color: pink}'}" : </h3>
    <EveryChild>
      <span>
        SPAN: YES
        <span>SPAN: YES</span>
      </span>
      <span>SPAN: YES</span>
    </EveryChild>
    <h3>"div > span {'{background-color: pink}'}" : </h3>
    <DirectChild>
      <span>
        SPAN: YES
        <span>SPAN: NOPE</span>
      </span>
      <span>SPAN: YES</span>
    </DirectChild>
    <h3>".referrer-element + span {'{background-color: pink}'}" : </h3>
    <DirectRightBrother>
      <div>
        <span>SPAN: NOPE</span>
        <span className="referrer-element">"span.referrer-element"</span>
        <span>SPAN: YES</span>
        <span>SPAN: NOPE</span>
        <span>SPAN: NOPE</span>
      </div>
      <div>
        <span>SPAN: NOPE</span>
        <span className="referrer-element">"span.referrer-element"</span>
        <div style={{ display: 'inline-block' }}>DIV: NOPE</div>
        <span>SPAN: NOPE</span>
        <span>SPAN: NOPE</span>
      </div>
    </DirectRightBrother>
    <h3>".referrer-element ~ span {'{background-color: pink}'}" : </h3>
    <EveryRightBrother>
      <span>SPAN: NOPE</span>
      <span className="referrer-element">"span.referrer-element"</span>
      <div style={{ display: 'inline-block' }}>DIV: NOPE</div>
      <span>SPAN: YES</span>
      <span>SPAN: YES</span>
    </EveryRightBrother>
    <h3>"span:first-child {'{background-color: pink}'}" : </h3>
    <FirstChild>
      <div>
        <span>SPAN: YES</span>
        <span>SPAN: NOPE</span>
        <span>SPAN: NOPE</span>
      </div>
      <div>
        <div style={{ display: 'inline-block' }}>DIV: NOPE</div>
        <span>SPAN: NOPE</span>
        <span>SPAN: NOPE</span>
      </div>
    </FirstChild>
    <h3>"span:last-of-type {'{background-color: pink}'}" : </h3>
    <LastOfType>
      <div>
        <span>SPAN: NOPE</span>
        <span>SPAN: NOPE</span>
        <span>SPAN: YES</span>
      </div>
      <div>
        <span>SPAN: NOPE</span>
        <span>SPAN: YES</span>
        <div style={{ display: 'inline-block' }}>DIV: NOPE</div>
      </div>
    </LastOfType>
    <h3>"span[title] {'{background-color: pink}'}" : </h3>
    <Attribute>
      <span>SPAN: NOPE</span>
      <span title="title">{'<span title="title">'}: YES</span>
      <div title="title">{'<div title="title">'}: NOPE</div>
    </Attribute>
    <h3>"[title=title] {'{background-color: pink}'}" : </h3>
    <AttributeValue>
      <span>SPAN: NOPE</span>
      <span title="title2">{'<span title="title2">'}: NOPE</span>
      <div title="title">{'<div title="title">'}: YES</div>
    </AttributeValue>
    <h3>"[title^=start] {'{background-color: pink}'}" : </h3>
    <AttributeValueStart>
      <span>SPAN: NOPE</span>
      <span title="start2">{'<span title="start2">'}: YES</span>
      <div title="start">{'<div title="start">'}: YES</div>
      <div title="title-start">{'<div title="title">'}: NOPE</div>
    </AttributeValueStart>
    <h3>"[title$=end] {'{background-color: pink}'}" : </h3>
    <AttributeValueEnd>
      <span>SPAN: NOPE</span>
      <span title="title-end">{'<span title="title-end">'}: YES</span>
      <div title="end">{'<div title="end">'}: YES</div>
      <div title="end-title">{'<div title="title">'}: NOPE</div>
    </AttributeValueEnd>
    <h3>"[title*=match] {'{background-color: pink}'}" : </h3>
    <AttributeValueMatch>
      <span>SPAN: NOPE</span>
      <span title="a-match-a">{'<span title="a-match-a">'}: YES</span>
      <div title="title">{'<div title="title">'}: NOPE</div>
    </AttributeValueMatch>
    <h3>"span:not(.dont-select) {'{background-color: pink}'}" : </h3>
    <NotClass>
      <span>SPAN: YES</span>
      <span className="dont-select">{'<span className="dont-select">'}: NOPE</span>
    </NotClass>
  </BulkSelectorsElement>);
};

export default BulkSelectors;
