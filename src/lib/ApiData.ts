import WorkoutItemsType from "@/Type/WorkoutItems";

export const getWorkoutItems = async (): Promise<WorkoutItemsType[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  if (!res.ok) {
    throw new Error("Failed to fetch gym items");
  }
  const data = await res.json();
  return data;
};