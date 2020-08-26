import { useEffect, useState } from "react";
import { interval } from "rxjs";
import { scan } from "rxjs/operators";
import { generateRandomNumbers } from "./generateRandomNumbers";

export const useObservable = (initialState) => {
  const [value, setValue] = useState(initialState);
  const [limit, setLimit] = useState(1000);

  useEffect(() => {
    let time = generateRandomNumbers(100, limit);
    const observable$ = interval(time).pipe(
      scan(() => {
        setTimeout(() => {
          setLimit((l) => (l === 1000 ? 1001 : 1000));
        }, 1000);
        return generateRandomNumbers(20, 30);
      })
    );

    const subject = observable$.subscribe((value) => {
      const val = value > 0 && time < 1001 ? value.toFixed(1) : "N/A";
      setValue(val);
    });

    return () => {
      subject.unsubscribe();
    };
  }, [limit]);

  return [value];
};
