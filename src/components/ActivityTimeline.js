import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";

export default function ActivityTimeline() {
  const abc = [
    { id: 1, time: "01/01/22 9:30 am", activity: "Eat" },
    { id: 2, time: "10:34 am", activity: "Sleep" },
    { id: 3, time: "11:23 am", activity: "Rave" },
  ];

  const TimelineRow = abc.map((event) => (
    <TimelineItem key={event.id}>
      <TimelineOppositeContent color="text.secondary">
        {event.time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant="outlined" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>{event.activity}</TimelineContent>
    </TimelineItem>
  ));

  return <Timeline>{TimelineRow}</Timeline>;
}
