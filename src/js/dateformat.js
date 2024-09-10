import { addDays } from "date-fns";

export function dateFormat(){
    const date = new Date(2024, 8, 10);
    const newDate = addDays(date, 5);

    console.log(newDate);
}