using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace On_Time_for_the_Exam
{
    class Program
    {
        static void Main(string[] args)
        {
            //Input  starting time and hour of arrival
            int startHour = int.Parse(Console.ReadLine());
            int startMinutes = int.Parse(Console.ReadLine());
            int arrivalHour = int.Parse(Console.ReadLine());
            int arrivalMinutes = int.Parse(Console.ReadLine());

            //Hours in minutes
            int startTime = startHour * 60 + startMinutes;
            int endTime = arrivalHour * 60 + arrivalMinutes;

            //Optimization
            int time = 0;
            int hour = 0;
            int minutes = 0;

            //Where are you going??
            if (endTime > startTime)
            {
                Console.WriteLine("Late");
                time = endTime - startTime;

                if (time < 60)
                {
                    Console.WriteLine("{0} minutes after the start", time);
                }
                else
                {
                    hour = time / 60;
                    minutes = time % 60;

                    if (minutes < 10)
                    {
                        Console.WriteLine("{0}:0{1} hours after the start", hour, minutes);
                    }
                    else
                    {
                        Console.WriteLine("{0}:{1} hours after the start", hour, minutes);
                    }
                }

            }

            else if (startTime == endTime || startTime - 30 <= endTime)
            {
                Console.WriteLine("On time");

                if (startTime - 30 <= endTime && startTime != endTime)
                {
                    minutes = startTime - endTime;
                    Console.WriteLine("{0} minutes before the start", minutes);
                }
            }

            else if (startTime - 30 > endTime)
            {
                Console.WriteLine("Early");
                time = startTime - endTime;

                if (time < 60)
                {
                    Console.WriteLine("{0} minutes before the start", time);
                }
                else
                {
                    hour = time / 60;
                    minutes = time % 60;

                    if (minutes < 10)
                    {
                        Console.WriteLine("{0}:0{1} hours before the start", hour, minutes);
                    }
                    else
                    {
                        Console.WriteLine("{0}:{1} hours before the start", hour, minutes);
                    }
                }
            }
        }
    }
}
