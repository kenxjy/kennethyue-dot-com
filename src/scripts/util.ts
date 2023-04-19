import { CollectionEntry, getCollection } from "astro:content";

export type WorkCollectionEntry = CollectionEntry<"work">;
export type WorkCollectionFn = (a: WorkCollectionEntry, b: WorkCollectionEntry) => number;

function defaultSort (a: WorkCollectionEntry, b: WorkCollectionEntry) {
  if (!a.data.endDate && !b.data.endDate) {
    return b.data.startDate.valueOf() - a.data.startDate.valueOf();
  }

  const aEndDateValue = a.data.endDate?.valueOf() ?? Number.MAX_VALUE;
  const bEndDateValue = b.data.endDate?.valueOf() ?? Number.MAX_VALUE;
  return bEndDateValue - aEndDateValue;
}

export async function getWorkCollection(compareFn: WorkCollectionFn = defaultSort) {
  return (await getCollection('work')).sort(compareFn)
}

