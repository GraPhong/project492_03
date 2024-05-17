import React from 'react';

const TimeTable = () => {
  const schedule = [
    {
      day: 'MON',
      time: '10:00',
      subject: '5500252 ACTIV SKILL ENG',
      location: 'EDU3 712 | Sec 1',
      color: 'bg-red-600 text-white',
    },
    {
      day: 'THU',
      time: '14:00',
      subject: '2303518 ACAROLOGY',
      location: 'BIO1 AR | Sec 1',
      color: 'bg-blue-100 text-blue-800',
    },
  ];

  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
  const times = ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];

  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900">จัดตารางเรียน</h1>
        <div>
          <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded-md mr-2">ตารางเรียน</button>
          <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded-md">ตารางสอบ</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">Day/Time</th>
              {times.map((time) => (
                <th key={time} className="border px-4 py-2 text-center">{time}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day) => (
              <tr key={day}>
                <td className="border px-4 py-2 text-left">{day}</td>
                {times.map((time) => {
                  const classInfo = schedule.find((item) => item.day === day && item.time === time);
                  return (
                    <td key={time} className="border px-4 py-2 text-center">
                      {classInfo ? (
                        <div className={`${classInfo.color} p-2 rounded-md`}>
                          <div>{classInfo.subject}</div>
                          <div className="text-xs">{classInfo.location}</div>
                        </div>
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeTable;
