// Scheduler.js
import React from 'react';
import { Scheduler, ViewTypes } from 'react-big-scheduler';
import 'react-big-scheduler/lib/css/style.css';

const SchedulerTimelineView = () => {
  const resources = [
    {
      id: 'r1',
      name: 'Resource 1',
    },
    {
      id: 'r2',
      name: 'Resource 2',
    },
    // Add more resources as needed
  ];

  const events = [
    {
      id: 1,
      start: '2022-01-01 09:00',
      end: '2022-01-01 12:00',
      resourceId: 'r1',
      title: 'Event 1',
    },
    {
      id: 2,
      start: '2022-01-01 13:00',
      end: '2022-01-01 16:00',
      resourceId: 'r2',
      title: 'Event 2',
    },
    // Add more events as needed
  ];

  return (
    <div style={{ height: '500px' }}>
      <Scheduler
        schedulerData={{
          viewType: ViewTypes.Month,
          currentDate: '2022-01-01',
          resources,
          events,
        }}
        prevClick={() => console.log('prevClick')}
        nextClick={() => console.log('nextClick')}
        onSelectDate={() => console.log('onSelectDate')}
        onViewChange={() => console.log('onViewChange')}
      />
    </div>
  );
};

export default SchedulerTimelineView;
