import { formatDistanceToNow, parseISO } from "date-fns";
import React, { useState } from "react";

const TimeAgo = ({ date }) => {
  const [Item, setItem] = useState("");
  if (date) {
    const parsed = parseISO(date);
    const timeX = formatDistanceToNow(parsed);
    setItem(timeX);
  }

  return <div>{Item}</div>;
};

export default TimeAgo;
