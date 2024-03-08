import {calculateRelativeDate} from './relative-date';
import { expect } from '@open-wc/testing';

describe('Calculate Relative Date', () => {
  it('Today', () => {
    const input  = new Date(2024,1,1);
    const expected = 'This Year';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });

  it('Today', () => {
    const today = new Date();
    const expected = 'Today';
    const actual = calculateRelativeDate(today);
    expect(actual).to.equal(expected);
  });

  it('Yesterday', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const expected = 'Yesterday';
    const actual = calculateRelativeDate(yesterday);
    expect(actual).to.equal(expected);
  });

  it('This week', () => {
    const thisWeek = new Date();
    thisWeek.setDate(thisWeek.getDate() - 3); // Within the current week
    const expected = 'This week';
    const actual = calculateRelativeDate(thisWeek);
    expect(actual).to.equal(expected);
  });

  it('Last week', () => {
    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - 10); // Within the last week
    const expected = 'Last week';
    const actual = calculateRelativeDate(lastWeek);
    expect(actual).to.equal(expected);
  });

  it('This month', () => {
    const thisMonth = new Date();
    thisMonth.setDate(15); // Set to middle of the month
    const expected = 'This month';
    const actual = calculateRelativeDate(thisMonth);
    expect(actual).to.equal(expected);
  });

  it('Last month', () => {
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1); // Set to previous month
    const expected = 'Last month';
    const actual = calculateRelativeDate(lastMonth);
    expect(actual).to.equal(expected);
  });

  it('This year', () => {
    const thisYear = new Date();
    const expected = 'This year';
    const actual = calculateRelativeDate(thisYear);
    expect(actual).to.equal(expected);
  });

  it('Last year', () => {
    const lastYear = new Date();
    lastYear.setFullYear(lastYear.getFullYear() - 1); // Set to previous year
    const expected = 'Last year';
    const actual = calculateRelativeDate(lastYear);
    expect(actual).to.equal(expected);
  });

  it('Long time ago', () => {
    const longTimeAgo = new Date(2000, 0, 1); // Set to a date in the past
    const expected = 'Long time ago';
    const actual = calculateRelativeDate(longTimeAgo);
    expect(actual).to.equal(expected);
  });
});



