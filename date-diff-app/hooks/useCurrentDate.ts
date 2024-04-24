import axios from "axios";
import { useEffect, useState } from "react";

export function useCurrentDate() {
  const [currentDate, setCurrentDate] = useState<Date>()

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/current-date`)
      .then(({ data }) => {
        const currentDateRes = new Date(data['currentDate'])
        console.log("current date: ", currentDateRes)
        setCurrentDate(currentDateRes)
      })
      .catch(err => console.log("err: ", err))
  }, [])

  return currentDate
}