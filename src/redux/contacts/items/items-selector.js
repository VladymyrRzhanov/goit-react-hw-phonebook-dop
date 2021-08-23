import { getFilter } from "../filter/filter-selector";

export const getItems = state => state.contacts.items;

export const getFilterName = state => {
  const items = getItems(state);
  const filter = getFilter(state);
  const normalizedContact = filter.toLowerCase();
  return items.filter(item =>
    item.name.toLowerCase().includes(normalizedContact),
  );
};