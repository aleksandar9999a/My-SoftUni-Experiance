using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace World_Swimming_Record
{
    class Program
    {
        static void Main(string[] args)
        {
            //Input Data
            double recordTime = double.Parse(Console.ReadLine());
            double metric = double.Parse(Console.ReadLine());
            double timeForMetric = double.Parse(Console.ReadLine());

            //Calculated
            double ivanTime = metric * timeForMetric;
            double slowingTime = Math.Floor(metric / 15);
            double slowingTimeSecongs = slowingTime * 12.5;
            double timePlusSlowing = ivanTime + slowingTimeSecongs;

            //Result
            if (timePlusSlowing < recordTime)
            {
                Console.WriteLine("Yes, he succeeded! The new world record is {0:f2} seconds.", timePlusSlowing);
            }
            else
            {
                Console.WriteLine("No, he failed! He was {0:f2} seconds slower.", timePlusSlowing - recordTime);
            }
        }
    }
}
