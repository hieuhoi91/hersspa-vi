export const formatNumber = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const toTitleCase = (input: string): string => {
  if (!input) return '';
  // Normalize spaces and lowercase all
  const normalized = input.trim().replace(/\s+/g, ' ').toLowerCase();

  // Words that should stay uppercase (e.g., HN, TP, HCM) or special forms
  const keepUpper = new Set([
    'hn',
    'tp',
    'hcm',
    'q1',
    'q.10',
    'q10',
    'q.7',
    'q7',
  ]);

  return (
    normalized
      .split(' ')
      .map((word) => {
        if (keepUpper.has(word)) return word.toUpperCase();
        // Keep all-caps brand prefix 'Her', 'S', 'Spa' formatting as requested
        if (word === 'her') return 'Her';
        if (word === 's') return 'S';
        if (word === 'spa') return 'Spa';
        // Normal title case for others
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ')
      // Ensure canonical brand prefix
      .replace(/^Her S Spa/i, 'Her S Spa')
  );
};
