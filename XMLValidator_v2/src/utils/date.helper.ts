export function parseExactDate(raw: string | null | undefined): Date | null {
  if (!raw) return null;
  const cleaned = raw.trim();
  if (cleaned.length !== 8 && cleaned.length !== 12 && cleaned.length !== 14) {
    return null;
  }

  const y = parseInt(cleaned.substring(0, 4), 10);
  const m = parseInt(cleaned.substring(4, 6), 10) - 1; // JS months are 0-11
  const d = parseInt(cleaned.substring(6, 8), 10);

  let hh = 0;
  let mm = 0;
  let ss = 0;

  if (cleaned.length >= 12) {
    hh = parseInt(cleaned.substring(8, 10), 10);
    mm = parseInt(cleaned.substring(10, 12), 10);
  }
  if (cleaned.length === 14) {
    ss = parseInt(cleaned.substring(12, 14), 10);
  }

  // Validate values
  if (isNaN(y) || isNaN(m) || isNaN(d) || isNaN(hh) || isNaN(mm) || isNaN(ss)) {
    return null;
  }

  if (m < 0 || m > 11 || d < 1 || d > 31 || hh < 0 || hh > 23 || mm < 0 || mm > 59 || ss < 0 || ss > 59) {
    return null;
  }

  const date = new Date(Date.UTC(y, m, d, hh, mm, ss));
  // Double check if date is valid and values match (avoids JS automatic date rolling like Nov 31 -> Dec 1)
  if (
    date.getUTCFullYear() !== y ||
    date.getUTCMonth() !== m ||
    date.getUTCDate() !== d ||
    date.getUTCHours() !== hh ||
    date.getUTCMinutes() !== mm ||
    date.getUTCSeconds() !== ss
  ) {
    return null;
  }

  // C# dates in this context are evaluated as Local, but we keep UTC internally and can compare values.
  // Actually, to match C# logic (e.g. comparing year difference, date components), using a standard JS Date object created with Date.UTC or local time works, but let's return a valid Date object.
  // Wait, let's create it in local time or UTC? C# is running locally so it parses raw strings in the local timezone or timezone-agnostic. Let's create it in local time:
  const localDate = new Date(y, m, d, hh, mm, ss);
  if (
    localDate.getFullYear() !== y ||
    localDate.getMonth() !== m ||
    localDate.getDate() !== d ||
    localDate.getHours() !== hh ||
    localDate.getMinutes() !== mm ||
    localDate.getSeconds() !== ss
  ) {
    return null;
  }
  return localDate;
}
