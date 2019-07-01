using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Walking
{
    class Program
    {
        static void Main(string[] args)
        {
            string command = string.Empty;
            int steps = 0;

            while (steps < 10000)
            {
                command = Console.ReadLine();

                if(command == "Going home")
                {
                    steps += int.Parse(Console.ReadLine());
                    if (steps >= 10000)
                    {
                        break;
                    }
                    else
                    {
                        Console.WriteLine($"{10000 - steps} more steps to reach goal.");
                        break;
                    }
                }
                else
                {
                    steps += int.Parse(command);
                }
            }

            if (steps >= 10000)
            {
                Console.WriteLine("Goal reached! Good job!");
            }
        }
    }
}
