export const charactersPerPage = 10;
export function calculateTotalPages(total: number, charactersPerPage: number) {
  return Math.ceil(total / charactersPerPage);
}
