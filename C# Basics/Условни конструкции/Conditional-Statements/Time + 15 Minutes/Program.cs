using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Time___15_Minutes
{
    class Program
    {
        static void Main(string[] args)
        {
            //Input hours & minutes
            int startHours = int.Parse(Console.ReadLine());
            int startMinutes = int.Parse(Console.ReadLine());

            // Time in minutes
            int timeInMin = startHours * 60 + startMinutes;

            int timePlus15 = timeInMin + 15;

            //Time in hours
            int finalHour = timePlus15 / 60;
            int finalMinutes = timePlus15 % 60;

            if (finalHour >= 24)
            {
                finalHour -= 24;
            }

            if (finalMinutes < 10)
            {
                Console.WriteLine("{0}:0{1}", finalHour, finalMinutes);
            }
            else
            {
                Console.WriteLine("{0}:{1}", finalHour, finalMinutes);
            }

        }
    }
}
