using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sum_Seconds
{
    class Program
    {
        static void Main(string[] args)
        {
            //Input time in second
            int timeOne = int.Parse(Console.ReadLine());
            int timeTwo = int.Parse(Console.ReadLine());
            int timeThree = int.Parse(Console.ReadLine());

            //Calculated total time in minutes
            int totalTime = timeOne + timeTwo + timeThree;

            int timeMin = totalTime / 60;
            int timeSec = totalTime % 60;

            //Output result
            if (timeSec < 10)
            {
                Console.WriteLine("{0}:0{1}", timeMin, timeSec);
            }
            else
            {
                Console.WriteLine("{0}:{1}", timeMin, timeSec);
            }
        }
    }
}
