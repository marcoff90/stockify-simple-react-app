import React from "react";
import {DateRange, Range} from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type Props = {
  range: Range[],
  setRange: (selection: Range[]) => void
}

const RangeDatePicker: React.FC<Props> = ({range, setRange}) => {
  return (
        <DateRange
            editableDateInputs={true}
            onChange={item => setRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={range}
            weekStartsOn={1}
            dateDisplayFormat={'dd-MM-yyyy'}
        />
  );
};

export default RangeDatePicker;
