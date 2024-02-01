import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('returns current year', () => {
    expect(getFullYear()).toBe(2024);
});

test('correct footer copy', () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashbord");
});

test('returns latest notofication', () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD")
});