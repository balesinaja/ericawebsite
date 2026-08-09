import React, { useState } from 'react';

interface CalendarPickerProps {
  selectedDate: string; // YYYY-MM-DD
  selectedTimeSlot: string;
  onSelectDate: (dateStr: string) => void;
  onSelectTimeSlot: (slot: string) => void;
  timeSlots?: string[];
}

export const CalendarPicker: React.FC<CalendarPickerProps> = ({
  selectedDate,
  selectedTimeSlot,
  onSelectDate,
  onSelectTimeSlot,
  timeSlots = ['09:00 WIB', '10:30 WIB', '13:30 WIB', '15:00 WIB', '16:30 WIB'],
}) => {
  // Parse initial selected date or default to today
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const initialDateParts = selectedDate ? selectedDate.split('-').map(Number) : [today.getFullYear(), today.getMonth() + 1, today.getDate()];
  const [currentYear, setCurrentYear] = useState<number>(initialDateParts[0] || today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>((initialDateParts[1] ? initialDateParts[1] - 1 : today.getMonth()));

  const monthNamesId = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const dayNamesId = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

  // Calculate calendar grid days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 0 = Sunday
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const formatDateStr = (year: number, month: number, day: number) => {
    const m = String(month + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return `${year}-${m}-${d}`;
  };

  const isToday = (day: number) => {
    return (
      today.getFullYear() === currentYear &&
      today.getMonth() === currentMonth &&
      today.getDate() === day
    );
  };

  const isPast = (day: number) => {
    const checkDate = new Date(currentYear, currentMonth, day);
    checkDate.setHours(0, 0, 0, 0);
    return checkDate < today;
  };

  const calendarDays = [];
  // Empty slots before 1st of month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  // Days of month
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(d);
  }

  return (
    <div className="bg-[#f8f3ea] p-5 md:p-6 rounded-2xl border border-[#c3c7c8]/40 shadow-sm space-y-6">
      {/* Calendar Header: Month/Year navigation */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4b644e] text-xl">calendar_month</span>
            <h4 className="font-serif text-lg font-semibold text-[#181f21]">
              {monthNamesId[currentMonth]} {currentYear}
            </h4>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="p-1.5 rounded-lg hover:bg-[#e8d3c0] text-[#181f21] transition-colors cursor-pointer"
              title="Bulan Sebelumnya"
            >
              <span className="material-symbols-outlined text-base">chevron_left</span>
            </button>
            <button
              type="button"
              onClick={handleNextMonth}
              className="p-1.5 rounded-lg hover:bg-[#e8d3c0] text-[#181f21] transition-colors cursor-pointer"
              title="Bulan Berikutnya"
            >
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Day Name Headers */}
        <div className="grid grid-cols-7 text-center text-[11px] font-semibold text-[#747879] uppercase tracking-wider mb-2">
          {dayNamesId.map((day, idx) => (
            <div key={idx} className={idx === 0 ? 'text-[#a14343]' : ''}>
              {day}
            </div>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-1 text-center">
          {calendarDays.map((day, idx) => {
            if (day === null) {
              return <div key={`empty-${idx}`} className="h-9" />;
            }

            const dateStr = formatDateStr(currentYear, currentMonth, day);
            const isSelected = selectedDate === dateStr;
            const past = isPast(day);
            const todayFlag = isToday(day);

            return (
              <button
                key={`day-${day}`}
                type="button"
                disabled={past}
                onClick={() => onSelectDate(dateStr)}
                className={`h-9 w-full rounded-xl text-xs font-semibold flex items-center justify-center transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-[#181f21] text-[#fef9ef] shadow-md scale-105 z-10'
                    : todayFlag
                    ? 'border-2 border-[#4b644e] text-[#4b644e] font-bold bg-[#4b644e]/10'
                    : past
                    ? 'text-[#c3c7c8] cursor-not-allowed line-through'
                    : 'text-[#181f21] hover:bg-[#e8d3c0]/70'
                }`}
              >
                {day}
                {isSelected && (
                  <span className="w-1 h-1 rounded-full bg-[#cdeace] absolute bottom-1" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slot Picker */}
      <div className="pt-4 border-t border-[#c3c7c8]/30">
        <label className="text-xs font-semibold text-[#181f21] uppercase tracking-wider block mb-3 flex items-center gap-1.5">
          <span className="material-symbols-outlined text-base text-[#4b644e]">schedule</span>
          <span>Pilih Sesi Jam Konsultasi ({selectedDate || 'Belum Dipilih'})</span>
        </label>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {timeSlots.map((slot) => {
            const isSlotSelected = selectedTimeSlot === slot;
            return (
              <button
                key={slot}
                type="button"
                onClick={() => onSelectTimeSlot(slot)}
                className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  isSlotSelected
                    ? 'bg-[#4b644e] text-white border-[#4b644e] shadow-sm font-semibold'
                    : 'bg-[#fef9ef] border-[#c3c7c8]/50 text-[#181f21] hover:bg-[#e8d3c0]/50'
                }`}
              >
                <span className="material-symbols-outlined text-sm">
                  {isSlotSelected ? 'check_circle' : 'schedule'}
                </span>
                <span>{slot}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
