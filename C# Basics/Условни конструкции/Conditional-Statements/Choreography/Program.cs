using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Choreography
{
    class Program
    {
        static void Main(string[] args)
        {
            double steps = double.Parse(Console.ReadLine());
            double dancer = double.Parse(Console.ReadLine());
            double learningDays = double.Parse(Console.ReadLine());

            double dancePercentage = (steps / learningDays) / steps * 100;
            double dancerPercentage = Math.Ceiling(dancePercentage) / dancer;

            if (dancePercentage <= 13)
            {
                Console.WriteLine("Yes, they will succeed in that goal! {0:f2}%.", dancerPercentage);
            }
            else
            {
                Console.WriteLine("No, they will not succeed in that goal! Required {0:f2}% steps to be learned per day.", dancerPercentage);
            }
        }
    }
}
