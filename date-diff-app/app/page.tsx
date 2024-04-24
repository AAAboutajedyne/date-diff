'use client'
import { useCurrentDate } from "@/hooks/useCurrentDate";
import DateDiff from "date-diff";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  const currentDate = useCurrentDate()
  const [date1, setDate1] = useState<Date>()
  const [date2, setDate2] = useState<Date>(() => new Date())
  // const [diff, setDiff] = useState();
  
  useEffect(() => {
    setDate1(currentDate)
  }, [currentDate])

  let daysDiff = 0
  if(date1 && date2) {
    console.log("DateDiff", new DateDiff(date1, date2))
    daysDiff = Math.floor(Math.abs(
      new DateDiff(date1, date2).days()
    ))
  }
  
  return (<>
    <h1 className="text-center text-xl mb-10">Date diff App</h1>
    <div className="flex justify-around">
      <div>
        <label className="mr-2">Date 1:</label>
        <DatePicker className="rounded-lg" showIcon 
          selected={date1} 
          onChange={date => setDate1(date)} />
      </div>
      <div>
        <label className="mr-2">Date 2:</label>
        <DatePicker className="rounded-lg" showIcon 
          selected={date2} 
          onChange={date => setDate2(date)} />
      </div>
    </div>
    <div className="flex justify-center mt-10">
      <p className="text-xl">days diff: {daysDiff}</p>
    </div>
    
  </>);
}
